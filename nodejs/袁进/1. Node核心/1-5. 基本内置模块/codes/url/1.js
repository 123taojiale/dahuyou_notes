const URL = require("url");

console.log(new URL.URL("http://nodejs.cn/api/url.html#url_new_url_input_base"));
/*
URL {
  href: 'http://nodejs.cn/api/url.html#url_new_url_input_base',
  // => 完整地址
  origin: 'http://nodejs.cn',
  // => 协议 + 主机名
  protocol: 'http:',
  // => 协议
  username: '',
  // => 用户名（有些协议需要传递用户名和密码）
  password: '',
  // => 密码（有些协议需要传递用户名和密码）
  host: 'nodejs.cn',
  // => 主机名 + 端口号
  hostname: 'nodejs.cn',
  // => 主机名
  port: '',
  // => 端口号
  pathname: '/api/url.html',
  // => 路径
  search: '',
  // => 参数
  searchParams: URLSearchParams {},
  // => 参数的 key value 映射表（有点类似于 map）
  hash: '#url_new_url_input_base'
  // => hash值
}
*/

/*
URL.parse()
这个方法已经被弃用了，虽然它也可以创建一个 URL object，但是，它创建的 URL object 和 URL.URL 构造函数所创建出来的 URL object 还是有些不同的。
*/
console.log(URL.parse("http://nodejs.cn/api/url.html#url_new_url_input_base"));
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'nodejs.cn',
  port: null,
  hostname: 'nodejs.cn',
  hash: '#url_new_url_input_base',
  search: null,
  query: null,
  pathname: '/api/url.html',
  path: '/api/url.html',
  href: 'http://nodejs.cn/api/url.html#url_new_url_input_base'
}
*/