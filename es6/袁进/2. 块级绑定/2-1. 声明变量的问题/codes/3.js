/*
变量提升，导致的怪异的数据访问。
无论点击的是哪个按钮 输出的始终都是 11，因为循环结束后 i 的值已经变成了 11，而绑定在每个 btn 身上的 onclick 事件 打印的都是同一个 i。
*/
var btns = document.querySelector('.btn-container');

for (var i = 1; i <= 10; i++) {
  var btn = document.createElement('button');
  btn.innerHTML = '按钮' + i;
  btns.appendChild(btn);

  btn.onclick = function () {
    console.log(i);
  }
}
/* 等效程序
var btns = document.querySelector('.btn-container');
var i;

for (i = 1; i <= 10; i++) {
  var btn = document.createElement('button');
  btn.innerHTML = '按钮' + i;
  btns.appendChild(btn);

  btn.onclick = function () {
    console.log(i);
  }
}
*/