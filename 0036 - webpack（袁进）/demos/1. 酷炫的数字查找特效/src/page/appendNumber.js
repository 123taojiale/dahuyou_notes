import radColor, {
    getRandom
} from "../util/radColor";

const divContainer = document.getElementById('divContainer');
const divCenter = document.getElementById('divCenter');

/**
 * 每产生一个新的数字，就将其插入到页面中。
 * @param {Number} n 产生的数字
 * @param {Boolean} isPrime 是否是素数
 */
export default function appendNumber(n, isPrime) {
    const span = document.createElement('span');
    span.innerText = n;

    if (isPrime) {
        const color = radColor();
        span.style.color = color;
        createCenterPrimeNumber(n, color); // 如果这个数是素数，那么在插入到中间位置时，要特殊处理。
    }

    divContainer.appendChild(span);
    divCenter.innerText = n;
}

/**
 * 特殊处理中间位置的素数。
 * @param {Number} n 素数
 * @param {String} color 颜色
 */
function createCenterPrimeNumber(n, color) {
    const div = document.createElement('div');
    div.classList.add('center');
    div.innerText = n;
    div.style.color = color;
    document.body.appendChild(div);

    // 解决因为没有 reflow 而导致的 bug
    getComputedStyle(div).left;

    div.style.transform = `translate(${getRandom(-200, 200)}px, ${getRandom(-200, 200)}px)`;
    div.style.opacity = 0;
}