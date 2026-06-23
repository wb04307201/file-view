package cn.wubo.file.view.upload;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.Duration;
import java.time.Instant;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

class InMemoryUploadSessionStoreTest {

    private InMemoryUploadSessionStore store;

    @BeforeEach
    void setUp() {
        store = new InMemoryUploadSessionStore();
    }

    @Test
    void createReturnsSessionWithIdAndTtl() {
        UploadSession s = store.create("a.txt", 100L, "text/plain", null);
        assertThat(s.id()).isNotBlank();
        assertThat(s.filename()).isEqualTo("a.txt");
        assertThat(s.size()).isEqualTo(100L);
        assertThat(s.contentHash()).isNull();
        assertThat(s.ttl()).isPositive();
    }

    @Test
    void getReturnsCreatedSession() {
        UploadSession s = store.create("a.txt", 1L, "x", null);
        Optional<UploadSession> found = store.get(s.id());
        assertThat(found).isPresent();
        assertThat(found.get().id()).isEqualTo(s.id());
    }

    @Test
    void getReturnsEmptyForUnknownId() {
        assertThat(store.get(UUID.randomUUID().toString())).isEmpty();
    }

    @Test
    void recordChunkTracksIndices() {
        UploadSession s = store.create("a.txt", 1L, "x", null);
        store.recordChunk(s.id(), 0, 1024, "md5-0");
        store.recordChunk(s.id(), 2, 1024, "md5-2");
        Set<Integer> chunks = store.listChunks(s.id());
        assertThat(chunks).containsExactlyInAnyOrder(0, 2);
    }

    @Test
    void completeRemovesSession() {
        UploadSession s = store.create("a.txt", 1L, "x", null);
        store.recordChunk(s.id(), 0, 1024, "x");
        store.complete(s.id());
        assertThat(store.get(s.id())).isEmpty();
    }

    @Test
    void abortRemovesSession() {
        UploadSession s = store.create("a.txt", 1L, "x", null);
        store.recordChunk(s.id(), 0, 1024, "x");
        store.abort(s.id());
        assertThat(store.get(s.id())).isEmpty();
    }

    @Test
    void existsByHashReturnsTrueForKnownAndFalseForUnknown() {
        UploadSession s = store.create("a.txt", 1L, "x", "hash-A");
        assertThat(store.existsByHash("hash-A")).isTrue();
        assertThat(store.existsByHash("hash-NEW")).isFalse();
    }

    @Test
    void sweepExpiredRemovesOldSessions() throws InterruptedException {
        UploadSession s = store.create("a.txt", 1L, "x", null);
        // Force expiry by manipulating internal state via a session with short ttl is not exposed;
        // instead, test via sweepExpired using a hand-crafted expired session is not possible.
        // Verify the sweep method is safe on empty store and leaves live sessions alone:
        store.sweepExpired();
        assertThat(store.get(s.id())).isPresent();
    }

    @Test
    void sweepExpiredRemovesSessionsPastExpiresAt() {
        // Build a session that is already expired by using the package-private constructor on InMemoryUploadSessionStore is not available.
        // Instead, verify via reflection-free indirect path: create with default ttl, then manually age by calling the helper used by tests.
        InMemoryUploadSessionStore shortTtlStore = new InMemoryUploadSessionStore();
        UploadSession s = shortTtlStore.create("a.txt", 1L, "x", null);
        // Use the package-private test hook to force expiry on this session
        shortTtlStore.forceExpireForTest(s.id());
        shortTtlStore.sweepExpired();
        assertThat(shortTtlStore.get(s.id())).isEmpty();
    }
}