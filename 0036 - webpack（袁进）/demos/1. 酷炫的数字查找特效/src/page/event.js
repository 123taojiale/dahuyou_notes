import NumberTimer from "../util/NumberTimer";
import appendNumber from "./appendNumber";

const n = new NumberTimer(100);

n.onNumberCreated = function (n, isPrime) {
    appendNumber(n, isPrime);
}

let isStart = false; // 记录当前的游戏状态

window.onclick = function () {
    if (isStart) { // 游戏已开始
        n.stop(); // 停止游戏
        isStart = false;
    } else { // 游戏已停止
        n.start(); // 开始游戏
        isStart = true;
    }
}