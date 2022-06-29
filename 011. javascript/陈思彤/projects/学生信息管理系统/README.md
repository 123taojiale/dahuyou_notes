# 循环迭代项目

## 前言

这个循环迭代项目，后续还会有很多拓展，当前写的仅仅只是 JavaScript 版。之后还会用 jQuery、H5+C3、vue来拓展、完善。

这里面涉及到的业务逻辑还是蛮多的，基本的增删改查操作都涵盖了。

## 重点

- 封装ajax

```js
/**
 * 封装ajax
 * @param {String} method 请求方式
 * @param {String} url 请求地址
 * @param {String} data 请求数据
 * @param {Function} success 请求成功的回调函数
 * @param {Boolean} isAsync 是否异步
 */
function ajax(method, url, data, success, isAsync) {
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            success && success(data);
        }
    }

    if(method === 'GET' || method === 'get'){
        xhr.open(method, url + data, isAsync);
        xhr.send();
    }else if(method === 'POST' || method === 'post'){
        xhr.open(method, url, isAsync);
        xhr.send(data);
    }
}
```

**notes**

```
get 请求
    请求参数直接拼接在 xhr.open() 的第二个参数 请求地址 后面
post 请求
    请求参数通过 xhr.send() 来发送
```

- 删除字符串的最后一个字符

`str = str.slice(0, str.length - 1);`

- 传递的参数的格式

`?&key=value&key=value`

## bug

- ajax 第二个参数 忘记写协议

![20210405165301](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210405165301.png)

报错写法

```js
// open.duyiedu.com 只写了域名 前面还得加上 http:// 才有效
ajax(method, 'open.duyiedu.com' + path, strData, function (res) {
    if (res.status === 'success') {
        success && success(res);
    } else {
        alert(res.msg);
    }
}, true);
```

正确写法

```js
// open.duyiedu.com 只写了域名 前面还得加上 http:// 才有效
ajax(method, 'http://open.duyiedu.com' + path, strData, function (res) {
    if (res.status === 'success') {
        success && success(res);
    } else {
        alert(res.msg);
    }
}, true);
```

- 数据请求不过来

`先确保PC处于联网状态`

- 点击 提交表单 按钮

```
当我们点击 提交表单 type='submit' 按钮后 页面默认会刷新
可以通过给该按钮绑定事件 阻止其默认行为来防止页面刷新
方式1:
    e.preventDefault(); // 推荐
方式2:
    return false;
```

- http 请求错误 400

![20210406095131](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210406095131.png)

![20210406095214](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20210406095214.png)

该错误信息是由于性别字段的数据类型错误导致的

错误

```html
<!-- 没有给 input type='radio' 给定指定的 value 值 -->
<p>
    <label for="">性别</label>
    <input type="radio" name="sex" id="add-male">
    <label for="add-male" class="sex">男</label>
    <input type="radio" name="sex" id="add-female">
    <label for="add-female" class="sex">女</label>
</p>
```

修改后

```html
<!-- 没有给 input type='radio' 给定指定的 value 值 -->
<p>
    <label for="">性别</label>
    <input type="radio" name="sex" id="add-male" vlaue='0'>
    <label for="add-male" class="sex">男</label>
    <input type="radio" name="sex" id="add-female" vlaue='1'>
    <label for="add-female" class="sex">女</label>
</p>
```

在调试这一部分的程序时，先提前把`默认行为`给取消掉。这里说的默认行为，指的是点击提交表单后，刷新页面的默认行为。

## 提高

- 查询功能
- 学生信息按照添加时间降序
-