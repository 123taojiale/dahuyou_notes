function ajax(options) {
  const defaultOptions = {
    method: 'get',
    url: '/'
  }
  // 对象混合
  const opt = {
    ...defaultOptions,
    ...options
  };
  console.log('混合后的配置 => ', opt);
}

ajax({
  url: '/abc'
}); // => 混合后的配置 =>  { method: 'get', url: '/abc' }
ajax(); // => 混合后的配置 =>  { method: 'get', url: '/' }
/* Attention：
undefined 展开 不会报错 但是 啥也没有
*/