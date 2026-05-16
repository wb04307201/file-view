# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

**File View** — A lightweight file preview starter component for Spring Boot 3.x that supports online preview of various document and media formats (Office, BPMN, images, video, audio, PDF, OFD, code, markdown, 3D models, CAD, XMind, ZIP, etc.).

- **JDK**: 17+
- **Spring Boot**: 3.x
- **Build tool**: Maven
- **Frontend**: Vue 3 + Vite

## Module Structure

This is a multi-module Maven project with 6 modules:

| Module | Description |
|--------|-------------|
| `file-view-web` | Vue 3 frontend. Builds to `target/classes/META-INF/resources` and is packaged as a JAR dependency consumed by `file-view` |
| `file-view` | Core library. Contains `IView` interface (view renderers), `IFileStorage` interface (storage abstraction), `FileViewProperties` (configuration), and static HTML resources for each file type |
| `file-view-spring-boot-autoconfigure` | Spring Boot auto-configuration. Registers all `IView` beans conditionally, creates `ViewFactory`, defines functional `RouterFunction` routes. Uses `@AutoConfiguration` + `spring.factories`-style imports |
| `file-view-spring-boot-starter` | Empty starter JAR — just pulls in `file-view-spring-boot-autoconfigure` as the single dependency users add |
| `file-view-static` | Bundles third-party JS libraries (highlight.js, etc.) as static resources for offline use |
| `file-view-test` | Test/demo application. Includes `MinioFileStorageImpl` and `OnlyOfficeView` as extension examples |

## Key Architecture

### Extension Points

1. **`IView`** (`file-view/.../preview/IView.java`) — Interface for file preview renderers. Implement and register as a `@Service`/`@Bean`. Each implementation returns an HTML page path via `ServerResponse`. The `ViewFactory` routes requests to the correct view based on filename glob patterns defined in `FileViewProperties.StrategyProperties`.

2. **`IFileStorage`** (`file-view/.../storage/IFileStorage.java`) — Interface for file storage backends. Default implementation uses local filesystem (`LocalFileStorageImpl`). Replace by providing a custom `@Bean` — the auto-configuration uses `@ConditionalOnMissingBean`.

### Request Flow

- `POST /file/view/upload` — Upload file → returns `FileStorageInfo` (id, filename, size, location, version)
- `GET /file/view/{id}` — Preview file → `ViewFactory` matches filename extension to an `IView`, which redirects to the appropriate HTML renderer
- `GET /wopi/files/{id}` / `GET /wopi/files/{id}/contents` — WOPI-style endpoints for external document servers (e.g., OnlyOffice)

### Configuration

All config under `file.view.*` prefix. Each file type has an `enable` toggle (default true). The `strategies` list maps glob patterns to service names. See README.md for full defaults.

## Common Commands

### Build entire project
```bash
mvn clean install
```

### Build frontend (file-view-web)
```bash
cd file-view-web
npm install    # first time only
npm run build  # outputs to target/classes/META-INF/resources
```

> The web module must be built **before** the `file-view` module, since the `file-view` module depends on `file-view-web` JAR which contains the compiled frontend assets.

### Run the test/demo application
```bash
cd file-view-test
mvn spring-boot:run
```
Then visit `http://localhost:8080/file/view`.

### Build and run in one step
```bash
mvn clean install && cd file-view-test && mvn spring-boot:run
```

### Run tests
```bash
mvn test
```

## Important Notes

- The `file-view-web` Vite config outputs directly to `target/classes/META-INF/resources`, so after building, the web assets are embedded in the JAR and served by Spring Boot's static resource handling.
- `ViewFactory` uses `java.nio.file.PathMatcher` with glob syntax to route files to views.
- `FileStorageInfo` has `@JsonProperty` annotations for WOPI compatibility (`BaseFileName`, `Size`, `Version`).
- The default `LocalFileStorageImpl` stores files in a `temp/` directory with version-based subdirectories.
