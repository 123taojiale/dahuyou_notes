import getRandom from './getRandom'

const colors = [
  '#f26395',
  '#62efab',
  '#ef7658',
  '#ffe868',
  '#80e3f7',
  '#d781f9'
]

/**
 * 返回一个随机的颜色
 */
const radColor = () => colors[getRandom(0, colors.length - 1)]

export default radColor
