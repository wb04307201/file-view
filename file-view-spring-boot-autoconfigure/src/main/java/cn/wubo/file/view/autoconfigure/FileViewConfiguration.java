package cn.wubo.file.view.autoconfigure;

import cn.wubo.file.view.FileViewProperties;
import cn.wubo.file.view.preview.*;
import cn.wubo.file.view.storage.IFileStorage;
import cn.wubo.file.view.storage.dto.FileStorageInfo;
import cn.wubo.file.view.storage.impl.LocalFileStorageImpl;
import jakarta.servlet.http.Part;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.function.RouterFunction;
import org.springframework.web.servlet.function.RouterFunctions;
import org.springframework.web.servlet.function.ServerResponse;

import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AutoConfiguration
@EnableConfigurationProperties(FileViewProperties.class)
public class FileViewConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public IFileStorage fileStorage() {
        return new LocalFileStorageImpl();
    }

    @Bean
    public IView defaultView() {
        return new DefaultView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.bpmn.enable:true}")
    public IView bpmnView() {
        return new BpmnView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.dmn.enable:true}")
    public IView dmnView(){
        return new DmnView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.cmmn.enable:true}")
    public IView cmmnView(){
        return new CmmnView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.code.enable:true}")
    public IView codeView(){
        return new CodeView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.epub.enable:true}")
    public IView epubView(){
        return new EpubView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.image.enable:true}")
    public IView imageView(){
        return new ImageView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.markdown.enable:true}")
    public IView markdownView(){
        return new MarkdownView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.pdf.enable:true}")
    public IView pdfView(){
        return new PdfView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.xmind.enable:true}")
    public IView xmindView(){
        return new XmindView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.ofd.enable:true}")
    public IView ofdView(){
        return new OfdView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.docx.enable:true}")
    public IView docxView(){
        return new DocxView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.excel.enable:true}")
    public IView excelView(){
        return new ExcelView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.pptx.enable:true}")
    public IView pptxView(){
        return new PptxView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.o3d.enable:true}")
    public IView o3dView(){
        return new O3dView();
    }

    @Bean
    @ConditionalOnExpression("${file.view.zip.enable:true}")
    public IView zipView(){
        return new ZipView();
    }

    @Bean
    public ViewFactory viewFactory(List<IView> viewServices, FileViewProperties properties, IFileStorage fileStorage) {
        return new ViewFactory(viewServices, properties.getStrategies(), fileStorage);
    }

    @Bean("wb04307201FileViewRouter")
    public RouterFunction<ServerResponse> fileViewRouter(IFileStorage storage,ViewFactory viewFactory) {
        RouterFunctions.Builder builder = RouterFunctions.route();

        builder.GET("/file/view", request -> ServerResponse.ok().contentType(MediaType.TEXT_HTML).body(new ClassPathResource(("/list.html"))));


        builder.POST("/file/view/upload", request -> {
            Part part = request.multipartData().getFirst("file");
            if (part == null) {
                throw new FileUploadException("Required file part 'file' is missing in multipart request");
            }
            try (InputStream is = part.getInputStream()) {
                return ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(storage.upload(part.getSubmittedFileName(), is.readAllBytes(), part.getContentType()));
            }
        });

        builder.GET("/file/view/list", request -> ServerResponse.ok()
                .contentType(MediaType.APPLICATION_JSON).body(storage.list())
        );

        builder.POST("/file/view/deleteById", request -> {
            Map<String, String> map = request.body(new ParameterizedTypeReference<HashMap<String, String>>() {
            });
            return ServerResponse.ok().body(storage.deleteById(map.get("id")));
        });

        builder.GET("/file/view/{id}", viewFactory::view);

        addWopiRoutes(builder, storage);

        return builder.build();
    }

    private void addWopiRoutes(RouterFunctions.Builder builder, IFileStorage storage) {
        builder.GET("/wopi/files/{id}", request -> {
            String id = request.pathVariable("id");
            return ServerResponse.ok().body(storage.findById(id));
        }).GET("/wopi/files/{id}/contents", request -> {
            String id = request.pathVariable("id");
            FileStorageInfo fsi = storage.findById(id);
            return ServerResponse.ok()
                    .contentType(MediaType.parseMediaType(fsi.getMimeType())) // 根据文件名设置响应的内容类型
                    .contentLength(fsi.getSize()) // 设置响应内容的长度
                    .build((res, req) -> {
                        try (OutputStream os = req.getOutputStream()) {
                            os.write(storage.getContentByLocation(fsi.getLocation()));
                            os.flush();
                        }
                        return new ModelAndView(); // 返回空的ModelAndView对象
                    });
        });
    }

}
