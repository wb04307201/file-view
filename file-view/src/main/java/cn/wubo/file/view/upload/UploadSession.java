package cn.wubo.file.view.upload;

import java.time.Duration;
import java.time.Instant;

public record UploadSession(
        String id,
        String filename,
        long size,
        String mimeType,
        String contentHash,
        Instant createdAt,
        Duration ttl
) {
    public Instant expiresAt() {
        return createdAt.plus(ttl);
    }
}