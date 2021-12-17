// 产生一个随机的 id
export default () => {
  return Date.now() + Math.random().toString().substr(2, 4)
}