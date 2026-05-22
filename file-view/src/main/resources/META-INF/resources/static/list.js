document.addEventListener('DOMContentLoaded', function () {
    loadData();

    document.getElementById('refreshBtn').addEventListener('click', loadData);

    document.getElementById('uploadBtn').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });

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
});

function loadData() {
    fetch('/file/view/list')
        .then(function(response) { return response.json(); })
        .then(function(data) { updateTable(data); })
        .catch(function(error) {
            showToast('发生异常: ' + error.message);
        });
}

function getFileType(filename) {
    if (!filename) return 'default';
    var ext = filename.split('.').pop().toLowerCase();
    var map = {
        docx: 'docx', doc: 'docx',
        xlsx: 'excel', xls: 'excel',
        pptx: 'pptx', ppt: 'pptx',
        csv: 'csv',
        pdf: 'pdf',
        jpg: 'image', jpeg: 'image', png: 'image', gif: 'image', bmp: 'image', svg: 'image', webp: 'image',
        raw: 'image', heic: 'image', cr2: 'image', nef: 'image', orf: 'image', sr2: 'image',
        tif: 'image', tiff: 'image',
        ofd: 'ofd',
        md: 'markdown',
        bpmn: 'bpmn',
        dmn: 'dmn',
        cmmn: 'cmmn',
        epub: 'epub',
        xmind: 'xmind',
        zip: 'zip',
        dwg: 'cad', dxf: 'cad',
        '3dm': 'o3d', '3ds': 'o3d', '3mf': 'o3d', amf: 'o3d', bim: 'o3d', brep: 'o3d',
        dae: 'o3d', fbx: 'o3d', fcstd: 'o3d', gltf: 'o3d', ifc: 'o3d', iges: 'o3d',
        step: 'o3d', stl: 'o3d', obj: 'o3d', off: 'o3d', ply: 'o3d', wrl: 'o3d'
    };
    // code extensions
    var codeExts = ['sh','c','cpp','cs','css','diff','go','graphql','ini','java','js',
        'json','kt','less','lua','mk','m','pl','php','phtml','html','txt','py','pyrepl',
        'r','rb','rs','scss','sql','swift','ts','vb','wasm','xml','yaml','yml'];
    if (codeExts.indexOf(ext) !== -1) return 'code';
    return map[ext] || 'default';
}

function getFileLabel(filename) {
    if (!filename) return '?';
    var ext = filename.split('.').pop().toLowerCase();
    if (ext.length <= 4) return ext.toUpperCase();
    return '文件';
}

function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function updateTable(data) {
    var container = document.getElementById('file-table');

    if (data.length === 0) {
        container.innerHTML = '<div class="empty-state">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
            '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
            '<polyline points="14 2 14 8 20 8"/></svg>' +
            '<p>暂无文件，点击上传添加文件</p></div>';
        return;
    }

    var html = '<div class="file-table"><table>' +
        '<thead><tr>' +
        '<th>文件名</th><th>大小</th><th>MIME</th><th>位置</th><th>版本</th><th>操作</th>' +
        '</tr></thead><tbody>';

    data.forEach(function(item) {
        var type = getFileType(item.BaseFileName);
        var label = getFileLabel(item.BaseFileName);
        html += '<tr>' +
            '<td class="file-name-cell"><div class="file-icon ' + type + '">' + label + '</div>' +
            '<span class="file-name" title="' + item.BaseFileName + '">' + item.BaseFileName + '</span></td>' +
            '<td class="size-cell">' + formatSize(item.Size) + '</td>' +
            '<td>' + (item.mimeType || '-') + '</td>' +
            '<td class="location-cell" title="' + item.location + '">' + item.location + '</td>' +
            '<td class="version-cell">' + item.Version + '</td>' +
            '<td><div class="actions">' +
            '<a class="action-btn view" href="javascript:void(0);" onclick="openView(\'' + item.id + '\')">查看</a>' +
            '<a class="action-btn download" href="javascript:void(0);" onclick="downloadFile(\'' + item.id + '\')">下载</a>' +
            '<a class="action-btn delete" href="javascript:void(0);" onclick="deleteFile(\'' + item.id + '\')">删除</a>' +
            '</div></td></tr>';
    });

    html += '</tbody></table></div>';
    container.innerHTML = html;
}

function openView(id) {
    window.open('/file/view/' + id, '_blank');
}

function downloadFile(id) {
    fetch('/wopi/files/' + id)
        .then(function(res) { return res.json(); })
        .then(function(data) {
            fetch('/wopi/files/' + id + '/contents')
                .then(function(res) { return res.blob(); })
                .then(function(blob) {
                    var link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = data.BaseFileName || '下载文件';
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                });
        })
        .catch(function(error) {
            showToast('发生异常: ' + error.message);
        });
}

function deleteFile(id) {
    fetch('/file/view/deleteById', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'id': id })
    })
        .then(function(response) { return response.json(); })
        .then(function(data) {
            if (data) {
                showToast('删除成功');
                loadData();
            }
        })
        .catch(function(error) {
            showToast('发生异常: ' + error.message);
        });
}

function showToast(message) {
    var toast = document.getElementById('toast');
    toast.innerHTML = message;
    toast.className = 'toast show';
    setTimeout(function() {
        toast.className = 'toast';
    }, 3000);
}
