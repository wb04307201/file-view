// 资源加载管理器
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