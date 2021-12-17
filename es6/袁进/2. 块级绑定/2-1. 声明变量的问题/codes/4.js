/*
针对上面这样的场景，在 ES6 出现之前，我们可以使用立即执行函数的方式来解决。
*/
var btns = document.querySelector('.btn-container');

for (var i = 1; i <= 10; i++) {
  var btn = document.createElement('button');
  btn.innerHTML = '按钮' + i;
  btns.appendChild(btn);

  (function (i) {
    btn.onclick = function () {
      console.log(i);
    }
  })(i);
}