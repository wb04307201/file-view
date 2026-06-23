package cn.wubo.file.view.upload;

import java.time.Duration;
import java.time.Instant;
import java.util.Collections;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

public class InMemoryUploadSessionStore implements IUploadSessionStore {

    private static final Duration DEFAULT_TTL = Duration.ofHours(24);

    private final ConcurrentHashMap<String, UploadSession> sessions = new ConcurrentHashMap<>();
    private final ConcurrentHashMap<String, Set<Integer>> chunks = new ConcurrentHashMap<>();
    private final ConcurrentHashMap<String, String> hashToSessionId = new ConcurrentHashMap<>();

    @Override
    public UploadSession create(String filename, long size, String contentType, String contentHash) {
        String id = UUID.randomUUID().toString();
        UploadSession s = new UploadSession(id, filename, size, contentType, contentHash, Instant.now(), DEFAULT_TTL);
        sessions.put(id, s);
        chunks.put(id, ConcurrentHashMap.newKeySet());
        if (contentHash != null) {
            hashToSessionId.put(contentHash, id);
        }
        return s;
    }

    @Override
    public Optional<UploadSession> get(String uploadId) {
        UploadSession s = sessions.get(uploadId);
        if (s == null) return Optional.empty();
        if (Instant.now().isAfter(s.expiresAt())) {
            abort(uploadId);
            return Optional.empty();
        }
        return Optional.of(s);
    }

    @Override
    public void recordChunk(String uploadId, int index, long size, String md5) {
        Set<Integer> set = chunks.get(uploadId);
        if (set == null) throw new IllegalStateException("Unknown upload session: " + uploadId);
        set.add(index);
    }

    @Override
    public Set<Integer> listChunks(String uploadId) {
        Set<Integer> set = chunks.get(uploadId);
        return set == null ? Collections.emptySet() : Collections.unmodifiableSet(set);
    }

    @Override
    public void complete(String uploadId) {
        UploadSession s = sessions.remove(uploadId);
        chunks.remove(uploadId);
        if (s != null && s.contentHash() != null) {
            // Keep hashToSessionId mapping only if the upload succeeded; for instant upload hit we leave it.
            // Hash index is also used by the controller; do not clear here.
        }
    }

    @Override
    public void abort(String uploadId) {
        UploadSession s = sessions.remove(uploadId);
        chunks.remove(uploadId);
        if (s != null && s.contentHash() != null) {
            hashToSessionId.remove(s.contentHash(), uploadId);
        }
    }

    @Override
    public boolean existsByHash(String contentHash) {
        if (contentHash == null) return false;
        return hashToSessionId.containsKey(contentHash);
    }

    @Override
    public void sweepExpired() {
        Instant now = Instant.now();
        sessions.entrySet().removeIf(e -> now.isAfter(e.getValue().expiresAt()));
        // Note: chunks for removed sessions are also removed
        chunks.keySet().retainAll(sessions.keySet());
    }

    // Test hook — package-private — forces a session to be considered expired on the next sweep
    void forceExpireForTest(String uploadId) {
        UploadSession s = sessions.get(uploadId);
        if (s == null) return;
        UploadSession expired = new UploadSession(s.id(), s.filename(), s.size(), s.mimeType(), s.contentHash(),
                Instant.now().minusSeconds(3600), Duration.ofSeconds(1));
        sessions.put(uploadId, expired);
    }
}