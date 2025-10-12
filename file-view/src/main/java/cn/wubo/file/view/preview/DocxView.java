package cn.wubo.file.view.preview;

import org.springframework.web.servlet.function.ServerRequest;
import org.springframework.web.servlet.function.ServerResponse;

import java.net.URI;

public class DocxView implements IView {
    @Override
    public String getServiceName() {
        return "docx";
    }

    @Override
    public ServerResponse handle(ServerRequest request) {
        String id = request.pathVariable("id");
        return ServerResponse.temporaryRedirect(URI.create(String.format("/?path=docx&id=%s",id))).build();
    }
}
