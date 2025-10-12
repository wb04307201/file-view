document.addEventListener('DOMContentLoaded', function () {
    // 首次加载数据
    loadData();

    // 刷新按钮事件
    document.getElementById('refreshBtn').addEventListener('click', loadData);

    // 文件选择事件处理
    document.getElementById('uploadBtn').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });

// 文件选择后显示上传按钮
    document.getElementById('fileInput').addEventListener('change', function() {
        const files = this.files;
        if (files.length > 0) {
            document.getElementById('submitUploadBtn').style.display = 'inline-block';
            // 可以在这里显示选中的文件名
            console.log('选中文件数量:', files.length);
        } else {
            document.getElementById('submitUploadBtn').style.display = 'none';
        }
    });

// 上传文件事件处理
    document.getElementById('submitUploadBtn').addEventListener('click', function() {
        const fileInput = document.getElementById('fileInput');
        const files = fileInput.files;

        if (files.length === 0) {
            showToast('请先选择文件');
            return;
        }

        // 创建FormData对象
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
        }

        // 调用上传接口
        fetch('/file/view/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('上传失败');
            })
            .then(data => {
                showToast('文件上传成功');
                // 清空文件选择器
                fileInput.value = '';
                document.getElementById('submitUploadBtn').style.display = 'none';
                // 刷新文件列表
                loadData();
            })
            .catch(error => {
                showToast('文件上传失败: ' + error.message);
                console.error('上传错误:', error);
            });
    });

});

function loadData() {
    fetch('/file/view/list')
        .then(response => response.json())
        .then(data => {
            updateTable(data);
        })
        .catch(error => {
            showToast('❌ 发生异常: ' + error.message);
        })
}

function updateTable(data) {
    const method = document.getElementById('file-table');

    if (data.length === 0) {
        method.innerHTML = `
                    <div class="empty-state">
                        <p>暂无数据</p>
                    </div>
                `;
        return;
    }

    let tableHTML = `
            <div class="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>文件名</th>
                        <th>文件大小</th>
                        <th>MIME</th>
                        <th>位置</th>
                        <th>版本</th>
                        <th>操作</th>
                    </tr>
                </thead>
            <tbody>
            `;

    data.forEach(item => {
        tableHTML += `
                 <tr>
                    <td>${item.BaseFileName}</td>
                    <td>${item.Size}</td>
                    <td>${item.mimeType}</td>
                    <td>${item.location}</td>
                    <td>${item.Version}</td>
                    <td>
                    <a href="javascript:void(0);" onclick="openView('${item.id}')" >查看</a>
                    <span>   </span>
                    <a href="javascript:void(0);" onclick="downloadFile('${item.id}')">下载</a>
                    <span>   </span>
                    <a href="javascript:void(0);" onclick="deleteFile('${item.id}')">删除</a>
                    </td>
                </tr>
                `;
    });

    tableHTML += `
            </tbody>
        </table>
    </div>
            `;

    method.innerHTML = tableHTML;
}

function openView(id) {
    window.open(`/file/view/${id}`, '_blank');
}

function downloadFile(id) {
    fetch(`/wopi/files/${ id }`)
        .then(res => res.json())
        .then(data => {
            fetch(`/wopi/files/${ id }/contents`)
                .then(res => res.blob())
                .then(blob => {
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = data.BaseFileName || '下载文件';
                    link.style.display = 'none';

                    document.body.appendChild(link);
                    link.click();
                })
        })
        .catch(error => {
            showToast('❌ 发生异常: ' + error.message);
        });
}

function deleteFile(id) {
    fetch('/file/view/deleteById',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "id": id
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data){
                showToast('✅ 删除成功');
                loadData();
            }
        })
        .catch(error => {
            showToast('❌ 发生异常: ' + error.message);
        })
}

/**
 * 显示Toast提示消息
 * @param {string} message - 要显示的提示消息内容
 * @returns {void}
 */
function showToast(message) {
    var toast = document.getElementById("toast");
    toast.innerHTML = message;
    toast.className = "show";

    // 3秒后自动关闭
    setTimeout(function(){
        toast.className = toast.className.replace("show", "");
    }, 3000);
}
