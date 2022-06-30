/* [需求] 在每个插值前面加冒号 */
const skill1 = 'html';
const skill2 = 'css';
const skill3 = 'js';

function myTag(parts, ...args) {
  let str = '';
  for (let i = 0; i < args.length; i++) {
    str += parts[i] + "：" + args[i]; // 只要修改这一条语句即可
    if (i === args.length - 1) {
      str += parts[i + 1];
    }
  }
  return str;
}

const str = myTag `first ${skill1}, second ${skill2}, third ${skill3}.`;
str; // => 'first ：html, second ：css, third ：js.'