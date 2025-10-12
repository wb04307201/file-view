package cn.wubo.file.view.preview;

import org.springframework.web.servlet.function.ServerRequest;
import org.springframework.web.servlet.function.ServerResponse;

public interface IView {

    String getServiceName();

    ServerResponse handle(ServerRequest request);
}
