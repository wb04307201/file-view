package cn.wubo.file.view.preview;

import org.springframework.web.servlet.function.ServerRequest;
import org.springframework.web.servlet.function.ServerResponse;

import java.net.URI;

public class O3dView implements IView {
    @Override
    public String getServiceName() {
        return "o3d";
    }

    @Override
    public ServerResponse handle(ServerRequest request) {
        String id = request.pathVariable("id");
        return ServerResponse.temporaryRedirect(URI.create(String.format("/?path=o3d&id=%s",id))).build();
    }
}
