import render from './ui.js';
import {
    playerMove,
    isWin
} from './play.js';

render();
let isOver = false; // 记录游戏是否结束

export default window.onkeydown = (e) => {
    if (isOver) {
        return;
    }

    const key = e.key;
    let result = false; // 记录移动是否成功

    if (key === 'ArrowUp') {
        result = playerMove('up');
    } else if (key === 'ArrowDown') {
        result = playerMove('down');
    } else if (key === 'ArrowRight') {
        result = playerMove('right');
    } else if (key === 'ArrowLeft') {
        result = playerMove('left');
    }

    if (result) { // 移动成功
        render(); // 重新渲染页面
        isOver = isWin();
        if(isOver){
            alert('游戏已通过！！！');
        }
    }
}