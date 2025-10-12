package cn.wubo.file.view.storage;

import cn.wubo.file.view.storage.dto.FileStorageInfo;

import java.util.List;

public interface IFileStorage {
    FileStorageInfo upload(String fileName, byte[] content,String mimeType);
    FileStorageInfo findById(String id);
    List<FileStorageInfo> list();
    byte[] getContentByLocation(String location);
    Boolean deleteById(String id);
}
