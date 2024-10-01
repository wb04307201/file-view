package cn.wubo.file.preview.page;

import cn.wubo.file.preview.config.FilePreviewProperties;
import cn.wubo.file.preview.core.FilePreviewInfo;
import cn.wubo.file.preview.core.FilePreviewService;
import cn.wubo.file.preview.exception.PageRuntimeException;
import cn.wubo.file.preview.utils.FileUtils;
import cn.wubo.file.preview.utils.IoUtils;
import cn.wubo.file.preview.utils.PageUtils;
import lombok.Data;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.function.ServerResponse;

import java.io.IOException;
import java.io.OutputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Map;

@Data
public abstract class AbstractPage implements IPage {

    protected static final String CONTEXT_PATH = "contextPath";
    protected static final String DOCUMENT_TYPE = "documentType";
    private String fileType;
    private String extName;
    private String contextPath;
    private FilePreviewInfo info;
    private FilePreviewService filePreviewService;
    private FilePreviewProperties properties;

    protected AbstractPage(String fileType, String extName, String contextPath, FilePreviewInfo info, FilePreviewService filePreviewService, FilePreviewProperties properties) {
        this.fileType = fileType;
        this.extName = extName;
        this.contextPath = contextPath;
        this.info = info;
        this.filePreviewService = filePreviewService;
        this.properties = properties;
    }

    protected ServerResponse writePage(String templateName, Map<String, Object> data) {
        return ServerResponse.ok().contentType(MediaType.TEXT_HTML).body(PageUtils.write(templateName, data));
    }

    protected ServerResponse sendRedirect(String url) {
        try {
            return ServerResponse.permanentRedirect(new URI(url)).contentType(MediaType.TEXT_HTML).build();
        } catch (URISyntaxException e) {
            throw new PageRuntimeException(e.getMessage(), e);
        }
    }

    /**
     * 生成文件预览的输出流响应
     *
     * 本方法通过获取文件内容的字节数组，准备一个服务器响应对象，该对象包含文件的MIME类型和内容长度
     * 最终将文件内容写入到HTTP请求的输出流中
     *
     * @return ServerResponse 构建的服务器响应对象，包含文件预览的输出流
     * @throws PageRuntimeException 当文件IO操作失败时抛出此异常，包含IO异常信息
     */
    protected ServerResponse commonOutputStream() {
        // 获取文件内容的字节数组
        byte[] bytes = filePreviewService.getBytes(info);
        try {
            // 构建服务器响应对象，设置响应类型为文件的MIME类型，设置内容长度为字节数组长度
            return ServerResponse.ok().contentType(MediaType.parseMediaType(FileUtils.getMimeType(getInfo().getFileName()))).contentLength(bytes.length).build((res, req) -> {
                // 将字节数组写入到HTTP请求的输出流中
                try (OutputStream os = req.getOutputStream()) {
                    IoUtils.writeToStream(bytes, os);
                } catch (IOException e) {
                    // 当IO操作失败时，抛出运行时异常，包含IO异常信息
                    throw new PageRuntimeException(e.getMessage(), e);
                }
                // 返回一个新的模型和视图对象，作为响应体内容
                return new ModelAndView();
            });
        } catch (IOException e) {
            // 当构建服务器响应过程中发生IO异常时，抛出运行时异常，包含IO异常信息
            throw new PageRuntimeException(e.getMessage(), e);
        }
    }

    protected String readLines() {
        try {
            return IoUtils.readLines(getFilePreviewService().getBytes(getInfo()), getInfo().getFileName());
        } catch (IOException e) {
            throw new PageRuntimeException(e.getMessage(), e);
        }
    }
}
