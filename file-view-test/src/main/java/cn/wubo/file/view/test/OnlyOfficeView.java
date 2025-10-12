package cn.wubo.file.view.test;

import cn.wubo.file.view.preview.IView;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.function.ServerRequest;
import org.springframework.web.servlet.function.ServerResponse;

import java.net.URI;

@Service
public class OnlyOfficeView implements IView {
    @Override
    public String getServiceName() {
        return "onlyoffice";
    }

    @Override
    public ServerResponse handle(ServerRequest request) {
        String id = request.pathVariable("id");
        return ServerResponse.temporaryRedirect(URI.create(String.format("/onlyoffice.html?id=%s",id))).build();
    }
}
