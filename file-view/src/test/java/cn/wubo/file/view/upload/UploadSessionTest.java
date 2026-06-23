package cn.wubo.file.view.upload;

import org.junit.jupiter.api.Test;

import java.time.Instant;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

class UploadSessionTest {
    @Test
    void holdsAllFields() {
        String id = UUID.randomUUID().toString();
        Instant now = Instant.now();
        UploadSession s = new UploadSession(id, "a.txt", 1024L, "text/plain", "deadbeef", now, java.time.Duration.ofHours(24));
        assertThat(s.id()).isEqualTo(id);
        assertThat(s.filename()).isEqualTo("a.txt");
        assertThat(s.size()).isEqualTo(1024L);
        assertThat(s.mimeType()).isEqualTo("text/plain");
        assertThat(s.contentHash()).isEqualTo("deadbeef");
        assertThat(s.createdAt()).isEqualTo(now);
        assertThat(s.ttl()).isEqualTo(java.time.Duration.ofHours(24));
    }

    @Test
    void expiresAtIsComputedFromCreatedAtAndTtl() {
        Instant t = Instant.parse("2026-06-23T10:00:00Z");
        UploadSession s = new UploadSession("id", "f", 1L, "x", null, t, java.time.Duration.ofMinutes(30));
        assertThat(s.expiresAt()).isEqualTo(t.plus(java.time.Duration.ofMinutes(30)));
    }
}