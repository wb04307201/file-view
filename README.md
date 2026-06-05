# File View

<div align="right">
  English | <a href="README.zh-CN.md">中文</a>
</div>

> A lightweight file preview Starter component for Spring Boot that supports online preview of 20+ file formats (docx/xlsx/pptx/PDF/BPMN/images/videos/code/3D models/CAD, etc.) with a simple Maven dependency.

![Maven Central](https://img.shields.io/maven-central/v/io.github.wb04307201/file-view-spring-boot-starter?style=flat-square)
[![star](https://gitee.com/wb04307201/file-view/badge/star.svg?theme=dark)](https://gitee.com/wb04307201/file-view)
[![fork](https://gitee.com/wb04307201/file-view/badge/fork.svg?theme=dark)](https://gitee.com/wb04307201/file-view)
[![star](https://img.shields.io/github/stars/wb04307201/file-view)](https://github.com/wb04307201/file-view)
[![fork](https://img.shields.io/github/forks/wb04307201/file-view)](https://github.com/wb04307201/file-view)  
![License](https://img.shields.io/badge/License-Apache2.0-blue.svg) ![JDK](https://img.shields.io/badge/JDK-25+-green.svg) ![SpringBoot](https://img.shields.io/badge/Spring%20Boot-4+-green.svg)

---

## Version Information

> **1.4.0 and above**: Based on JDK 25 + Spring Boot 4.x (current branch)
> **1.4.0-sb3**: Based on JDK 17 + Spring Boot 3.x

### Maven Dependency

#### JDK 25 + Spring Boot 4.x (Recommended)
```xml
<dependency>
    <groupId>io.github.wb04307201</groupId>
    <artifactId>file-view-spring-boot-starter</artifactId>
    <version>1.4.0</version>
</dependency>
```

#### JDK 17 + Spring Boot 3.x
```xml
<dependency>
    <groupId>io.github.wb04307201</groupId>
    <artifactId>file-view-spring-boot-starter</artifactId>
    <version>1.4.0-sb3</version>
</dependency>
```

---

## Supported File Types
- Office files (docx, xlsx, pptx)
- Business Process Management files (bpmn, dmn, cmmn)
- Image files
- Video files
- Audio files
- Document files (pdf, epub, ofd)
- TIFF image files
- Text/Code files (c, cpp, cs, css, diff, go, graphql, html, ini, java, js, json, kt, less, lua, m, mk, pl, php, phtml, py, pyrepl, r, rb, rs, scss, sh, sql, swift, ts, vb, wasm, xml, yaml, yml)
- Markdown documents
- 3D model files (3dm, 3ds, 3mf, amf, bim, brep, dae, fbx, fcstd, gltf, ifc, iges, step, stl, obj, off, ply, wrl)
- Mind map files (xmind)
- Compressed files (zip)
- CAD (dwg, dxf)

## Integration

### Maven Dependency
```xml
<dependency>
    <groupId>io.github.wb04307201</groupId>
    <artifactId>file-view-spring-boot-starter</artifactId>
    <version>1.0.0</version>
</dependency>
```

### Configuration
```yaml
file:
  view:
    ## The following are default processors, no configuration required by default
    bpmn:
      enable: true
    dmn:
      enable: true
    cmmn:
      enable: true
    code:
      enable: true
    epub:
      enable: true
    image:
      enable: true
    markdown:
      enable: true
    pdf:
      enable: true
    xmind:
      enable: true
    docx:
      enable: true
    excel:
      enable: true
    pptx:
      enable: true
    o3d:
      enable: true
    zip:
      enable: true
    cad:
      enable: true
    csv:
      enable: true
    tiff:
      enable: true
    ofd:
      enable: true
    ## The following are default filename and processor matching rules, no configuration required by default
    strategies:
      - syntaxAndPattern: glob:*.bpmn
        serviceName: bpmn
      - syntaxAndPattern: glob:*.dmn
        serviceName: dmn
      - syntaxAndPattern: glob:*.cmmn
        serviceName: cmmn
      - syntaxAndPattern: glob:*.{c,cpp,cs,css,diff,go,graphql,html,ini,java,js,json,kt,less,lua,m,mk,pl,php,phtml,py,pyrepl,r,rb,rs,scss,sh,sql,swift,ts,vb,wasm,xml,yaml,yml}
        serviceName: code
      - syntaxAndPattern: glob:*.epub
        serviceName: epub
      - syntaxAndPattern: glob:*.{jpg,png,bmp,gif,webp,svg,raw,heic,cr2,nef,orf,sr2}
        serviceName: image
      - syntaxAndPattern: glob:*.md
        serviceName: markdown
      - syntaxAndPattern: glob:*.pdf
        serviceName: pdf
      - syntaxAndPattern: glob:*.xmind
        serviceName: xmind
      - syntaxAndPattern: glob:*.docx
        serviceName: docx
      - syntaxAndPattern: glob:*.{xlsx,xls}
        serviceName: excel
      - syntaxAndPattern: glob:*.pptx
        serviceName: pptx
      - syntaxAndPattern: glob:*.{3dm,3ds,3mf,amf,bim,brep,dae,fbx,fcstd,gltf,ifc,iges,step,stl,obj,off,ply,wrl}
        serviceName: o3d
      - syntaxAndPattern: glob:*.zip
        serviceName: zip
      - syntaxAndPattern: glob:*.csv
        serviceName: csv
      - syntaxAndPattern: glob:*.{tif,tiff}
        serviceName: tiff
      - syntaxAndPattern: glob:*.ofd
        serviceName: ofd
      - syntaxAndPattern: glob:*.{dwg,dxf}
        serviceName: cad
```

`syntaxAndPattern` matches filenames by specifying a syntax (such as glob or regex):
- glob: `*.txt`
- regex: `(.*)\.txt`

## Usage

### Static Resource Library
Some file types use built-in renderers, such as: pdf, epub, xmind, zip, image, code, markdown, cmmn, dmn, bpmn, etc.
The JS library resources are loaded from jsDelivr. If you cannot get resources from jsDelivr, you can add `file-view-static` to localize the JS libraries.
```xml
<dependency>
    <groupId>io.github.wb04307201</groupId>
    <artifactId>file-view-static</artifactId>
    <version>1.0.0</version>
</dependency>
```

### Access Built-in Interface for File Upload and Preview
Visit `http://localhost:8080/file/view`
![img.png](img.png)
![gif.gif](gif.gif)
> All preview pages include a floating download button in the top-right corner. Hover near the corner to reveal it, then click to download the original file.

### REST API

| Method | Path | Description |
|--------|------|-------------|
| POST | `/file/view/upload` | Upload file (supports multiple files, returns `List<FileStorageInfo>` array) |
| GET | `/file/view/list` | Get list of uploaded files |
| GET | `/file/view/{id}` | Preview file by ID |
| POST | `/file/view/deleteById` | Delete file by ID (request body JSON: `{"id": "fileId"}`) |
| GET | `/wopi/files/{id}` | WOPI endpoint: get file metadata |
| GET | `/wopi/files/{id}/contents` | WOPI endpoint: get file content |

### Preview Extension
The following uses OnlyOffice as an example to illustrate how to extend previews:
1. Install [OnlyOffice Document Server Developer Edition](https://api.onlyoffice.com/docs/docs-api/get-started/basic-concepts/) using docker
```bash
docker run --name onlyoffice -i -t -d -p 80:80 -e JWT_ENABLED=false -e ALLOW_PRIVATE_IP_ADDRESS=true onlyoffice/documentserver-de
```

2. File preview renderer extension  
Write an implementation of the `IView.java` interface `OnlyOfficeView.java`:
```java
package cn.wubo.file.view.test;

import cn.wubo.file.view.preview.IView;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.function.ServerRequest;
import org.springframework.web.servlet.function.ServerResponse;

import java.net.URI;

@Service
public class OnlyOfficeView implements IView {
    @Override
    public String getServiceName() {
        return "onlyoffice";
    }

    @Override
    public ServerResponse handle(ServerRequest request) {
        String id = request.pathVariable("id");
        return ServerResponse.temporaryRedirect(URI.create(String.format("/onlyoffice.html?id=%s",id))).build();
    }
}
```

Create page `onlyoffice.html`:
```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/static/common.js"></script>
    <script type="text/javascript" src="http://localhost/web-apps/apps/api/documents/api.js"></script>
    <title>onlyoffice</title>
    <style>
        html, body {
            height: 100%;
            padding: 0;
            margin: 0;
        }
    </style>
</head>
<body>
<div id="placeholder"></div>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const id = getUrlParam('id');

        fetch(`/wopi/files/${id}`)
            .then(response => response.json())
            .then(data => {
                const fileName = data.BaseFileName;
                const fileType = data.BaseFileName.substring(data.BaseFileName.lastIndexOf('.') + 1);
                let documentType;
                if (fileType === 'docx' || fileType === 'doc') documentType = 'word';
                if (fileType === 'xlsx' || fileType === 'xls') documentType = 'cell';
                if (fileType === 'pptx' || fileType === 'ppt') documentType = 'slide';

                const config = {
                    "type": "desktop",
                    "width": "100%",
                    "height": "100%",
                    "documentType": `${documentType}`,
                    "document": {
                        "fileType": `${fileType}`,
                        "key": `${data.id}`,
                        "title": `${fileName}`,
                        "url": `${window.location.origin}/wopi/files/${data.id}/contents`,
                    },
                    "editorConfig": {
                        "mode": "view",
                        "lang": "zh"
                    },
                };

                console.log('config',config)

                const docEditor = new DocsAPI.DocEditor("placeholder", config);
            });
    });
</script>
</body>
</html>
```

3. Modify configuration, disable duplicate renderers, redefine file matching rules `application.yml`:
```yaml
file:
  view:
    docx:
      enable: false
    excel:
      enable: false
    pptx:
      enable: false
    strategies:
      - ...
    #      - syntaxAndPattern: glob:*.docx
    #        serviceName: docx
    #      - syntaxAndPattern: glob:*.xlsx
    #        serviceName: excel
    #      - syntaxAndPattern: glob:*.pptx
    #        serviceName: pptx
      - syntaxAndPattern: glob:*.{docx,doc,xlsx,xls,pptx,ppt}
        serviceName: onlyoffice
```

Preview effect:  
![gif_1.gif](gif_1.gif)

### File Storage Extension
The following uses MinIO as an example to illustrate how to extend file storage:
1. Install MinIO using docker:
```bash
docker run -p 9000:9000 -p 9001:9001 --name minio -e "MINIO_ROOT_USER=ROOTUSER" -e "MINIO_ROOT_PASSWORD=CHANGEME123" quay.io/minio/minio server /data --console-address ":9001"
```

2. Add MinIO dependency:
```xml
<dependency>
    <groupId>io.minio</groupId>
    <artifactId>minio</artifactId>
    <version>8.6.0</version>
</dependency>
```

3. Write an implementation of the `IFileStorage.java` interface `MinioFileStorageImpl.java`:
```java
package cn.wubo.file.view.test;

import cn.wubo.file.view.exception.LocalFileStorageException;
import cn.wubo.file.view.storage.IFileStorage;
import cn.wubo.file.view.storage.dto.FileStorageInfo;
import cn.wubo.file.view.utils.VersionUtls;
import io.minio.GetObjectArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import io.minio.RemoveObjectArgs;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class MinioFileStorageImpl implements IFileStorage {

    private final MinioClient minioClient;

    private static final String BUCKET_NAME = "temp";

    private static List<FileStorageInfo> fileStorageInfos = new ArrayList<>();

    public MinioFileStorageImpl() {
        this.minioClient = new MinioClient.Builder()
                .endpoint("http://127.0.0.1:9000")
                .credentials("ROOTUSER", "CHANGEME123")
                .build();
    }

    @Override
    public FileStorageInfo upload(String fileName, byte[] content, String mimeType) {
        try {
            String id = UUID.randomUUID().toString();
            String version = VersionUtls.generateContentVersion(content, id);
            Path filePath = Paths.get(version, fileName);

            minioClient.putObject(
                    PutObjectArgs.builder()
                            .bucket(BUCKET_NAME)
                            .object(filePath.toString())
                            .stream(new ByteArrayInputStream(content), content.length, -1)
                            .contentType(mimeType)
                            .build()
            );

            FileStorageInfo fpi = new FileStorageInfo(id, fileName, content.length, mimeType, filePath.toString(), version);
            fileStorageInfos.add(fpi);
            return fpi;
        } catch (NoSuchAlgorithmException | IOException | InvalidKeyException | InvalidResponseException | InsufficientDataException | InternalException | ErrorResponseException | XmlParserException | ServerException e) {
            throw new LocalFileStorageException(e.getMessage(), e);
        }
    }

    @Override
    public FileStorageInfo findById(String id) {
        return fileStorageInfos.stream()
                .filter(fpi -> fpi.getId().equals(id))
                .findAny()
                .orElseThrow(() -> new LocalFileStorageException("File info not found for id: " + id));
    }

    @Override
    public List<FileStorageInfo> list() {
        return fileStorageInfos;
    }

    @Override
    public byte[] getContentByLocation(String location) {
        try {
            InputStream is = minioClient.getObject(
                    GetObjectArgs.builder()
                            .bucket(BUCKET_NAME)
                            .object(location)
                            .build()
            );
            return is.readAllBytes();
        } catch (IOException | InvalidKeyException | InvalidResponseException | NoSuchAlgorithmException |
                 InsufficientDataException | InternalException | ErrorResponseException | XmlParserException | ServerException e) {
            throw new LocalFileStorageException(e.getMessage(), e);
        }
    }

    @Override
    public Boolean deleteById(String id) {
        FileStorageInfo fsi = findById(id);
        if (fsi != null) {
            try {
                minioClient.removeObject(
                        RemoveObjectArgs.builder()
                                .bucket(BUCKET_NAME)
                                .object(fsi.getLocation())
                                .build()
                );
                fileStorageInfos.remove(fsi);
            } catch (IOException | InvalidKeyException | InvalidResponseException | NoSuchAlgorithmException |
                     InsufficientDataException | InternalException | ErrorResponseException | XmlParserException | ServerException e) {
                throw new LocalFileStorageException(e.getMessage(), e);
            }
        }
        return true;
    }
}
```

### Request Authentication

By default, all `/file/view/*` and `/wopi/*` endpoints allow unauthenticated access. To add authentication, implement the `IAuth` interface and register it as a Spring bean. The default pass-all implementation will be automatically replaced.

#### API-style authentication (403 response)

```java
@Service
public class TokenAuth implements IAuth {
    @Override
    public AuthResult check(HttpServletRequest request, String path) {
        String token = request.getHeader("X-Api-Token");
        if (!"your-secret-token".equals(token)) {
            return AuthResult.deny("Invalid token");
        }
        return AuthResult.allow();
    }
}
```

#### BFF-style authentication (302 redirect to login page)

```java
@Service
public class BffAuth implements IAuth {
    @Override
    public AuthResult check(HttpServletRequest request, String path) {
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            // Redirect browser to login page
            return AuthResult.redirect("/login?from=" + path);
        }
        return AuthResult.allow();
    }
}
```

#### AuthResult outcomes

| Return | HTTP behavior | Use case |
|--------|---------------|----------|
| `AuthResult.allow()` | Proceed with the request | Authenticated / no auth needed |
| `AuthResult.deny("reason")` | 403 + JSON `{"error":"reason"}` | API clients (frontend fetch, OnlyOffice callbacks, etc.) |
| `AuthResult.redirect("/login")` | 302 browser redirect | BFF mode — redirect unauthenticated browser to login page |

#### Path patterns to authenticate

By default, only paths starting with `/file/view` and `/wopi` require authentication. You can customize which paths are protected in `application.yml`:

```yaml
file:
  view:
    auth:
      path-patterns:
        - /file/view/**    # all sub-paths
        - /wopi/**
        - /api/**           # also protect custom endpoints
        # - /**             # intercept ALL requests
```

Supported pattern styles:

| Pattern | Meaning |
|---------|---------|
| `/file/view` | Exact match |
| `/file/*` | Direct sub-paths (one level) |
| `/file/**` | All recursive sub-paths |

> **Note**: If `/**` is configured, make sure to exclude your login endpoint in the `IAuth` implementation to avoid redirect loops.

## Third-party Libraries Used

| File Type | Third-party Library |
|-----------|---------------------|
| DOCX files | [docx-preview](https://github.com/VolodymyrBaydak/docx-preview) + [JSZip](https://github.com/Stuk/jszip) |
| XLSX files | [SheetJS](https://github.com/SheetJS/sheetjs) |
| PPTX files | [pptxviewjs](https://github.com/nicktomach/pptxviewjs) + [Chart.js](https://github.com/chartjs/Chart.js) |
| Business Process Management files | [bpmn-js](https://github.com/bpmn-io/bpmn-js) / [cmmn-js](https://github.com/bpmn-io/cmmn-js) / [dmn-js](https://github.com/bpmn-io/dmn-js) |
| Image files | [Viewer.js](https://github.com/fengyuanchen/viewerjs) |
| Document files (PDF) | [PDFObject](https://github.com/pipwerks/PDFObject) |
| Document files (EPUB) | [epub.js](https://github.com/futurepress/epub.js) + [JSZip](https://github.com/Stuk/jszip) |
| Text/Code files | [highlight.js](https://github.com/highlightjs/highlight.js) |
| Markdown documents | [Vditor](https://github.com/Vanessa219/vditor) |
| CSV files | [Papa Parse](https://github.com/mholt/PapaParse) |
| 3D model files | [Online 3D Viewer](https://github.com/kovacsv/Online3DViewer) + [Three.js](https://github.com/mrdoob/three.js) |
| Mind map files | [xmind-embed-viewer](https://github.com/xmindltd/xmind-embed-viewer) |
| Compressed files | [JSZip](https://github.com/Stuk/jszip) |
| CAD files (DWG/DXF) | [@mlightcad/cad-simple-viewer](https://github.com/mlightcad/cad-viewer) + [Three.js](https://github.com/mrdoob/three.js) |
| TIFF image files | [UTIF.js](https://github.com/photopea/UTIF.js) + [pako](https://github.com/nodeca/pako) |
| OFD files | [xq-doc-viewer](https://www.npmjs.com/package/xq-doc-viewer) |