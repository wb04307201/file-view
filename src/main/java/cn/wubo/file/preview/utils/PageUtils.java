package cn.wubo.file.preview.utils;

import cn.wubo.file.preview.exception.PageRuntimeException;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

import java.io.IOException;
import java.io.StringWriter;
import java.util.Map;

public class PageUtils {

    private PageUtils() {
    }

    /**
     * 使用FreeMarker模板引擎写入字符串
     *
     * @param templateName 模板文件名
     * @param params 传入模板的参数键值对
     * @return 渲染后的字符串
     *
     * 该方法通过FreeMarker模板引擎，将给定的模板文件和参数渲染成字符串具体功能描述如下：
     * 1. 创建一个StringWriter对象，用于存储渲染后的字符串
     * 2. 创建FreeMarker的Configuration对象，并设置模板加载的类路径和版本
     * 3. 根据模板文件名和字符集获取Template对象
     * 4. 将参数和Template对象处理后写入StringWriter中
     * 5. 如果处理过程中出现异常，则捕获后抛出自定义的PageRuntimeException异常
     */
    public static String write(String templateName, Map<String, Object> params) {
        try (StringWriter sw = new StringWriter()) {
            Configuration cfg = new Configuration(freemarker.template.Configuration.VERSION_2_3_23);
            cfg.setClassForTemplateLoading(PageUtils.class, "/template");
            Template template = cfg.getTemplate(templateName, "UTF-8");
            template.process(params, sw);
            return sw.toString();
        } catch (TemplateException | IOException e) {
            throw new PageRuntimeException(e.getMessage(), e);
        }
    }
}
