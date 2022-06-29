/**
 * ajax
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
            const res = JSON.parse(xhr.responseText);
            success && success(res);
        }
    }

    if (method === 'GET' || method === 'get') {
        xhr.open(method, url + '?' + data, isAsync);
        // console.log(url + '?' + data);
        xhr.send();
    } else if (method === 'POST' || method === 'post') {
        xhr.open(method, url, isAsync);
        xhr.send(data);
    }
}

/**
 * 本系统中的数据传输函数
 * @param {String} method 数据传输方式
 * @param {String} path 拼接在域名后面的 路径
 * @param {Object}} data 传输的数据
 * @param {Function} success 请求成功的回调函数
 */
function transferData(method, path, data, success) {
    console.log(`本次请求的路径是：https://open.duyiedu.com${path}`);
    // 获取传输的数据 (转化为 String 类型)
    let strData = '';
    if (typeof data === 'object') {
        for (let prop in data) {
            strData += `${prop}=${data[prop]}&`;
        }
        strData = strData.slice(0, strData.length - 1);
        // strData.slice(data.length - 1);
    } else {
        strData = data;
    }
    strData += '&appkey=_abc123_1606358542486';
    // console.log(`传输的数据是: ${strData}`);
    ajax(method, 'http://open.duyiedu.com' + path, strData, function (res) {
        if (res.status === 'success') {
            success && success(res);
        } else if (res.status === 'fail'){
            alert(res.msg);
        }
    }, true);
}