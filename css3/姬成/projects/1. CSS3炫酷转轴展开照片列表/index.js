const wrapper = document.querySelector('.wrapper');

wrapper.onclick = function (e) {
    let node = e.target;
    // console.log(node);
    if (node.classList.contains('item') && node.tagName === 'LI') {
        node.classList.add('active');
        node.parentElement.classList.add('activeWrapper');
    } else if (node.classList.contains('close') && node.tagName === 'DIV') {
        // console.log('close');
        // console.log(getLiParent(node));
        node = getLiParent(node);
        node.classList.remove('active');
        node.parentElement.classList.remove('activeWrapper');
    }
}

/**
 * 查找指定 HTML 元素的 父级元素 LI
 * @param {HTMLElement} node HTML 元素
 */
function getLiParent(node) {
    node = node.parentElement;
    while (node.tagName !== 'LI' && !node.classList.contains('item')) {
        node = node.parentElement;
    }
    return node;
}