// 用户传入的配置对象
let options = {
  width: '100',
  height: '100'
}

// 默认的配置对象
const defaultOptions = {
  width: '200',
  height: '200',
  container: document.body
}

options = {
  ...defaultOptions,
  ...options // 后面的会覆盖前面的
}
// 等效写法:
// options = Object.assign({}, defaultOptions, options);