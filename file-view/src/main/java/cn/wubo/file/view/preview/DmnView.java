package cn.wubo.file.view.preview;

import org.springframework.web.servlet.function.ServerRequest;
import org.springframework.web.servlet.function.ServerResponse;

import java.net.URI;

public class DmnView implements IView {
    @Override
    public String getServiceName() {
        return "dmn";
    }

    @Override
    public ServerResponse handle(ServerRequest request) {
        String id = request.pathVariable("id");
        return ServerResponse.temporaryRedirect(URI.create(String.format("/dmn.html?id=%s",id))).build();
    }
}
