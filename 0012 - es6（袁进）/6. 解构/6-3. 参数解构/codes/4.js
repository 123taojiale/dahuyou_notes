/*
参数解构 -> 默认参数配置
直接将默认的配置信息 写在 解构的参数中
*/
function ajax({
  method = 'get', // 等价于: method: method = 'get'
  url = '/' // 等价于: url: url = '/'
}) {
  console.log(method, url);
}

ajax({
  url: '/abc'
}); // => get /abc