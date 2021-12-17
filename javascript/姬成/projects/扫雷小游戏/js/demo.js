/* ReadMe
1. 创建table
2. 初始化squares
    1. 根据雷的个数确定一个随机数组
    2. 依据该随机数组, 确定哪些点是雷, 哪些点是数字, 以及它们的坐标
    3. 对于类型是数字的点, 确定其属性value的值
3.  */

/**
 * 扫雷构造函数
 * @param {Number} tr 行数
 * @param {Number} td 列数
 * @param {Number} mine_num 雷数
 */
function Mine(tr, td, mine_num) {
    this.tr = tr;
    this.td = td;
    this.mine_num = mine_num;

    this.squares = []; // 二维数组 用于存放每一个点的详细信息
    this.tds = []; // 二维数组 用于存储所有td元素
    this.surplus_mine = mine_num; // 剩余雷的数量
    this.all_right = false; // 所有的红旗标注是否正确

    this.parent = document.querySelector(".game-box");
}

// 初始化表格
Mine.prototype.createDom = function () {
    let table = document.createElement("table"),
        This = this;

    for (let row = 0; row < this.tr; row++) { // 遍历行
        var tr_dom = document.createElement("tr");
        this.tds[row] = [];

        for (let col = 0; col < this.td; col++) { // 遍历列
            var td_dom = document.createElement("td");
            this.tds[row][col] = td_dom;
            tr_dom.appendChild(td_dom);

            // 检测数字是否都正确
            // if (this.squares[row][col].type === "mine") {
            //     td_dom.classList.add("mine");
            // }
            // if (this.squares[row][col].type === "number") {
            //     td_dom.innerHTML = this.squares[row][col].value;
            // }

            td_dom.pos = {
                row,
                col
            }
            td_dom.onmousedown = function (e) {
                let event = e || window.event;
                This.play(event, this); // This 指的是mine实例对象 this 指的是td_dom
            }
            /* 直接写在td_dom上不好 可以利用事件委托 直接写在 this.parent 上
            td_dom.oncontextmenu = function () { // 阻止右键出菜单的默认行为
                return false;
            } */
        }

        table.appendChild(tr_dom);
    }

    this.parent.innerHTML = ""; // 清空上一个table
    this.parent.appendChild(table);
}

Mine.prototype.randomNum = function () {
    let rand_arr = new Array(this.td * this.tr); // 根据单元格数量创建一个随机数组
    // 初始化该数组 每一项的值就是其索引值
    for (var i = 0; i < rand_arr.length; i++) {
        rand_arr[i] = i;
    }
    // 令该数组乱序
    rand_arr.sort(() => Math.random() - 0.5);
    // 根据 mine_num 即: 雷的数量来截取乱序后的数组
    rand_arr.splice(0, rand_arr.length - this.mine_num);
    return rand_arr;
}

Mine.prototype.init = function () {
    let rand_arr = this.randomNum(), // 用于确定雷的位置
        n = 0; // 当前遍历到的点的索引 0 - (this.td * this.tr - 1)
    for (let row = 0; row < this.tr; row++) { // 遍历行
        this.squares[row] = [];

        for (let col = 0; col < this.td; col++) { // 遍历列
            if (rand_arr.indexOf(n++) != -1) { // mine
                this.squares[row][col] = {
                    type: "mine",
                    row,
                    col
                }
            } else { // number
                this.squares[row][col] = {
                    value: 0, // 这个点周围的雷的数量(先给一个初始值0)
                    type: "number",
                    row,
                    col
                }
            }
        }

    }
    // console.log(rand_arr);
    this.updateNum();
    this.createDom();

    // 阻止右键出菜单的默认行为
    this.parent.oncontextmenu = function () {
        return false;
    }
    // 剩余雷数
    this.mine_num_dom = document.querySelector(".mine-num");
    this.mine_num_dom.innerHTML = this.surplus_mine; // 显示剩余雷的数量
}

/**
 * 返回该雷点周围非雷点的坐标(row, col)数组
 * @param {Object} square 雷点对象
 */
Mine.prototype.getAround = function (square) {
    let result = [],
        row = square.row,
        col = square.col;

    /* 该雷点周围8个点的坐标
        col-1,row-1		col,row-1	col+1,row-1
        col-1,row		col,row		col+1,row
        col-1,row+1		col,row+1	col+1,row+1
    */
    for (let r = row - 1; r <= row + 1; r++) { // 遍历行
        for (let c = col - 1; c <= col + 1; c++) { // 遍历列
            if (
                r < 0 || c < 0 || r > this.tr - 1 || c > this.td - 1 || // 越界不考虑
                (r === row && c === col) || // 不考虑自身
                this.squares[r][c].type === "mine" // 不考虑雷点
            ) {
                continue;
            } else {
                result.push([r, c]);
            }
        }
    }
    return result;
}

/**
 * 更新雷周围的数字
 */
Mine.prototype.updateNum = function () {
    for (let row = 0; row < this.tr; row++) { // 遍历行
        for (let col = 0; col < this.td; col++) { // 遍历列
            let square = this.squares[row][col];
            // 过滤掉 非雷点
            if (square.type === "number") {
                continue;
            } else {
                let num_arr = this.getAround(square), // 获取到雷点周围的数字点的坐标数组
                    row, col; // 数字点的坐标(row, col)
                // console.log(num_arr);
                for (let k = 0; k < num_arr.length; k++) {
                    row = num_arr[k][0]; // 第一位是行
                    col = num_arr[k][1]; // 第二位是列
                    this.squares[row][col].value += 1;
                }
            }


        }
    }
}

/**
 * 用户玩游戏的交互程序
 * @param {Object} e 事件对象
 * @param {HTMLElement} td_dom 被点击的那个点
 */
Mine.prototype.play = function (e, td_dom) {
    let This = this,
        row = td_dom.pos.row,
        col = td_dom.pos.col;

    // console.log(td_dom, td_dom.pos);
    if (e.which === 1 && !td_dom.classList.contains("flag")) { // 鼠标左键 && 标注了红旗的无法点击
        let cur_square = this.squares[row][col], // 当前被点击的点
            color_list = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth'];

        if (cur_square.type === "mine") { // 点的是雷
            // console.log("点到雷了...");
            alert("游戏失败...")
            this.gameOver(td_dom);
        } else { // 点的是数字
            // console.log("这个不是雷...");
            let value = cur_square.value; // 获取当前点击的点的属性value的值
            if (value != 0) { // 非0
                td_dom.innerHTML = value;
                td_dom.classList.add(color_list[value]);
            } else { // 0
                td_dom.innerHTML = "";

                function showAllAroundZero(square) {
                    let around = This.getAround(square); // 先获取到这个0周围的非雷点
                    // console.log(around);
                    for (let i = 0; i < around.length; i++) {
                        let row = around[i][0], // 第一位是行
                            col = around[i][1], // 第二位是列
                            square = This.squares[row][col],
                            value = square.value, // 当前square的属性value的值
                            class_name = color_list[value],
                            td = This.tds[row][col]; // 当前的td
                        td.classList.add(class_name);
                        if (value === 0) {
                            if (!td.checked) {
                                console.log(td);
                                td.checked = true; // 但凡是扩散过的td 都将其checked标志位设置为true 确保下次该td元素不需要再次扩散
                                showAllAroundZero(square); // 递归 扩散出去
                            }
                        } else {
                            td.innerHTML = value;
                        }
                    }
                }
                showAllAroundZero(cur_square);
            }

        }
    } else if (e.which === 2) { // 鼠标中键
        // 作弊...
        alert(this.squares[row][col].type === "mine" ? "雷" : "非雷");
    } else if (e.which === 3) { // 鼠标右键
        if (td_dom.className && !td_dom.classList.contains("flag")) { // 该td已显示(该td有className 并且 不是"flag")
            return;
        }

        // 判断所有红旗的标注是否正确
        let type = this.squares[row][col].type;
        if (type === "mine") {
            this.all_right = true;
        } else {
            this.all_right = false; // 一旦某次判断出现错误 就将其设置为false 
            // (但是这玩意儿还是可以改的 若下次判断该点判断正确 那么还是会变回true)
        }

        // 重复点击 红旗消失 并且 雷的剩余数量+1 首次点击 红旗出现 并且 雷的剩余数量-1
        if (td_dom.classList.contains("flag")) {
            td_dom.classList.remove("flag");
            this.mine_num_dom.innerHTML = ++this.surplus_mine;
        } else {
            td_dom.classList.add("flag");
            this.mine_num_dom.innerHTML = --this.surplus_mine;
            if (this.surplus_mine === 0) { // 若雷的剩余数为0 表示玩家已标完小红旗了 下面做最终的判断即可
                if (this.all_right === true) {
                    alert("恭喜你, 游戏通过");
                    this.gameOver();
                } else {
                    alert("游戏失败");
                    this.gameOver();
                }
            }
        }
    }
}

/**
 * 游戏结束函数
 * @param {HTMLElement} td 当前被点击的td
 */
Mine.prototype.gameOver = function (td) {
    for (let row = 0; row < this.tr; row++) { // 遍历行
        for (let col = 0; col < this.td; col++) { // 遍历列
            // 1. 显示所有的雷
            if (this.squares[row][col].type === "mine") {
                this.tds[row][col].classList.add("mine");
            }
            // 2. 取消所有格子的点击事件
            this.tds[row][col].onmousedown = null;
        }
    }
    // 3. 给这个败笔加点血色
    if (td) {
        td.style.backgroundColor = "#f00";
    }
}

// let mine = new Mine(28, 28, 99);
// mine.init();
// console.log(mine.getAround(mine.squares[0][0])); 

let level_btns = document.querySelectorAll(".level .level-btn"),
    mine = null,
    level_arr = [ // 不同级别的行列数
        [9, 9, 10],
        [14, 14, 40],
        [28, 28, 99]
    ];

Array.from(level_btns).forEach((item, index) => {
    item.onclick = function () {
        Array.from(this.parentElement.children).forEach(item => {
            item.classList.remove("active"); // 清除所有button上的active样式
        })
        this.classList.add("active"); // 给指定的button添加上active样式

        mine = new Mine(...level_arr[index]);
        mine.init();
    }
});


// 默认初级
level_btns[0].onclick();
document.querySelector(".restart").onclick = function () {
    mine.init();
}