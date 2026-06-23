package cn.wubo.file.view.upload;

import java.util.Optional;
import java.util.Set;

public interface IUploadSessionStore {
    UploadSession create(String filename, long size, String contentType, String contentHash);
    Optional<UploadSession> get(String uploadId);
    void recordChunk(String uploadId, int index, long size, String md5);
    Set<Integer> listChunks(String uploadId);
    void complete(String uploadId);
    void abort(String uploadId);
    boolean existsByHash(String contentHash);
    void sweepExpired();
}