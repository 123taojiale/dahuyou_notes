const URL = require("url");
/*
URL.URL 构造函数，用于将 url 字符串转换为一个 URL 对象。
URL.format 函数，用于将 URL 对象转换回一个 url 字符串。（PS：该 API 已弃用）
*/
const url = new URL.URL("http://nodejs.cn/api/url.html#url_new_url_input_base");
console.log(url);
/*
URL {
  href: 'http://nodejs.cn/api/url.html#url_new_url_input_base',
  origin: 'http://nodejs.cn',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'nodejs.cn',
  hostname: 'nodejs.cn',
  port: '',
  pathname: '/api/url.html',
  search: '',
  searchParams: URLSearchParams {},
  hash: '#url_new_url_input_base'
}
*/
const UrlObject = {
  href: 'http://nodejs.cn/api/url.html#url_new_url_input_base',
  origin: 'http://nodejs.cn',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'nodejs.cn',
  hostname: 'nodejs.cn',
  port: '',
  pathname: '/api/url.html',
  search: '',
  hash: '#url_new_url_input_base'
}

console.log(URL.format(UrlObject)); // => http://nodejs.cn/api/url.html#url_new_url_input_base