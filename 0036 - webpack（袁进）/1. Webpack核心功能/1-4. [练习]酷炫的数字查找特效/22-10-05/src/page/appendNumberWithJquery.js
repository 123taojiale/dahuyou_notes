import { radColor, getRandom } from '../utils'
import $ from 'jquery'

const divContainer = $('#divContainer')
const divCenter = $('#divCenter')

/**
 * 在中间产生一个数字
 * @param {Number} n 产生的数字
 */
const createCenterNumber = n => {
  divCenter.text(n)
}

/**
 * 在中间产生一个素数
 * @param {Number} n 产生的数字
 * @param {*} color 中间的素数的颜色
 */
const createCenterPrimeNumber = (n, color) => {
  const div = $('<div>')
    .addClass('center')
    .css('color', color)
    .text(n)
  $('body').append(div)

  getComputedStyle(div[0]).left // reflow

  div
    .css(
      'transform',
      `translate(${getRandom(-200, 200)}px, ${getRandom(-200, 200)}px)`
    )
    .css('opacity', 0)
}

const appendNumber = (n, isPrime) => {
  const span = $('<span>').text(n)

  if (isPrime) {
    const color = radColor()
    span.css('color', color)
    createCenterPrimeNumber(n, color)
  }
  
  divContainer.append(span)

  createCenterNumber(n)
}

export default appendNumber
