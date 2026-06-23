# Drag-and-Drop File Upload — Design

**Date:** 2026-06-23
**Status:** Approved — awaiting implementation
**Scope:** Frontend-only (3 files, 0 backend changes)

---

## 1. Background & Motivation

The current upload flow in `list.html` / `list.js` only works via the click-to-upload button, which programmatically opens a native file picker. Users who drag files from their file manager onto the page get no upload — the browser opens the file by default. This design adds a drag-and-drop upload path that:

- Activates anywhere on the page (window-level listeners)
- Visually confirms the drop target with a highlight overlay
- Reuses the existing multipart upload code path
- Rejects non-file drags (text, URLs, in-page selections) silently

### Scope (in)
- New `#drop-overlay` element in `list.html` shown only during a file drag
- 4 new window-level event listeners in `list.js` (`dragenter`, `dragover`, `dragleave`, `drop`)
- New CSS for the overlay
- Refactor the existing `fileInput` change handler to call a shared `uploadFiles(files)` function

### Scope (out, deferred)
- Folder recursion (dropping a folder currently uploads 0 files)
- Paste-to-upload (rejected by user)
- Drag-drop into a specific zone (we use window-level)
- Touch device support (HTML5 drag-drop is desktop-only)
- Per-file progress bar (the existing single-FetchData upload doesn't expose progress)
- Cancel mid-upload
- Reordering / removing files from a pre-upload queue

---

## 2. Architecture

### 2.1 Component map

```
list.html
  ├── <div id="drop-zone">  (existing — hosts the file table)
  └── <div id="drop-overlay" hidden>  (new — full-screen overlay shown during drag)

list.css
  └── .drop-overlay, .drop-overlay-content  (new styles)

list.js
  ├── uploadFiles(files)  (new — extracted from existing handler, shared by click + drop)
  ├── window.addEventListener('dragenter', ...)   (new)
  ├── window.addEventListener('dragover', ...)    (new)
  ├── window.addEventListener('dragleave', ...)   (new)
  └── window.addEventListener('drop', ...)        (new)
```

### 2.2 Why window-level listeners

A drop target div has two problems:
1. The user has to aim at it precisely
2. The `#drop-zone` div's contents change as the file table updates, making the drop target geometry shift

Window-level listeners with `preventDefault()` on `dragover` solve both: the whole page accepts the drop, the overlay is a visual indicator only.

### 2.3 Why a dragCounter

`dragenter` and `dragleave` fire on **every** child element the cursor crosses during a single drag. A naive show/hide on these events causes the overlay to flicker. The classic fix is a counter: increment on `dragenter`, decrement on `dragleave`, hide the overlay only when the counter reaches 0. This pattern is well-established and not over-engineering for a feature that demonstrably needs it.

---

## 3. HTML — `list.html`

The existing `<div id="drop-zone" class="drop-zone">` stays untouched. A new full-screen overlay is added after the closing `</main>`:

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

The `hidden` attribute provides default `display: none` without needing the CSS rule to be loaded first.

---

## 4. CSS — `list.css`

Append to the end of `list.css` (before the `@media` block, or grouped with other layout):

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
    pointer-events: none;       /* let drop events fall through to window */
}

.drop-overlay[hidden] { display: none; }

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

`pointer-events: none` is the key — it lets the user "see" the overlay but routes the actual `drop` event to the `window` listener, avoiding any z-index event-routing complexity.

---

## 5. JavaScript — `list.js`

### 5.1 Refactor: extract `uploadFiles(files)`

The existing `fileInput` change handler builds a `FormData` and POSTs to `/file/view/upload`. Extract that into a function so both the click button and the drop handler can call it:

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

The existing `fileInput` change handler becomes:

```js
document.getElementById('fileInput').addEventListener('change', function() {
    uploadFiles(this.files);
});
```

### 5.2 New: drag-and-drop listeners

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
        e.preventDefault();   // without this the browser opens the file
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

### 5.3 Key decisions

| Item | Choice | Why |
|---|---|---|
| Listener mount | `window` | Accept drops from anywhere on the page |
| Non-file filter | `dataTransfer.types.includes('Files')` | Dragging text/URL/in-page selection is silently ignored |
| `dragleave` flicker fix | `dragCounter` increment/decrement | Sub-element bubbling causes repeated enter/leave; counter makes the show/hide state monotonic |
| Drop → upload | Reuse `uploadFiles(files)` | One code path, one set of toasts, one set of error messages |
| `preventDefault` sites | `dragover` AND `drop` | `dragover` is required to make the element a valid drop target; `drop` is required to stop the browser from opening the file |
| IIFE wrapper | `setupDragDrop` | Localizes `dragCounter` and the `isFileDrag` helper; no global pollution |

---

## 6. Error Handling & Edge Cases

| Scenario | Behavior |
|---|---|
| Drop a folder | `dataTransfer.files` is empty; toast "没有可上传的文件". Folder recursion is out of scope. |
| Drop text / URL / in-page selection | `types` does not include `Files`; listeners return early, overlay never appears |
| Drag out of the window | `dragleave` counter reaches 0; overlay hides |
| Drag then press Esc | Some browsers do not fire `dragleave`; the `drop` handler always resets `dragCounter = 0` and hides the overlay, providing a guaranteed cleanup path |
| Server returns error | Inherits existing `uploadFiles` toast: "文件上传失败: ..." |
| Rapid repeated drops | `dragCounter` is reset in `drop` before incrementing in the next `dragenter`; no leak |

---

## 7. Testing

The project has no frontend test framework. Per the existing precedent, this change ships with **manual smoke tests** in the README and is verified by hand before commit.

### Smoke checklist

- [ ] Drop 1 PDF on the page → success toast + list grows by 1
- [ ] Drop 5 mixed-type files on the page → all 5 succeed
- [ ] Drag text from outside the page into the page → overlay does NOT appear
- [ ] Drag a text selection within the page → overlay does NOT appear
- [ ] Drag files in, then press Esc → overlay disappears
- [ ] Drag files over a child of the drop overlay → overlay does not flicker
- [ ] Click the existing "上传文件" button → still works (regression check)
- [ ] Drop a folder → toast "没有可上传的文件"

---

## 8. Migration & Compatibility

- **No backend changes.** The existing `POST /file/view/upload` endpoint handles the multipart upload exactly as it does today.
- **No new dependencies.**
- **No new public routes.**
- **HTML change is additive** — the existing `#drop-zone` is untouched; the overlay is a new sibling.
- **JS change is refactor + addition** — the `fileInput` change handler still works (now via `uploadFiles`); new listeners do not interfere.
- **CSS change is additive** — new selectors, no overrides of existing rules.

---

## 9. Documentation Deliverables

- `README.md` and `README.zh-CN.md`: under the existing "Access Built-in Interface for File Upload and Preview" section, append one sentence: "也支持将文件拖入页面任意位置上传。"

---

## 10. Open Questions

None at design time. Implementation-phase decisions (e.g., exact toast wording for folder drops) are within the plan's defined scope.
