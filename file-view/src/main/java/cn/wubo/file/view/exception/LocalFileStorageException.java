package cn.wubo.file.view.exception;

public class LocalFileStorageException extends RuntimeException {

    public LocalFileStorageException(String message) {
        super(message);
    }

    public LocalFileStorageException(String message, Throwable cause) {
        super(message, cause);
    }
}
