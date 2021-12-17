const maxNumContainer = document.querySelector('.maxNum');
const minNumContainer = document.querySelector('.minNum');
const inps = document.querySelectorAll('input[type="number"]');
const btn = document.querySelector('.btn');

/**
 * 获取一个介于最小值与最大值之间的随机整数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function setValues() {
    inps.forEach(inp => {
        inp.value = getRandom(1, 100);
    });
}

setValues();

/**
 * 获取页面中所有数字文本框中的数值组成的数组
 */
function getValues() {
    const arr = [];
    inps.forEach(inp => {
        arr.push(inp.value);
    });
    return arr;
}


btn.onclick = function () {
    const values = getValues();

    maxNumContainer.innerHTML = Math.max(...values);
    minNumContainer.innerHTML = Math.min(...values);
}