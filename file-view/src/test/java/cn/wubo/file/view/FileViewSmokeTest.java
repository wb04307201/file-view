package cn.wubo.file.view;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class FileViewSmokeTest {
    @Test
    void jvmAndLombokWiringWorks() {
        FileViewProperties props = new FileViewProperties();
        assertThat(props.getStrategies()).isNotEmpty();
    }

    @Test
    void uploadPropertiesHaveBackwardCompatibleDefaults() {
        FileViewProperties props = new FileViewProperties();
        FileViewProperties.UploadProperties up = props.getUpload();
        assertThat(up.isEnabled()).isTrue();
        assertThat(up.getChunkSize()).isEqualTo("5MB");
        assertThat(up.getMaxFileSize()).isEqualTo("10GB");
        assertThat(up.getSessionTtl()).isEqualTo("PT24H");
        assertThat(up.getMaxConcurrentChunks()).isEqualTo(3);
        assertThat(up.isEnableInstantUpload()).isTrue();
        assertThat(up.isVerifyHashOnComplete()).isTrue();
        assertThat(up.getHashThreshold()).isEqualTo("1GB");
        assertThat(up.getSessionStoreType()).isEqualTo("memory");
    }
}
