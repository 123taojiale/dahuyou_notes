const skill1 = 'html';
const skill2 = 'css';
const skill3 = 'js';

function myTag(parts, arg1, arg2, arg3) {
  console.log(parts, arg1, arg2, arg3);
  return '123';
}
const str = myTag `first ${skill1}, second ${skill2}, third ${skill3}.`;
/* 等效于下面这种写法：
const str = myTag(
  ['first ', ', second ', ', third ', '.'],
  skill1,
  skill2,
  skill3);
*/
str; // => 123