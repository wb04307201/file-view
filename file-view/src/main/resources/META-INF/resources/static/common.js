/**
 * 资源加载管理器
 *
 * === 加载策略说明 ===
 *
 * 1. ResourceLoader.load(resources) — 并行加载，带 CDN 回退
 *    适用于资源之间无依赖关系的场景。
 *    使用页面: bpmn, cmmn, dmn, code, csv, docx, excel, image, markdown,
 *              o3d, pdf, xmind, zip
 *
 * 2. loadSequential(resources) — 顺序加载（在各页面内联定义）
 *    适用于资源之间有严格依赖顺序的场景（如库 A 依赖库 B）。
 *    使用页面: pptx (jszip → chart.js → pptxviewjs),
 *             tiff (pako → utif), epub (jszip → epubjs)
 *
 * 3. ES Module importmap — 适用于 ES Module 库
 *    使用 <script type="importmap"> + <script type="module"> 加载。
 *    使用页面: ofd (xq-doc-viewer), cad (@mlightcad/cad-simple-viewer)
 */
class ResourceLoader {
    static load(resources) {
        const promises = resources.map(res => this.loadResource(res));
        return Promise.all(promises);
    }

    static loadResource({url, cdn, type}) {
        return new Promise((resolve, reject) => {
            const isCss = type === 'css';
            const element = document.createElement(isCss ? 'link' : 'script');

            // 配置元素属性
            if (isCss) {
                element.rel = 'stylesheet';
                element.href = url;
            } else {
                element.src = url;
                element.async = true;
            }

            // 成功加载处理
            element.onload = () => resolve({url, type, status: 'local'});

            // 失败处理（回退到CDN）
            element.onerror = () => {
                console.warn(`本地资源加载失败，切换CDN: ${cdn}`);
                element.remove();
                const cdnElement = document.createElement(isCss ? 'link' : 'script');

                if (isCss) {
                    cdnElement.rel = 'stylesheet';
                    cdnElement.href = cdn;
                } else {
                    cdnElement.src = cdn;
                    cdnElement.async = true;
                }

                cdnElement.onload = () => resolve({cdn, type, status: 'cdn'});
                cdnElement.onerror = () => reject(`Failed to load ${{url, cdn, type}}`);

                document.head.appendChild(cdnElement);
            };

            // 尝试加载原始资源
            document.head.appendChild(element);
        });
    }
}

function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function showError(containerId, message) {
    const el = typeof containerId === 'string'
        ? document.getElementById(containerId)
        : containerId;
    if (!el) return;
    el.innerHTML = '<div class="empty">加载失败: ' + escapeHtml(message) + '</div>';
}