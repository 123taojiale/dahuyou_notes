const addBtn = document.querySelector('.addBtn'),
    addArea = document.querySelector('.addArea'),
    container = document.querySelector('.container');

addBtn.onclick = function () {
    const value = addArea.value;
    container.innerHTML += safe `<pre>${value}</pre>`;
    addArea.value = '';
}

/**
 * 防止用户恶意输入 eg: <h1>哈哈哈</h1>
 * 输入标签的话 会被浏览器识别为 HTML 标签
 * 我们想实现的效果是 用户输入啥 就添加啥
 */
function safe(parts, ...args) {
    let str = '';
    for (let i = 0; i < args.length; i++) { // 就一个插值 不用循环其实也可以
        const arg = args[i];
        const value = arg.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        str += parts[i] + value;
        if (i === args.length - 1) {
            str += parts[i + 1];
        }
    }
    return str;
}