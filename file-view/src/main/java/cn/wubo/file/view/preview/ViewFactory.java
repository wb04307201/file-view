package cn.wubo.file.view.preview;

import cn.wubo.file.view.FileViewProperties;
import cn.wubo.file.view.storage.IFileStorage;
import cn.wubo.file.view.storage.dto.FileStorageInfo;
import org.springframework.web.servlet.function.ServerRequest;
import org.springframework.web.servlet.function.ServerResponse;

import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.nio.file.PathMatcher;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ViewFactory {

    private final Map<PathMatcher, IView> previewServices;

    private final IView defaultService;

    private final IFileStorage fileStorage;

    public ViewFactory(List<IView> viewServices, List<FileViewProperties.StrategyProperties> strategies, IFileStorage fileStorage) {

        Map<PathMatcher, IView> map = new HashMap<>();
        for (FileViewProperties.StrategyProperties strategy : strategies) {
            viewServices.parallelStream()
                    .filter(view ->
                            view.getServiceName().equals(strategy.getServiceName())
                    )
                    .findAny()
                    .ifPresent(view ->
                            map.put(FileSystems.getDefault().getPathMatcher(strategy.getSyntaxAndPattern()), view)
                    );
        }
        this.defaultService = viewServices.parallelStream()
                .filter(view -> view.getServiceName().equals("default"))
                .findAny()
                .orElse(null);
        this.previewServices = map;
        this.fileStorage = fileStorage;
    }

    public ServerResponse view(ServerRequest request) {
        String id = request.pathVariable("id");
        FileStorageInfo fsi = fileStorage.findById(id);
        Path patch = Paths.get(fsi.getBaseFileName());
        IView preview = previewServices.entrySet().stream()
                .filter(entry -> entry.getKey().matches(patch))
                .findFirst()
                .map(Map.Entry::getValue)
                .orElse(defaultService);

        return preview.handle(request);
    }

}
