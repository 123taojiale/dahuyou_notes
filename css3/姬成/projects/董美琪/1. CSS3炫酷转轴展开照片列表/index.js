var wrapper = document.querySelector('.wrapper');

wrapper.onclick = function (e) {
    console.log(e);
    if (e.target.tagName === 'LI') {
        e.target.classList.add('active');
        wrapper.classList.add('activeWrapper');
    } else if (e.target.classList.contains('close')) {
       
        var parentLi = getLiParent(e.target);
        parentLi.classList.remove('active');
        wrapper.classList.remove('activeWrapper');
    }
}


function getLiParent(node) {
    var parent = node.parentNode;
    // 如果当前不是li标签  并且当前节点不是body 那么进行向上查找
    while(!parent.classList.contains('item') && parent !== document.body) {
        parent = parent.parentNode;
    }
    return parent;
    // node.path.forEach(function(item) {
    //     if (item.classList.contains('item')) {
    //         return item;
    //     }
    // })
}