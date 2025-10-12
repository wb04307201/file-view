package cn.wubo.file.view.storage.impl;

import cn.wubo.file.view.exception.LocalFileStorageException;
import cn.wubo.file.view.storage.dto.FileStorageInfo;
import cn.wubo.file.view.storage.IFileStorage;
import cn.wubo.file.view.utils.VersionUtls;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class LocalFileStorageImpl implements IFileStorage {

    private static final String BASE_PATH = "temp";

    private static List<FileStorageInfo> fileStorageInfos = new ArrayList<>();

    @Override
    public FileStorageInfo upload(String fileName, byte[] content, String mimeType) {
        try {
            String id = UUID.randomUUID().toString();
            String version = VersionUtls.generateContentVersion(content, id);
            Path filePath = Paths.get(BASE_PATH, version, fileName);
            Files.createDirectories(filePath.getParent());
            if (Files.exists(filePath)) Files.delete(filePath);
            Files.createFile(filePath);
            Files.write(filePath, content);
            FileStorageInfo fsi = new FileStorageInfo(id, fileName, content.length, mimeType, filePath.toString(), version);
            fileStorageInfos.add(fsi);
            return fsi;
        } catch (NoSuchAlgorithmException | IOException e) {
            throw new LocalFileStorageException(e.getMessage(), e);
        }
    }

    @Override
    public FileStorageInfo findById(String id) {
        return fileStorageInfos.stream()
                .filter(fsi -> fsi.getId().equals(id))
                .findAny()
                .orElseThrow(() -> new LocalFileStorageException("File info not found for id: " + id)
);
    }

    @Override
    public List<FileStorageInfo> list() {
        return fileStorageInfos;
    }

    @Override
    public byte[] getContentByLocation(String location) {
        Path filePath = Paths.get(location);
        try {
            return Files.exists(filePath) ? Files.readAllBytes(filePath) : null;
        } catch (IOException e) {
            throw new LocalFileStorageException(e.getMessage(), e);
        }
    }

    @Override
    public Boolean deleteById(String id) {
        FileStorageInfo fsi = findById(id);
        if (fsi != null) {
            try {
                Files.delete(Paths.get(fsi.getLocation()));
                fileStorageInfos.remove(fsi);
            } catch (IOException e) {
                throw new LocalFileStorageException(e.getMessage(),e);
            }
        }
        return true;
    }
}
