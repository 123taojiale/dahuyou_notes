const {
  wordDuration,
  text
} = require("./config");
const delay = require("./delay");
let preText = ""; // 打印过的字符

async function print(index) {
  for (let i = 0; i < index; i++) {
    const char = text[i];
    await delay(wordDuration);
    preText += char;
    console.clear();
    console.log(preText);
  }
}

module.exports = print;