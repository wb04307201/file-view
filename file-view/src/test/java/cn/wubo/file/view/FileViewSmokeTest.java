package cn.wubo.file.view;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class FileViewSmokeTest {
    @Test
    void jvmAndLombokWiringWorks() {
        FileViewProperties props = new FileViewProperties();
        assertThat(props.getStrategies()).isNotEmpty();
    }
}
