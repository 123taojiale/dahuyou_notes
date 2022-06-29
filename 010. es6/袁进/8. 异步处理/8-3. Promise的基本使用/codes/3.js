/*
将之前封装的 ajax 的外层套上一层 promise：
*/
const pro = new Promise((resolve, reject) => {
  ajax({
    url: './data/students.json?name=李华',
    success(data) {
      resolve(data);
    },
    error(err) {
      reject(err);
    }
  });
});

pro.then((data) => {
  console.log(data);
});