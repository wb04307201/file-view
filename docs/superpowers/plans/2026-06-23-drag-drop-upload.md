# Drag-and-Drop File Upload Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add drag-and-drop file upload to the built-in list page so users can drop files anywhere on the page to upload them, with a visible drop-overlay and reusing the existing multipart upload path.

**Architecture:** Window-level `dragenter` / `dragover` / `dragleave` / `drop` event listeners in `list.js` toggle a full-screen overlay defined in `list.html` + `list.css`. The existing click-to-upload handler is refactored into a shared `uploadFiles(files)` function so both the click button and the drop handler call the same upload code. No backend changes.

**Tech Stack:** Plain HTML / CSS / vanilla JavaScript (no framework). No new dependencies. No backend changes.

**Spec:** `docs/superpowers/specs/2026-06-23-drag-drop-upload-design.md`

**Testing note:** This project has no frontend test framework. Each task uses a **manual smoke checklist** as the verification step (per the spec's §7). Smoke checks are run against a live dev server (`cd file-view-test && mvn spring-boot:run`) using a real browser at `http://localhost:8080/file/view`.

---

## Global Constraints

- **No new dependencies** (no npm, no bundler, no test framework added).
- **No backend changes.** The existing `POST /file/view/upload` endpoint is the only upload path.
- **No changes to `<div id="drop-zone">`** — it is the file-table container; the new overlay is a sibling.
- **Backward compat:** the existing click-to-upload button and `<input type="file">` flow must keep working unchanged.
- **Static resource paths:** `list.html` is at `file-view/src/main/resources/list.html`; `list.js` and `list.css` are at `file-view/src/main/resources/META-INF/resources/static/`.
- **Commit cadence:** one commit per task at the end of the task.

---

## File Structure

### Modified files

```
file-view/src/main/resources/list.html
    # Add <div id="drop-overlay" class="drop-overlay" hidden> ... </div>
    #   immediately after </main>, before the closing </body> or wherever
    #   the existing toast <div> lives (matches the spec §3).

file-view/src/main/resources/META-INF/resources/static/list.css
    # Append .drop-overlay, .drop-overlay[hidden], .drop-overlay-content
    #   and the SVG/p rules at the end of the file (spec §4).

file-view/src/main/resources/META-INF/resources/static/list.js
    # 1. Extract upload logic from the fileInput change handler into a
    #      top-level function `uploadFiles(files)`.
    # 2. Add IIFE `setupDragDrop` that wires window-level drag listeners
    #      and toggles #drop-overlay visibility using a dragCounter
    #      (spec §5).

README.md
    # Append one sentence to the "Access Built-in Interface for File
    #   Upload and Preview" section (spec §9).

README.zh-CN.md
    # Same as above in Chinese (spec §9).
```

### File responsibility table

| File | Responsibility |
|---|---|
| `list.html` | Hosts the new `#drop-overlay` element |
| `list.css` | Styles the overlay (position, dashed border, centered card) |
| `list.js` | Drag/drop event wiring + shared `uploadFiles` function |
| `README.md` / `README.zh-CN.md` | One-sentence note that drag-drop is supported |

---

## Task 1: Add the drop overlay (HTML + CSS)

**Files:**
- Modify: `file-view/src/main/resources/list.html`
- Modify: `file-view/src/main/resources/META-INF/resources/static/list.css`

This task adds the visual layer only — no JS, no behavior change. After this task, the overlay exists in the DOM but is hidden, and dropping files still triggers the browser's default behavior.

- [ ] **Step 1: Snapshot the current state**

Run: `cd C:\developer\IdeaProjects\file-view && cat file-view/src/main/resources/list.html | head -20`
Expected: confirms the file currently contains `<main class="content">` followed by `<div id="drop-zone" class="drop-zone"> ... </main>` and a `<div id="toast" class="toast">` at the end of `<body>`. (This step is informational — do not modify the file yet.)

- [ ] **Step 2: Add the #drop-overlay element to list.html**

In `file-view/src/main/resources/list.html`, find the line `<div id="toast" class="toast"></div>` and add the following block **immediately before it** (the overlay is a sibling of the toast, both inside `<body>`):

```html
<!-- Drag-and-drop overlay (shown only during a file drag) -->
<div id="drop-overlay" class="drop-overlay" hidden>
    <div class="drop-overlay-content">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        <p>拖入文件即可上传</p>
    </div>
</div>
```

- [ ] **Step 3: Append the overlay CSS rules**

In `file-view/src/main/resources/META-INF/resources/static/list.css`, find the last `}` in the file (end of the responsive `@media` block) and append the following rules **after** it:

```css
/* Drag-and-drop overlay */
.drop-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(59, 130, 246, 0.08);
    border: 3px dashed var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

.drop-overlay[hidden] {
    display: none;
}

.drop-overlay-content {
    background: var(--card);
    padding: 32px 48px;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    text-align: center;
    color: var(--primary);
}

.drop-overlay-content svg {
    width: 56px;
    height: 56px;
    margin-bottom: 12px;
}

.drop-overlay-content p {
    font-size: 18px;
    font-weight: 600;
}
```

- [ ] **Step 4: Verify file syntax**

Run: `cd C:\developer\IdeaProjects\file-view && node -c file-view/src/main/resources/list.js 2>/dev/null; echo "list.js syntax: $?"`
Expected: prints `list.js syntax: 0`. (We are syntax-checking `list.js` only as a sanity check that the working tree is still parseable; we did not modify `list.js` in this task.)

For `list.html` and `list.css`, no automated syntax check is available — instead, run a quick visual check by serving the file and opening it in a browser. Skip this if you cannot run a dev server: the change is purely additive HTML + CSS and will not break the existing page.

- [ ] **Step 5: Run the smoke checklist (overlay element exists, hidden by default)**

Manual: open `http://localhost:8080/file/view` in a browser. Verify:
- The page renders exactly as before (no layout shift, no visible overlay).
- In DevTools, the element `<div id="drop-overlay" class="drop-overlay" hidden>...</div>` exists in the DOM.
- The overlay is NOT visible on screen (the `hidden` attribute applies `display: none`).

Expected: page looks identical to before; overlay element is present in DOM but invisible.

- [ ] **Step 6: Commit**

```bash
cd C:\developer\IdeaProjects\file-view
git add file-view/src/main/resources/list.html file-view/src/main/resources/META-INF/resources/static/list.css
git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -m "feat(web): add hidden drop-overlay element and CSS for drag-and-drop upload"
```

---

## Task 2: Wire the drag-and-drop listeners and extract `uploadFiles`

**Files:**
- Modify: `file-view/src/main/resources/META-INF/resources/static/list.js`

This task adds the behavior. After this task, dragging files onto the page shows the overlay and triggers the upload via the existing path.

- [ ] **Step 1: Walk through the smoke checklist in your report (do not modify the file yet)**

Read the spec's §7 smoke checklist at `docs/superpowers/specs/2026-06-23-drag-drop-upload-design.md` (section 7) — it has 8 manual checks. You will report the pass/fail of each check in the task report (Step 6 below). This is the "test" for this task — a manual checklist because the project has no frontend test framework. Do NOT create a separate checklist file (the project's `.gitignore` does not exclude `.superpowers/`, so a new file there would be tracked and committed accidentally).

- [ ] **Step 2: Refactor the fileInput change handler to call `uploadFiles`**

In `file-view/src/main/resources/META-INF/resources/static/list.js`, find the existing handler:

```js
    document.getElementById('fileInput').addEventListener('change', function() {
        const files = this.files;
        if (files.length === 0) return;

        const totalFiles = files.length;
        var names = [];
        for (var i = 0; i < totalFiles; i++) {
            names.push(files[i].name);
        }
        showToast('正在上传 ' + totalFiles + ' 个文件: ' + names.join(', '));

        const formData = new FormData();
        for (var i = 0; i < totalFiles; i++) {
            formData.append('file', files[i]);
        }

        fetch('/file/view/upload', { method: 'POST', body: formData })
            .then(function(response) {
                if (response.ok) return response.json();
                throw new Error('上传失败');
            })
            .then(function(data) {
                var count = Array.isArray(data) ? data.length : 1;
                showToast('上传成功 ' + count + '/' + totalFiles + ' 个文件');
                document.getElementById('fileInput').value = '';
                loadData();
            })
            .catch(function(error) {
                showToast('文件上传失败: ' + error.message);
                console.error('上传错误:', error);
            });
    });
```

Replace it with a 3-line handler that delegates to a new `uploadFiles` function (defined below):

```js
    document.getElementById('fileInput').addEventListener('change', function() {
        uploadFiles(this.files);
    });
```

- [ ] **Step 3: Add the `uploadFiles` function above the existing `loadData` function**

In `file-view/src/main/resources/META-INF/resources/static/list.js`, find the line `function loadData() {` and insert the following block **immediately before it**:

```js
function uploadFiles(files) {
    if (!files || files.length === 0) return;

    const totalFiles = files.length;
    var names = [];
    for (var i = 0; i < totalFiles; i++) {
        names.push(files[i].name);
    }
    showToast('正在上传 ' + totalFiles + ' 个文件: ' + names.join(', '));

    const formData = new FormData();
    for (var i = 0; i < totalFiles; i++) {
        formData.append('file', files[i]);
    }

    fetch('/file/view/upload', { method: 'POST', body: formData })
        .then(function(response) {
            if (response.ok) return response.json();
            throw new Error('上传失败');
        })
        .then(function(data) {
            var count = Array.isArray(data) ? data.length : 1;
            showToast('上传成功 ' + count + '/' + totalFiles + ' 个文件');
            document.getElementById('fileInput').value = '';
            loadData();
        })
        .catch(function(error) {
            showToast('文件上传失败: ' + error.message);
            console.error('上传错误:', error);
        });
}
```

- [ ] **Step 4: Append the drag-and-drop IIFE at the end of the file**

In `file-view/src/main/resources/META-INF/resources/static/list.js`, find the **last** `}` in the file (the closing brace of the existing `showToast` function) and append the following block **after** it (at the top level of the file; the wrapping IIFE is part of the block):

```js
(function setupDragDrop() {
    var dragCounter = 0;
    var overlay = document.getElementById('drop-overlay');

    function isFileDrag(e) {
        return e.dataTransfer
            && Array.from(e.dataTransfer.types || []).indexOf('Files') !== -1;
    }

    window.addEventListener('dragenter', function(e) {
        if (!isFileDrag(e)) return;
        e.preventDefault();
        dragCounter++;
        overlay.hidden = false;
    });

    window.addEventListener('dragover', function(e) {
        if (!isFileDrag(e)) return;
        e.preventDefault();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
    });

    window.addEventListener('dragleave', function(e) {
        if (!isFileDrag(e)) return;
        dragCounter--;
        if (dragCounter <= 0) {
            dragCounter = 0;
            overlay.hidden = true;
        }
    });

    window.addEventListener('drop', function(e) {
        e.preventDefault();
        dragCounter = 0;
        overlay.hidden = true;
        var files = e.dataTransfer && e.dataTransfer.files;
        if (!files || files.length === 0) {
            showToast('没有可上传的文件');
            return;
        }
        uploadFiles(files);
    });
})();
```

- [ ] **Step 5: Syntax-check the modified list.js**

Run: `cd C:\developer\IdeaProjects\file-view && node -c file-view/src/main/resources/META-INF/resources/static/list.js`
Expected: prints nothing, exits 0. (Note: `node -c` only checks parse syntax, not runtime semantics — `document` and `window` references will still throw at runtime if executed outside a browser, but the parse must succeed.)

- [ ] **Step 6: Run the smoke checklist**

Manual: start the dev server if not already running (`cd file-view-test && mvn spring-boot:run`), then open `http://localhost:8080/file/view` and walk through the 8 checks in the spec's §7 step by step. Record the result of each check in your report (Step 7).

Expected: all 8 checks pass. The key regression check is the 7th item — clicking the existing "上传文件" button must still trigger a normal file-picker upload. If you cannot run a dev server (e.g., sandboxed environment), report the 8 checks as "not run due to environment" and explicitly call that out in the report's concerns section.

- [ ] **Step 7: Commit**

```bash
cd C:\developer\IdeaProjects\file-view
git add file-view/src/main/resources/META-INF/resources/static/list.js
git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -m "feat(web): wire drag-and-drop listeners and extract shared uploadFiles"
```

---

## Task 3: README updates

**Files:**
- Modify: `README.md`
- Modify: `README.zh-CN.md`

- [ ] **Step 1: Find the target section in README.md**

Run: `cd C:\developer\IdeaProjects\file-view && grep -n "Access Built-in Interface" README.md`
Expected: prints a line number pointing to the section header (search the English README for the section that introduces the upload UI).

If the section title is worded differently (e.g., "Built-in Upload and Preview Interface"), use that exact heading. If no such section exists, place the new sentence at the end of the "REST API" section, immediately before the "Preview Extension" section.

- [ ] **Step 2: Add the drag-drop note to README.md**

In `README.md`, immediately after the paragraph that begins with "Visit `http://localhost:8080/file/view`" (or the equivalent introduction of the upload page), insert this sentence on its own line:

```markdown
You can also drag files from your file manager and drop them anywhere on the page to upload them.
```

- [ ] **Step 3: Add the Chinese version to README.zh-CN.md**

In `README.zh-CN.md`, in the equivalent section, insert this sentence on its own line:

```markdown
你也可以直接从文件管理器拖动文件到页面任意位置完成上传。
```

- [ ] **Step 4: Verify the diffs are minimal**

Run: `cd C:\developer\IdeaProjects\file-view && git diff --stat README.md README.zh-CN.md`
Expected: shows 2 files changed, 2 lines added (1 per file), 0 lines deleted.

- [ ] **Step 5: Commit**

```bash
cd C:\developer\IdeaProjects\file-view
git add README.md README.zh-CN.md
git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -m "docs(readme): note drag-and-drop upload support (EN + ZH)"
```

---

## Spec Coverage

| Spec section | Covered by task |
|---|---|
| §1 Background, §2 Architecture | Header + File Structure |
| §3 HTML — `#drop-overlay` element | Task 1 (Step 2) |
| §4 CSS — overlay rules | Task 1 (Step 3) |
| §5.1 Refactor: extract `uploadFiles` | Task 2 (Steps 2-3) |
| §5.2 New drag-and-drop listeners | Task 2 (Step 4) |
| §5.3 Key decisions (counter, window-level, preventDefault) | Task 2 (Step 4) |
| §6 Error handling & edge cases | Task 2 (Step 4) + smoke checklist |
| §7 Manual smoke checklist | Task 2 (Step 1) + Task 2 (Step 6) |
| §8 Migration & compatibility | Task 2 (Step 2 — backward compat via refactor) + smoke item 7 (regression check) |
| §9 Documentation deliverables | Task 3 |
| §10 Open Questions | N/A — none at design time |
