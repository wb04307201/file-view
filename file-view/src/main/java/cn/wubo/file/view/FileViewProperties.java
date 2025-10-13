package cn.wubo.file.view;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.ArrayList;
import java.util.List;

@Data
@ConfigurationProperties(prefix = "file.view")
public class FileViewProperties {

    private ServiceProperties bpmn;
    private ServiceProperties dmn;
    private ServiceProperties cmmn;
    private ServiceProperties code;
    private ServiceProperties epub;
    private ServiceProperties image;
    private ServiceProperties markdown;
    private ServiceProperties pdf;
    private ServiceProperties xmind;
    private ServiceProperties ofd;
    private ServiceProperties docx;
    private ServiceProperties excel;
    private ServiceProperties pptx;
    private ServiceProperties o3d;
    private ServiceProperties zip;
    private ServiceProperties cad;
    private List<StrategyProperties> strategies = new ArrayList<>();

    public FileViewProperties() {
        this.bpmn = new ServiceProperties(true);
        this.dmn = new ServiceProperties(true);
        this.cmmn = new ServiceProperties(true);
        this.code = new ServiceProperties(true);
        this.epub = new ServiceProperties(true);
        this.image = new ServiceProperties(true);
        this.markdown = new ServiceProperties(true);
        this.pdf = new ServiceProperties(true);
        this.xmind = new ServiceProperties(true);
        this.ofd = new ServiceProperties(true);
        this.docx = new ServiceProperties(true);
        this.excel = new ServiceProperties(true);
        this.pptx = new ServiceProperties(true);
        this.o3d = new ServiceProperties(true);
        this.zip = new ServiceProperties(true);
        this.cad = new ServiceProperties(true);
        this.strategies.add(new StrategyProperties("glob:*.bpmn", "bpmn"));
        this.strategies.add(new StrategyProperties("glob:*.dmn", "dmn"));
        this.strategies.add(new StrategyProperties("glob:*.cmmn", "cmmn"));
        this.strategies.add(new StrategyProperties("glob:*.{sh,c,cpp,cs,css,diff,go,graphql,ini,java,js,json,kt,less,lua,mk,m,pl,php,phtml,html,txt,py,pyrepl,r,rb,rs,scss,sh,sql,swift,ts,vb,wasm,xml,yaml,yml}", "code"));
        this.strategies.add(new StrategyProperties("glob:*.epub", "epub"));
        this.strategies.add(new StrategyProperties("glob:*.{jpg,png,bmp,gif,tiff,webp,svg,raw,heic,cr2,nef,orf,sr2}", "image"));
        this.strategies.add(new StrategyProperties("glob:*.md", "markdown"));
        this.strategies.add(new StrategyProperties("glob:*.pdf", "pdf"));
        this.strategies.add(new StrategyProperties("glob:*.xmind", "xmind"));
        this.strategies.add(new StrategyProperties("glob:*.ofd", "ofd"));
        this.strategies.add(new StrategyProperties("glob:*.docx", "docx"));
        this.strategies.add(new StrategyProperties("glob:*.{xlsx,xls}", "excel"));
        this.strategies.add(new StrategyProperties("glob:*.pptx", "pptx"));
        this.strategies.add(new StrategyProperties("glob:*.{3dm,3ds,3mf,amf,bim,brep,dae,fbx,fcstd,gltf,ifc,iges,step,stl,obj,off,ply,wrl}", "o3d"));
        this.strategies.add(new StrategyProperties("glob:*.zip", "zip"));
        this.strategies.add(new StrategyProperties("glob:*.{dwg,dxf}","cad"));
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ServiceProperties {
        private Boolean enable;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class StrategyProperties {
        private String syntaxAndPattern;
        private String serviceName;
    }
}
