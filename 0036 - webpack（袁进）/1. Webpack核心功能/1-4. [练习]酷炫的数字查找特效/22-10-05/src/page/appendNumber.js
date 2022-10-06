import { radColor, getRandom } from '../utils'

const divContainer = document.getElementById('divContainer')
const divCenter = document.getElementById('divCenter')

/**
 * 在中间产生一个数字
 * @param {Number} n 产生的数字
 */
const createCenterNumber = n => {
  divCenter.innerText = n
}

/**
 * 在中间产生一个素数
 * @param {Number} n 产生的数字
 * @param {*} color 中间的素数的颜色
 */
const createCenterPrimeNumber = (n, color) => {
  const div = document.createElement('div')
  div.classList.add('center')
  div.style.color = color
  div.innerText = n
  document.body.appendChild(div)
  getComputedStyle(div).left // 只要读取某个元素的位置或尺寸信息，则会导致浏览器重新渲染 reflow
  div.style.transform = `translate(${getRandom(-200, 200)}px, ${getRandom(
    -200,
    200
  )}px)`
  div.style.opacity = 0

  // 3 秒后，将自身给 remove 掉，防止页面上 opacity 为 0 的元素堆积
  setTimeout(() => {
    div.remove()
  }, 3000)
}

const appendNumber = (n, isPrime) => {
  const span = document.createElement('span')
  if (isPrime) {
    const color = radColor()
    span.style.color = color
    createCenterPrimeNumber(n, color)
  }
  span.innerText = n
  divContainer.appendChild(span)

  createCenterNumber(n)
}

export default appendNumber
