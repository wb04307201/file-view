package cn.wubo.file.preview.office.impl;

import cn.wubo.file.preview.exception.ConvertRuntimeException;
import cn.wubo.file.preview.office.IOfficeConverter;
import cn.wubo.file.preview.utils.FileUtils;
import cn.wubo.file.preview.utils.IoUtils;
import org.jodconverter.core.DocumentConverter;
import org.jodconverter.core.document.DefaultDocumentFormatRegistry;

import java.io.InputStream;
import java.io.OutputStream;

public class JodOfficeConverter implements IOfficeConverter {

    DocumentConverter converter;

    public JodOfficeConverter(DocumentConverter converter) {
        this.converter = converter;
    }

    /**
     * 根据文件类型转换文件格式
     *
     * @param is 输入流，用于读取源文件内容
     * @param os 输出流，用于写入转换后的文件内容
     * @param fileName 源文件名，用于确定文件类型和生成转换后的文件名
     * @return 返回转换后文件的名称如果转换失败，将抛出ConvertRuntimeException异常
     *
     * 此方法根据源文件的类型，将文件内容转换为特定格式并写入到指定的输出流中
     * 支持的文件类型包括Word、PowerPoint和Excel，分别转换为PDF和HTML格式
     * 对于不支持的文件类型，直接复制源文件内容到输出流
     */
    public String convert(InputStream is, OutputStream os, String fileName) {
        // 获取文件扩展名
        String extName = FileUtils.extName(fileName);
        // 根据扩展名获取文件类型
        String fileType = FileUtils.fileType(extName);
        try {
            // 根据文件类型执行不同的转换操作
            return switch (fileType) {
                case "word", "power point" -> {
                    // 将Word或PowerPoint文件转换为PDF格式
                    converter.convert(is).to(os).as(DefaultDocumentFormatRegistry.PDF).execute();
                    // 返回转换后的文件名（扩展名改为pdf）
                    yield fileName.replace(extName, "pdf");
                }
                case "excel" -> {
                    // 将Excel文件转换为HTML格式
                    converter.convert(is).to(os).as(DefaultDocumentFormatRegistry.HTML).execute();
                    // 返回转换后的文件名（扩展名改为html）
                    yield fileName.replace(extName, "html");
                }
                default -> {
                    // 对于不支持的文件类型，直接复制文件内容
                    IoUtils.copy(is, os);
                    // 返回原文件名
                    yield fileName;
                }
            };
        } catch (Exception e) {
            // 如果发生异常，抛出自定义的转换运行时异常
            throw new ConvertRuntimeException(e.getMessage(), e);
        }
    }
}
