if (!this.myPlugin) {
    this.myPlugin = {};
}

/**
 * 获取随机整数 [min, max]
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
this.myPlugin.getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// this.myPlugin.getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
/**
 * 继承
 */
this.myPlugin.inherit = (function () {
    var Temp = function () {}
    return function (son, father) {
        Temp.prototype = father.prototype;
        son.prototype = new Temp();
        son.prototype.constructor = son;
        son.prototype.uber = father.prototype;
    }
}());

/**
 * 判断目标变量的数据类型
 * @param {*} target 目标变量
 */
this.myPlugin.type = function (target) {
    var ret = typeof (target);
    var template = {
        "[object Array]": "array",
        "[object Object]": "object",
        "[object Number]": "number - object",
        "[object Boolean]": "boolean - object",
        "[object String]": "string - object",
    }
    if (target === null) {
        return "null";
    }
    if (ret === "object") {
        var str = Object.prototype.toString.call(target);
        return template[str];
    } else {
        return ret;
    }
};

/**
 * 克隆一个对象
 * @param {Object} target 被克隆的目标对象
 * @param {boolean} deep 是否深度克隆
 */
this.myPlugin.clone = function (target, deep) {
    // 1. 是数组
    if (Array.isArray(target)) {
        if (deep) { // 深度
            var newArr = [];
            target.forEach(item => {
                newArr.push(this.clone(item, true));
            });
            return newArr;
        } else { // 浅度
            return target.slice();
        }
    }
    // 2. 是对象
    if (typeof target === "object") {
        var newObj = {};
        if (deep) { // 深度
            for (var prop in target) {
                newObj[prop] = this.clone(target[prop], true);
            }
        } else { // 浅度
            for (var prop in target) {
                newObj[prop] = target[prop];
            }
        }
        return newObj;
    }
    // 3. 是基本数据类型
    return target;
}

/**
 * 找字符串中第一个只出现一次的字母
 * 若找到满足条件的字符 则 直接返回该字符
 * 若没找到满足条件的字符 则 返回false
 * @param {String} str [a-z]组成的字符串
 */
this.myPlugin.findFirstOnlyChar = function (str) {
    var temp = {},
        start = 'a'.charCodeAt(),
        end = 'z'.charCodeAt(),
        len = str.length;
    // 初始化模板对象
    for (var i = start; i <= end; i++) {
        temp[String.fromCharCode(i)] = 0;
    }
    for (var i = 0; i < len; i++) {
        if (str[i] in temp) {
            temp[str[i]]++;
        }
    }
    console.log(temp);
    // 查找满足条件的字符
    for (var i = 0; i < len; i++) {
        if (temp[str[i]] === 1) {
            // console.log(`在字符串: ${str} 中 第一个只出现一次的字母是 ${str[i]}`);
            return str[i];
        }
    }
    // console.log('不存在满足条件的字符');
    return false;
}

// console.log(findChar("abcdbdcadbcdacdbagadbcadbcabdbcbad"));

/**
 * 获取滚动条的滚动距离
 * 返回一个对象 属性x表示横向滚动距离 属性y表示纵向滚动距离
 */
this.Myplugin.getScrollOffset = function () {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

/**
 * 获取可视区窗口的尺寸
 * 返回一个对象 属性w表示可视区窗口的宽度 属性h表示可视区窗口的高度
 */
this.myPlugin.getViewportOffset = function () {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        if (document.compatMode === "BackCompat") {
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}

/**
 * 获取HTML元素相对于文档的坐标
 * @param {HTMLElement} element HTML元素
 */
this.myPlugin.getElementPosition = function (element) {
    function getElementLeft(element) {
        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;

        while (current !== null) {
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
        }

        return actualLeft;
    }

    function getElementTop(element) {
        var actualTop = element.offsetTop;
        var current = element.offsetParent;

        while (current !== null) {
            actualTop += current.offsetTop;
            current = current.offsetParent;
        }

        return actualTop;
    }

    return {
        left: getElementLeft(element),
        top: getElementTop(element)
    }
}

/**
 * 获取HTML元素的某个属性的最终结果
 * @param {HTMLElement} elem HTML元素
 * @param {String} prop 属性
 */
this.myPlugin.getStyle = function (elem, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}

/**
 * 兼容性写法 为html元素绑定事件处理函数
 * 事件处理模型 默认是冒泡
 * @param {HTMLElement} elem HTML元素
 * @param {String} type 事件类型
 * @param {Function} handle 事件处理函数
 */
this.myPlugin.addEvent = function (elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent("on" + type, function () {
            handle.call(elem);
        })
    } else {
        elem["on" + type] = handle;
    }
}

/**
 * 阻止事件冒泡
 * @param {Object} event 事件对象
 */
this.myPlugin.stopBubble = function (event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}

/**
 * 阻止默认行为
 * @param {Object} event 事件对象
 */
this.myPlugin.cancelHandler = function (event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}

/**
 * 拖拽HTML元素
 * @param {HTMLElement} elem HTML元素
 */
this.myPlugin.drag = function (elem) {
    var disX,
        disY;
    elem.addEventListener("mousedown", function (e) {
        var event = e || window.event;
        disX = event.clientX - parseInt(this.myPlugin.getStyle(elem, 'left'));
        disY = event.clientY - parseInt(this.myPlugin.getStyle(elem, 'top'));
        document.addEventListener("mousemove", mouseMove, false);
        document.addEventListener("mouseup", mouseUp, false);
        this.myPlugin.stopBubble(event); // 阻止事件冒泡
        this.myPlugin.cancelHandler(event); // 阻止事件默认行为
    }, false)

    function mouseMove(e) {
        var event = e || event;
        elem.style.left = event.clientX - disX + "px";
        elem.style.top = event.clientY - disY + "px";
    }

    function mouseUp(e) {
        var event = e || event;
        document.removeEventListener("mousemove", mouseMove, false);
        document.removeEventListener("mouseup", mouseUp, false);
    }
}

/**
 * 异步加载外部JS文件
 * 解决 JS异步加载兼容性的问题
 * @param {String} url 外部JS文件路径
 * @param {Function} callback 回调函数
 */
this.myPlugin.loadScript = function (url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
        // IE
        script.onreadystatechange = function () { // ie的 script 元素支持onreadystatechange事件
            if (script.readyState == "complete" || script.readyState == "loaded") {
                callback();
            }
        }
    } else {
        // Safari Chrome Firefox Opera
        script.onload = function () {
            callback();
        }
    }
    script.src = url; // 该语句要位于 绑定 readystatechange 事件之后
    document.head.appendChild(script);
}

/**
 * 数组去重
 */
Array.prototype.unique = function () {
    var temp = {},
        arr = [],
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!temp[this[i]]) {
            temp[this[i]] = 'abc';
            arr.push(this[i]);
        }
    }
    return arr;
}

/**
 * 字符串去重
 */
String.prototype.unique = function () {
    var obj = {},
        len = this.length,
        str = '';
    for (var i = 0; i < len; i++) {
        if (obj[this[i]] !== 1) {
            obj[this[i]] = 1;
            str += this[i];
        }
    }
    return str;
}

/**
 * 在目标节点的后面插入新节点
 * @param {HTMLElement} targetNode 目标节点
 * @param {HTMLElement} newNode 新节点
 */
Element.prototype.insertAfter = function (targetNode, newNode) {
    var Node = targetNode.nextElementSibling; // 插入前 位于目标节点之后的那个节点
    if (Node == null) {
        this.appendChild(newNode); // Node为null 表示目标节点已经是最后一个节点 所以直接append到父级最后即可
    } else {
        this.insertBefore(newNode, Node); // 将新节点直接插入到 Node 前
    }
}

/**
 * 子元素节点逆序
 */
Element.prototype.inversElement = function () {
    var len = this.children.length;
    for (var i = len - 1; i >= 0; i--) {
        this.appendChild(this.children[i]);
    }
}