import * as map from './map.js';

const gameContainer = document.querySelector('#game'); // 游戏容器
const pieceHeight = 45; // 小块的高度
const pieceWidth = 45; // 小块的宽度

export default function render() {
    // 1. 设置游戏容器的尺寸
    setGameContainerSize(gameContainer);
    // 2. 设置游戏容器的内容
    gameContainer.innerHTML = ''; // 清空上一次的内容
    setGameContainerContent();
}

/**
 * 初始化游戏容器的尺寸
 * @param {HTMLElement} node 游戏容器
 */
function setGameContainerSize(node) {
    node.style.height = map.row_num * pieceHeight + 'px';
    node.style.width = map.col_num * pieceWidth + 'px';
    node.style.border = '1px solid #ddd';
}

/**
 * 设置游戏容器的内容
 */
function setGameContainerContent() {
    for (let row = 0; row < map.row_num; row++) {
        for (let col = 0; col < map.col_num; col++) {
            // 根据 map.content 中的内容设置每一个小块的内容
            const is_correct_pos = map.correct.find(point => point.row === row && point.col === col) !== undefined; // 判断当前遍历到的点是否是正确的点
            const left = col * pieceWidth + 'px';
            const top = row * pieceHeight + 'px';
            setPiece(map.content[row][col], is_correct_pos, left, top);
        }
    }
}

/**
 * 设置每一个小块的内容和位置
 * @param {Number} value map.content 中的内容
 */
function setPiece(value, is_correct_pos, left, top) {
    const rect = document.createElement('div');
    rect.style.left = left;
    rect.style.top = top;
    rect.classList.add('rect');

    if (value === map.PLAYER) {
        rect.classList.add('player');
    } else if (value === map.WALL) {
        rect.classList.add('wall');
    }

    if (value === map.BOX) {
        if (is_correct_pos) {
            rect.classList.add('correct_box'); // 正确位置的箱子
        } else {
            rect.classList.add('box'); // 错误位置的箱子
        }
    }

    if (value === map.SPACE) {
        if (is_correct_pos) {
            rect.classList.add('correct_space'); // 正确位置的空格
        } else {
            return;
        }
    }

    gameContainer.appendChild(rect);
}