# Chunked Upload + Instant Upload (秒传) — Design

**Date:** 2026-06-23
**Status:** Approved — awaiting implementation
**Target version:** 1.5.0 (minor, no breaking changes)

---

## 1. Background & Motivation

File View's current upload API is a single-shot multipart endpoint:

```
POST /file/view/upload   →   List<FileStorageInfo>
```

This works for small files but has three production gaps:

1. **No progress feedback** — the entire body is buffered server-side before the response is sent. The browser cannot show meaningful progress.
2. **No resume** — if the network drops or the browser tab closes mid-upload, the user must start over.
3. **No deduplication** — uploading the same file twice stores two copies and returns two IDs.

This design adds chunked upload, resumable upload, and content-hash-based instant upload (秒传) without breaking the existing single-shot endpoint.

### Scope (in)
- Backend: chunked upload HTTP API, session store abstraction, local chunked storage, frontend integration
- Frontend: minimal Uploader component that replaces the current `<input type=file>` with progress bar + cancel button. Drag-drop / paste / batch UI are explicitly out of scope for this iteration.

### Scope (out, deferred)
- Drag-and-drop, paste-to-upload, batch UI polish
- Server-side format conversion (e.g., docx → PDF)
- Watermarking
- Signed preview links with TTL
- Per-file ACL

---

## 2. Architecture

### 2.1 Three new abstractions

```java
// (a) Pluggable upload-session storage
public interface IUploadSessionStore {
    UploadSession create(String filename, long size, String contentType, String contentHash);
    Optional<UploadSession> get(String uploadId);
    void recordChunk(String uploadId, int index, long size, String md5);
    Set<Integer> listChunks(String uploadId);
    void complete(String uploadId);
    void abort(String uploadId);
    boolean existsByHash(String contentHash);
}

// (b) Optional chunked capability layered on top of IFileStorage
public interface IChunkedFileStorage extends IFileStorage {
    OutputStream openChunk(String uploadId, int index) throws IOException;
    InputStream readChunk(String uploadId, int index) throws IOException;
    void assemble(String uploadId, String targetLocation, int totalChunks) throws IOException;
    void deleteChunks(String uploadId) throws IOException;
}

// (c) Content fingerprint for instant upload
public record ContentFingerprint(String sha256) {}
```

### 2.2 Default implementations

- `InMemoryUploadSessionStore` — `ConcurrentHashMap`-backed. Default. Suitable for single-instance deployments.
- `DiskUploadSessionStore` — metadata in `{temp}/upload-sessions/{uploadId}.json`. Survives restart. Suitable when `temp/` is shared (NFS) across instances.
- `LocalChunkedFileStorage` — decorator over `LocalFileStorageImpl`, writes chunks to `{temp}/upload/{uploadId}/{index}.part`. Assembles by streaming chunks in index order into the target file.

### 2.3 Fallback for non-chunked IFileStorage

If a user provides a custom `IFileStorage` (e.g., `MinioFileStorageImpl`) that does **not** implement `IChunkedFileStorage`, the controller transparently falls back to a streaming-buffer path:

1. Stream chunks into a temp file at `{temp}/upload/{uploadId}/merged.bin` (avoids full in-memory buffering — safe even for 10 GB files).
2. Call the legacy `IFileStorage.upload(bytes, ...)` once with the assembled bytes.
3. Delete the temp file and chunk files.

This preserves the "extension point" promise: any existing user keeps working without code changes, and the fallback does **not** defeat the purpose of chunked transport (the network still happens in small chunks; only the final upload to the legacy storage backend is monolithic).

---

## 3. HTTP API

All routes mounted under the existing RouterFunction-based file-view routes.

| Method | Path | Body | Response |
|---|---|---|---|
| POST | `/file/view/upload/init` | JSON `{filename, size, contentType, contentHash}` | `{uploadId, chunkSize, existingFile: FileStorageInfo?}` |
| PUT | `/file/view/upload/{uploadId}/chunks/{index}` | raw bytes (header `Content-MD5` recommended) | `{uploadedSize}` |
| GET | `/file/view/upload/{uploadId}/status` | — | `{chunks: int[], totalChunks}` |
| POST | `/file/view/upload/{uploadId}/complete` | `{totalChunks}` | `FileStorageInfo` |
| DELETE | `/file/view/upload/{uploadId}` | — | `204` |

### 3.1 Init

- Validates `size <= max-file-size`, returns `413` otherwise.
- If `contentHash` is non-null and `existsByHash(contentHash)` is true, returns `existingFile` populated and **does not create a new session**. The client should treat the upload as complete.
- Otherwise creates a new session with a UUID `uploadId`, returns `chunkSize` from config.

### 3.2 Chunk PUT

- Idempotent per `(uploadId, index)`:
  - First PUT: write chunk file, record in session.
  - Subsequent PUT with **same** Content-MD5: return `200` with header `X-Chunk-Duplicate: true`.
  - Subsequent PUT with **different** Content-MD5: return `409`.
- Per-`(uploadId, index)` write lock (in-memory `ReentrantLock`) prevents concurrent corruption.
- Body size must equal `chunkSize` for all chunks except the last (last may be smaller).

### 3.3 Status

- Returns the set of chunk indices the server has on disk.
- Used by clients to resume after a crash.

### 3.4 Complete

- Verifies `listChunks(uploadId)` covers `[0..totalChunks-1]`. If not, returns `422` with `{missing: int[]}`.
- If `verify-hash-on-complete` is true and the client provided `contentHash` at init, recomputes SHA-256 over the assembled bytes and compares. Returns `422` on mismatch.
- Calls `IChunkedFileStorage.assemble` (or fallback buffer-and-upload).
- Deletes chunk files, marks session complete.

### 3.5 Delete

- Aborts the session, deletes all chunk files, removes session metadata.
- Idempotent: returns `204` even if the session is already gone.

---

## 4. Data Flow

### 4.1 Fresh upload (with optional instant upload)

```
Client                                          Server
  │                                               │
  │── POST /upload/init ────────────────────────►│
  │   {filename, size, contentType,              │
  │    contentHash?: "abc123..."}                │
  │                                               ├─► existsByHash("abc123")?
  │                                               │   yes → existingFile, no session
  │◄── {uploadId, chunkSize,                    │   no  → create session
  │      existingFile: null}                     │
  │                                               │
  │  [split file, 3 concurrent PUTs]             │
  │── PUT /chunks/0 ───────────────────────────►│  write temp/upload/{id}/0
  │── PUT /chunks/1 ───────────────────────────►│  write temp/upload/{id}/1
  │── PUT /chunks/2 ───────────────────────────►│  write temp/upload/{id}/2
  │   ...                                        │
  │── POST /complete ──────────────────────────►│
  │   {totalChunks: 10}                          │
  │                                               ├─► listChunks == [0..9]?
  │                                               ├─► assemble → IFileStorage.upload
  │                                               ├─► sessionStore.complete
  │                                               ├─► deleteChunks
  │◄── FileStorageInfo ────────────────────────│
```

### 4.2 Resume after browser refresh

```
Client (localStorage has uploadId)         Server
  │                                          │
  │── GET /upload/{id}/status ────────────►│
  │◄── {chunks: [0,1,2,5,6],               │
  │      totalChunks: 10}                   │
  │                                          │
  │  upload only [3,4,7,8,9]                │
  │── PUT /chunks/3 ──────────────────────►│
  │  ...                                    │
  │── POST /complete ────────────────────►│
```

### 4.3 Cancel

```
Client ── DELETE /upload/{id} ──► Server: sessionStore.abort() + deleteChunks()
                                  → 204
```

---

## 5. Configuration

All settings live under `file.view.upload.*` and default to backward-compatible values.

```yaml
file:
  view:
    upload:
      enabled: true                       # total kill-switch
      chunk-size: 5MB                     # 1MB–100MB
      max-file-size: 10GB
      session-ttl: PT24H                  # ISO-8601 duration
      max-concurrent-chunks: 3
      enable-instant-upload: true         # global 秒传 toggle
      verify-hash-on-complete: true
      hash-threshold: 1GB                 # client-side skip hash above this
      session-store-type: memory          # memory | disk
```

A scheduled task (`@Scheduled(fixedDelay = 5min)`) sweeps expired sessions and deletes their chunk files.

---

## 6. Error Handling

| Scenario | HTTP | Server action | Client guidance |
|---|---|---|---|
| `size > max-file-size` at init | 413 | reject init | prompt user to split |
| Same index PUT, same MD5 | 200 + `X-Chunk-Duplicate: true` | idempotent | ignore |
| Same index PUT, different MD5 | 409 | reject | full file restart |
| Chunk MD5 mismatch (`Content-MD5`) | 400 | reject + delete chunk | retry chunk |
| Session missing/expired | 410 | — | prompt restart |
| `complete` with missing chunks | 422 + `{missing: int[]}` | no merge | re-upload missing |
| Server-computed hash ≠ client hash | 422 + reason | no merge, clean chunks | full restart |
| Disk full during merge | 507 | mark session failed, clean | alert operator |
| Chunk larger than `chunk-size` cap | 413 | reject | adjust client chunk size |

---

## 7. Threading & Concurrency

- `IUploadSessionStore` must be thread-safe. Both built-in implementations use `ConcurrentHashMap` plus fine-grained locks where needed.
- Per-`(uploadId, index)` write lock prevents two concurrent PUTs from corrupting the same chunk file. The lock is held only for the duration of the disk write (not the network round-trip).
- Scheduled cleanup runs on a single-thread scheduler; safe under multi-instance only if `session-store-type: disk` and the temp directory is shared (NFS) — multi-instance without shared storage is unsupported and documented.

---

## 8. Module Layout

```
file-view/src/main/java/cn/wubo/file/view/upload/
├── IUploadSessionStore.java
├── UploadSession.java
├── InMemoryUploadSessionStore.java
├── DiskUploadSessionStore.java
├── ContentFingerprint.java
├── IChunkedFileStorage.java
└── LocalChunkedFileStorage.java

file-view/src/main/java/cn/wubo/file/view/storage/impl/
└── LocalFileStorageImpl.java          (modify: implement IChunkedFileStorage)

file-view-spring-boot-autoconfigure/src/main/java/cn/wubo/file/view/autoconfigure/
└── FileViewAutoConfiguration.java      (modify: register beans, mount routes)

file-view-web/src/.../components/
└── Uploader.vue                       (new)
```

---

## 9. Testing Strategy

### Backend unit (`file-view`)
- `InMemoryUploadSessionStoreTest`: create/get/recordChunk/listChunks/complete/abort/existsByHash/TTL/expiry-cleanup
- `DiskUploadSessionStoreTest`: same, plus restart-recovery
- `LocalChunkedFileStorageTest`: write/read/assemble/missing-chunk-assemble-fails
- `UploadControllerTest` (`@WebMvcTest`): init happy / size-cap / instant-upload-hit; chunk PUT happy / duplicate-idempotent / MD5-mismatch / unknown-session; status; complete happy / missing / hash-mismatch; delete idempotent
- `FallbackPathTest`: mock `IFileStorage` without `IChunkedFileStorage`, verify chunks are buffered and legacy `upload` is called

### Backend integration (`file-view-test`)
- 5-chunk 25 MB upload → file readable, content matches
- Resume: 3 chunks → simulate crash (next call goes straight to `status`) → upload remaining → complete
- Instant upload: same `contentHash` twice → second `init` returns same `FileStorageInfo.id`
- Cancel: 2 chunks → `DELETE` → chunk dir gone

### Frontend (`file-view-web`)
- `uploader.spec.ts` (Vitest): state-machine transitions (idle → hashing → uploading → paused → completed/cancelled/error), chunk splitting, progress calculation, cancel-via-AbortController, resume-from-localStorage

### Manual smoke
- Upload a 100 MB file in the browser, observe progress
- Refresh mid-upload, verify resume
- Upload same file twice, verify instant path

---

## 10. Migration & Compatibility

- **API**: pure additive — old `POST /file/view/upload` unchanged.
- **Config**: `file.view.upload.*` has backward-compatible defaults; omitting the block = "new APIs available but not advertised in docs for upgrade opt-in."
- **Beans**: `LocalFileStorageImpl` gains `IChunkedFileStorage` capability via interface implementation, no behavior change for existing callers.
- **Version**: minor bump (`1.5.0`).

---

## 11. Documentation Deliverables

- `README.md` + `README.zh-CN.md`: new section "分片上传与秒传 / Chunked Upload & Instant Upload"
- Migration guide: 5-step upgrade from single-shot to chunked
- Copy-pasteable frontend snippet for the new Uploader component

---

## 12. Open Questions

None at design time. Implementation-phase questions (e.g., exact JSON field names, error code strings) will be decided in the implementation plan.