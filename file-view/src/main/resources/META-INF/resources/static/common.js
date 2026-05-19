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

/**
 * 在页面右上角注入一个悬浮下载按钮。
 * 默认极低透明度，hover 时完全显示，点击后获取原始文件名并触发下载。
 * @param {string} id - 文件 ID
 */
function injectDownloadButton(id) {
    if (!id) return;

    // 防止重复注入
    if (document.getElementById('__download-btn__')) return;

    // 创建按钮元素
    const btn = document.createElement('button');
    btn.id = '__download-btn__';
    btn.type = 'button';
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';
    btn.title = '下载文件';

    // 插入样式（全局仅一次）
    if (!document.getElementById('__download-btn-style__')) {
        const style = document.createElement('style');
        style.id = '__download-btn-style__';
        style.textContent = `
            #__download-btn__ {
                position: fixed;
                top: 16px;
                right: 16px;
                z-index: 99999;
                width: 44px;
                height: 44px;
                border: none;
                border-radius: 8px;
                background: rgba(0, 0, 0, 0.35);
                color: #fff;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease, background 0.2s ease, transform 0.2s ease;
                backdrop-filter: blur(4px);
                -webkit-backdrop-filter: blur(4px);
            }
            #__download-btn__:hover {
                background: rgba(0, 0, 0, 0.7);
                transform: scale(1.05);
            }
            /* 鼠标靠近右上角时淡入 */
            #__download-btn__.show {
                opacity: 0.6;
            }
            #__download-btn__:hover,
            #__download-btn__.active {
                opacity: 1 !important;
            }
            #__download-btn__ svg {
                pointer-events: none;
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(btn);

    // 鼠标靠近右上角时显示按钮
    const showZone = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        document.addEventListener('mousemove', (e) => {
            if (e.clientX > w - 120 && e.clientY < 120) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        });
    };
    showZone();

    // 点击触发下载
    btn.addEventListener('click', () => {
        btn.classList.add('active');
        btn.title = '正在获取...';
        btn.style.pointerEvents = 'none';

        // 先获取文件元信息拿到原始文件名
        fetch(`/wopi/files/${id}`)
            .then(res => {
                if (!res.ok) throw new Error('获取文件信息失败');
                return res.json();
            })
            .then(info => {
                const filename = info.BaseFileName || info.filename || `file-${id}`;
                btn.title = `正在下载: ${filename}`;

                return fetch(`/wopi/files/${id}/contents`)
                    .then(res => {
                        if (!res.ok) throw new Error('获取文件内容失败');
                        return res.blob();
                    })
                    .then(blob => {
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = filename;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                    });
            })
            .catch(err => {
                console.error('下载失败:', err);
                btn.title = '下载失败';
            })
            .finally(() => {
                btn.classList.remove('active');
                btn.title = '下载文件';
                btn.style.pointerEvents = '';
            });
    });
}