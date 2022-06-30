const colors = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"]; // 颜色库

/**
 * 获取一个随机整数 [min, max) 能取到最小值，无法取到最大值。
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
export function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 从颜色库 colors 中随机获取一个颜色
 */
export default function radColor() {
    const index = getRandom(0, colors.length);
    return colors[index];
}