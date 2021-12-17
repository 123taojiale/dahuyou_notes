import * as map from './map.js';

/**
 * 玩家移动一个单位
 * @param {String} direction 移动的方向
 * @returns 移动成功返回 true 移动失败返回 false
 */
export function playerMove(direction) {
    const playerPos = getPlayerPos(); // 玩家当前的位置
    const playerNextPosInfo = getNextPosInfo(playerPos.row, playerPos.col, direction); // 获取下一个位置的相关信息
    const content_value = playerNextPosInfo.content_value; // 获取值的类型
    // 下一个位置是墙壁
    if (content_value === map.WALL) {
        return false; // 移动失败
    }
    // 下一个位置是空白
    if (content_value === map.SPACE) {
        exchance(playerPos, playerNextPosInfo); // 交换两个点的内容值
        return true;
    }
    // 下一个位置是箱子
    if (content_value === map.BOX) {
        const boxNextPosInfo = getNextPosInfo(playerNextPosInfo.row, playerNextPosInfo.col, direction); // 获取箱子的下一个位置的相关信息
        if(boxNextPosInfo.content_value === map.SPACE){ // 当且仅当下一个位置是空格时，才能移动，否则都无法移动
            exchance(playerNextPosInfo, boxNextPosInfo); // 交换箱子和箱子的下一个位置
            exchance(playerPos, playerNextPosInfo); // 交换玩家和玩家的下一个位置
            return true;
        }else{
            return false;
        }
    }

}

/**
 * 判断游戏是否结束。
 * 要求所有正确位置上的类型必须是 map.BOX
 */
export function isWin() {
    for (const {row, col} of map.correct) {
        if(map.content[row][col] !== map.BOX){
            return false;
        }
    }
    return true;
}

/**
 * 获取玩家当前的位置
 */
function getPlayerPos() {
    for (let row = 0; row < map.row_num; row++) {
        for (let col = 0; col < map.col_num; col++) {
            if (map.PLAYER === map.content[row][col]) {
                return {
                    row,
                    col
                }
            }
        }
    }
}

/**
 * 获取当前位置的下一个位置的相关信息
 * @param {Number} row 当前位置的行
 * @param {Number} col 当前位置的列
 * @param {String} direction 方向
 */
function getNextPosInfo(row, col, direction) {
    if (direction === 'up') {
        row--;
    } else if (direction === 'down') {
        row++;
    } else if (direction === 'left') {
        col--;
    } else if (direction === 'right') {
        col++;
    }
    return {
        row,
        col,
        content_value: map.content[row][col] // 下一位置的类型
    }
}

/**
 * 交换两个矩形的类型值
 * @param {*} rect1
 * @param {*} rect2
 */
function exchance({
    row: row1,
    col: col1
}, {
    row: row2,
    col: col2
}) {
    const temp = map.content[row1][col1];
    map.content[row1][col1] = map.content[row2][col2];
    map.content[row2][col2] = temp;
}