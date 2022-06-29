// 改写 封装好的Ajax函数
function ajax(obj) {
  return new Promise((resolve, reject) => {
    // ... 保持不变
    // 接收返回过来的数据
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.status);
        }
      }
    }
  });
}

/*
// 原来的 ajax 函数
function ajax(obj) {
  // ...
  // 接收返回过来的数据
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
        if (obj.success) {
          // resolve
          obj.success(JSON.parse(xhr.responseText));
        }
      } else {
        if (obj.error) {
          // reject
          obj.error(xhr.status);
        }
      }
    }
  }
}
*/


ajax({
  url: './data/students.json?name=李华'
}).then(res => {
  console.log(res);
}, err => {
  console.log(err);
});