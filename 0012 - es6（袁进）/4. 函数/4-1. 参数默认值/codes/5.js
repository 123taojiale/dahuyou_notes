/*
面试题：问 'abc' 会输出几次？
*/
function getContainer() {
  console.log('abc');
  return document.body;
}

function createElement(name = 'div', container = getContainer(), content) {
  const ele = document.createElement(name);
  if (content) {
    ele.innerHTML = content;
  }
  container.appendChild(ele);
}

createElement(undefined, undefined, 'dahuyou');
createElement('p', undefined, 'xiaohuyou');
createElement(undefined, document.querySelector('div'), 'dahuyou');
/*
答：2次
实际上问的就是 有多少次第二个参数传入的是 undefined
即：有多少次第二个参数取的是默认值
即：函数 getContainer 调用的次数

getContainer 函数只会在 createElement 函数的第二个参数取默认值的情况下才会调用。
取默认值：也就是传入的值是 undefined（没有传值相当于传入的是 undefined）。
*/