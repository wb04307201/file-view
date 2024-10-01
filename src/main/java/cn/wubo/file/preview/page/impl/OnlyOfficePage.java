package cn.wubo.file.preview.page.impl;

import cn.wubo.file.preview.config.FilePreviewProperties;
import cn.wubo.file.preview.core.FilePreviewInfo;
import cn.wubo.file.preview.core.FilePreviewService;
import cn.wubo.file.preview.page.AbstractPage;
import io.fusionauth.jwt.Signer;
import io.fusionauth.jwt.domain.JWT;
import io.fusionauth.jwt.hmac.HMACSigner;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.function.ServerResponse;

import java.util.HashMap;
import java.util.Map;

/**
 * config json示例
 * https://api.onlyoffice.com/editors/advanced
 * token示例
 * https://api.onlyoffice.com/editors/signature/#java
 */
public class OnlyOfficePage extends AbstractPage {
    public OnlyOfficePage(String fileType, String extName, String contextPath, FilePreviewInfo info, FilePreviewService filePreviewService, FilePreviewProperties properties) {
        super(fileType, extName, contextPath, info, filePreviewService, properties);
    }

    @Override
    public ServerResponse build() {
        // 创建一个存储上下文数据的映射
        Map<String, Object> data = new HashMap<>();
        // 将上下文路径添加到数据映射中
        data.put(CONTEXT_PATH, getContextPath());
        // 构造并添加OnlyOffice API的URL到数据映射中
        data.put("url", String.format("%s/web-apps/apps/api/documents/api.js", getProperties().getOnlyOffice().getDomain()));

        // 创建一个存储配置信息的映射
        Map<String, Object> config = new HashMap<>();
        // 设置配置类型为桌面应用
        config.put("type", "desktop");
        // 设置配置的宽度和高度
        config.put("width", "100%");
        config.put("height", "100%");
        // 根据文件类型设置文档类型并添加到配置中
        config.put(DOCUMENT_TYPE, getDoucmentType(getFileType()));

        // 创建一个存储文档信息的映射
        Map<String, Object> document = new HashMap<>();
        // 设置文档的文件类型
        document.put("fileType", getExtName());
        // 设置文档的唯一键值
        document.put("key", getInfo().getId());
        // 设置文档的标题
        document.put("title", getInfo().getOriginalFilename());
        // 构造并添加文档的下载URL
        document.put("url", getProperties().getOnlyOffice().getDownload() + "?id=" + getInfo().getId());
        // 将文档信息添加到配置中
        config.put("document", document);

        // 创建一个存储编辑器配置信息的映射
        Map<String, Object> editorConfig = new HashMap<>();
        // 设置编辑器模式为查看模式
        editorConfig.put("mode", "view");
        // 构造并添加编辑器的回调URL
        editorConfig.put("callbackUrl", getProperties().getOnlyOffice().getCallback() + "?id=" + getInfo().getId());
        // 设置编辑器的语言
        editorConfig.put("lang", "zh");

        // 创建一个存储用户信息的映射
        Map<String, Object> user = new HashMap<>();
        // 设置用户的ID和名称
        user.put("id", "file preview");
        user.put("name", "file preview");
        // 将用户信息添加到编辑器配置中
        editorConfig.put("user", user);
        // 将编辑器配置添加到主配置中
        config.put("editorConfig", editorConfig);

        // 获取OnlyOffice的密钥
        String secret = getProperties().getOnlyOffice().getSecret();
        // 如果密钥存在，则生成JWT令牌并添加到配置中
        if (StringUtils.hasText(secret)) {
            Signer signer = HMACSigner.newSHA256Signer(secret);
            JWT jwt = new JWT();
            for (Map.Entry<String, Object> entry : config.entrySet())
                jwt.addClaim(entry.getKey(), entry.getValue());
            config.put("token", JWT.getEncoder().encode(jwt, signer));
        }

        // 将配置信息添加到数据映射中
        data.put("config", config);

        // 渲染并返回OnlyOffice文档页面
        return writePage("onlyoffice.ftl", data);
    }

    private String getDoucmentType(String fileType) {
        if ("word".equals(fileType) || "text".equals(fileType)) return "word";
        return "excel".equals(fileType) ? "cell" : "slide";
    }
}
