package cn.wubo.file.view.storage.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FileStorageInfo implements Serializable {
    private String id;
    @JsonProperty("BaseFileName")
    private String baseFileName;
    @JsonProperty("Size")
    private int size;
    private String mimeType;
    private String location;
    @JsonProperty("Version")
    private String version;
}
