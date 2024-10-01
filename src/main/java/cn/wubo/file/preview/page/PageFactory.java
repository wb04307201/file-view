package cn.wubo.file.preview.page;

import cn.wubo.file.preview.config.FilePreviewProperties;
import cn.wubo.file.preview.core.FilePreviewInfo;
import cn.wubo.file.preview.core.FilePreviewService;
import cn.wubo.file.preview.exception.PageRuntimeException;
import cn.wubo.file.preview.utils.FileUtils;

import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class PageFactory {

    private static final Set<String> OFFICE_FILE_TYPES = Collections.unmodifiableSet(new HashSet<>(Arrays.asList("word", "excel", "power point", "text")));

    private PageFactory() {
    }

    /**
     * 创建抽象页面实例
     * 本方法旨在根据文件预览信息、服务、属性以及上下文路径来创建一个合适的抽象页面实例
     * 它根据文件类型（如Office文档、PDF等）和配置的Office转换器类型来决定创建哪种类型的页面
     * 如果配置了特定的Office转换器（如"only"、"lool"或"cool"），且文件为Office类型，则会使用相应的转换器
     * 否则，将根据文件类型创建一个默认的页面类型
     *
     * @param info 文件预览信息，包含文件名等信息
     * @param filePreviewService 文件预览服务，用于处理文件预览的逻辑
     * @param properties 配置属性，包括Office转换器的类型
     * @param contextPath 上下文路径，用于页面初始化
     * @return 返回一个根据文件类型和配置创建的抽象页面实例
     * @throws PageRuntimeException 当实例化页面失败时抛出此运行时异常
     */
    public static AbstractPage create(FilePreviewInfo info, FilePreviewService filePreviewService, FilePreviewProperties properties, String contextPath) {
        try {
            // 提取文件扩展名，用于确定文件类型
            String extName = FileUtils.extName(info.getFileName());
            String fileType = FileUtils.fileType(extName);

            // 定义页面类变量，稍后将根据文件类型和配置确定具体类
            Class<? extends AbstractPage> clazz;

            // 根据配置的Office转换器类型和文件是否为Office类型，选择相应的页面类
            if ("only".equals(properties.getOfficeConverter()) && OFFICE_FILE_TYPES.contains(fileType)) {
                clazz = PageType.getClass("only");
            } else if ("lool".equals(properties.getOfficeConverter()) && OFFICE_FILE_TYPES.contains(fileType)) {
                clazz = PageType.getClass("lool");
            } else if ("cool".equals(properties.getOfficeConverter()) && OFFICE_FILE_TYPES.contains(fileType)) {
                clazz = PageType.getClass("cool");
            } else {
                clazz = PageType.getClass(fileType);
            }

            // 使用反射创建页面实例，传入必要的初始化参数
            return clazz.getConstructor(String.class, String.class, String.class, FilePreviewInfo.class, FilePreviewService.class, FilePreviewProperties.class)
                        .newInstance(fileType, extName, contextPath, info, filePreviewService, properties);
        } catch (InstantiationException | IllegalAccessException | NoSuchMethodException |
                 InvocationTargetException e) {
            // 当页面实例化失败时，抛出自定义异常
            throw new PageRuntimeException(e.getMessage(), e);
        }
    }
}
