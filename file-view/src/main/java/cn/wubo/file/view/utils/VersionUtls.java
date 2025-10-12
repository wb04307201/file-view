package cn.wubo.file.view.utils;

import lombok.experimental.UtilityClass;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@UtilityClass
public class VersionUtls {
    private static final String TIME_PATTERN = "yyyyMMdd";

    public String generateContentVersion(byte[] fileContent,String uuid) throws NoSuchAlgorithmException {
        String timestamp = LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern(TIME_PATTERN));
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] hash = md.digest(fileContent);
        StringBuilder sb = new StringBuilder();
        for (byte b : hash) {
            sb.append(String.format("%02x", b));
        }
        return timestamp + "-" + sb.substring(0, 8) + "-" + uuid.substring(0, 6);
    }// 示例输出：20241007-3a7b9c8d-4e5f6
}
