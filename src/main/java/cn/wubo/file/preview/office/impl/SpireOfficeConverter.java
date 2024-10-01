package cn.wubo.file.preview.office.impl;

import cn.wubo.file.preview.exception.ConvertRuntimeException;
import cn.wubo.file.preview.office.IOfficeConverter;
import cn.wubo.file.preview.utils.FileUtils;
import cn.wubo.file.preview.utils.IoUtils;
import com.spire.doc.Document;
import com.spire.doc.FileFormat;
import com.spire.presentation.Presentation;
import com.spire.xls.Workbook;

import java.io.InputStream;
import java.io.OutputStream;

public class SpireOfficeConverter implements IOfficeConverter {

    /**
     * 转换文件为PDF格式
     * 根据文件类型，使用相应的方法将文件转换为PDF格式如果文件已经是PDF或不支持转换，则直接返回或抛出异常
     *
     * @param is 输入流，用于读取待转换的文件
     * @param os 输出流，用于写入转换后的文件
     * @param fileName 文件名，用于确定文件类型和生成新的文件名
     * @return 转换后的新文件名
     * @throws ConvertRuntimeException 如果文件转换过程中发生错误，则抛出此运行时异常
     */
    public String convert(InputStream is, OutputStream os, String fileName) {
        // 获取文件扩展名
        String extName = FileUtils.extName(fileName);
        // 根据扩展名确定文件类型
        String fileType = FileUtils.fileType(extName);
        // 初始化新文件名为原始文件名
        String newFileName = fileName;
        try {
            // 根据文件类型进行相应的转换操作
            switch (fileType) {
                case "word":
                    // 处理Word文档转换为PDF
                    Document document = new Document();
                    document.loadFromStream(is, FileFormat.Auto);
                    document.saveToStream(os, com.spire.doc.FileFormat.PDF);
                    newFileName = newFileName.replace(extName, "pdf");
                    break;
                case "excel":
                    // 处理Excel表格转换为PDF
                    // 当转换为HTML时会产生多个文件，因此改为转换为PDF
                    Workbook workbook = new Workbook();
                    workbook.loadFromStream(is);
                    workbook.saveToStream(os, com.spire.xls.FileFormat.PDF);
                    newFileName = newFileName.replace(extName, "pdf");
                    break;
                case "power point":
                    // 处理PowerPoint演示文稿转换为PDF
                    Presentation presentation = new Presentation();
                    presentation.loadFromStream(is, com.spire.presentation.FileFormat.AUTO);
                    presentation.saveToFile(os, com.spire.presentation.FileFormat.PDF);
                    newFileName = newFileName.replace(extName, "pdf");
                    break;
                default:
                    // 如果文件类型不支持转换，直接复制原始文件内容到输出流
                    IoUtils.copy(is, os);
                    break;
            }
        } catch (Exception e) {
            // 如果发生异常，抛出自定义的运行时异常
            throw new ConvertRuntimeException(e.getMessage(), e);
        }
        // 返回转换后的新文件名
        return newFileName;
    }
}
