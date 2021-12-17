const tBody = document.querySelector('tbody');
const turnPage = document.querySelector('.turn-page');
const menu = document.querySelector('.left-menu');
const addStuForm = document.querySelector('#stu-add #add-stu-form'); // 新增学生表单
const addStuBtn = addStuForm.querySelector('input[type="submit"]'); // 添加学生按钮
const modal = document.querySelector('.modal'); // 编辑表单
const editForm = modal.querySelector('form'); // 获取编辑表单
const editSubmitBtn = editForm.querySelector('input[type="submit"]'); // 编辑表单的提交按钮

// 存放与翻页相关的数据
const page = {
    size: 10, // 一页展示的数据量
    all: 0, // 一共有多少页
    now: 1 // 当前的页码
};

let tableData = []; // 包含所有学员信息

getTableData();
bindEvent();

/**
 * 从指定接口获取最新的学生信息数据来渲染页面
 * 初始化全部变量 page 和 tableData
 */
function getTableData() {
    transferData('GET', '/api/student/findAll', '', function (res) {
        tableData = res.data; // 获取 最新的 所有学生信息
        page.all = Math.ceil(tableData.length / page.size); // 这些学生信息需要多少页来展示

        // 1. 渲染tBody
        tBody.innerHTML = '';
        let tBodyStr = '';
        tableData.forEach((stu, index) => {
            if (index >= (page.now - 1) * page.size && index <= page.now * page.size - 1) {
                tBodyStr += `<tr>
                <td>${stu.sNo}</td>
                <td>${stu.name}</td>
                <td>${stu.sex === 0 ? '男' : '女'}</td>
                <td>${stu.email}</td>
                <td>${new Date().getFullYear() - stu.birth}</td>
                <td>${stu.phone}</td>
                <td>${stu.address}</td>
                <td>
                    <button class="edit btn">编辑</button>
                    <button class="remove btn">删除</button>
                </td>
            </tr>`;
            }
        });
        tBody.innerHTML = tBodyStr;

        // 2. 渲染turnPage
        turnPage.innerHTML = '';
        let turnPageStr = '';
        if (page.now !== 1) { // 不是首页 则显示 上一页 按钮
            turnPageStr += `<button class="prev-btn btn">< 上一页</button>`;
        }
        let icurPage = 1;
        while (icurPage <= page.all) {
            if (icurPage !== page.now) {
                turnPageStr += `<span class="page-num">${icurPage}</span>`;
            } else {
                turnPageStr += `<span class="page-num active">${icurPage}</span>`;
            }
            icurPage++;
        }
        if (page.now !== page.all) { // 不是尾页 则显示 下一页 按钮
            turnPageStr += `<button class="next-btn btn">下一页 ></button>`;
        }
        turnPage.innerHTML = turnPageStr;
    });
}

function bindEvent() {
    turnPage.onclick = handlerTurnPage; // 换页功能
    menu.onclick = handlerMenu; // 左侧菜单切换功能
    addStuBtn.onclick = handlerAddStuBtn; // 添加学生功能
    tBody.onclick = handlerTBody; // 删除 & 编辑
    modal.onclick = handlerModal; // 编辑表单的关闭功能
}

/**
 * 翻页功能
 * 给 上下页 和 数字索引 按钮绑定事件
 * @param {Object} e 事件对象
 */
function handlerTurnPage(e) {
    const node = e.target; // 获取被点击的元素
    if (node.classList.contains('prev-btn')) {
        // console.log('prev-btn');
        page.now--;
        getTableData();
    }
    if (node.classList.contains('next-btn')) {
        // console.log('next-btn');
        page.now++;
        getTableData();
    }
    if (node.classList.contains('page-num')) {
        // console.log('page-num');
        page.now = parseInt(node.innerHTML);
        getTableData();
    }
}

/**
 * 给左侧菜单 menu 注册事件
 * @param {Object} e 事件对象
 */
function handlerMenu(e) {
    // console.log(e.target.dataset.id);
    const node = e.target; // 获取被点击的元素
    if (node.hasAttributes('data-id')) {
        const siblingsArr = Array.from(node.parentElement.querySelectorAll('[data-id]'));
        // console.log(siblingsArr);

        siblingsArr.forEach(li => {
            li.classList.remove('active');
            document.getElementById(li.dataset.id).style.display = 'none';
        });
        node.classList.add('active');
        document.getElementById(node.dataset.id).style.display = 'block';
    }
}

/**
 * 给添加学生按钮添加的事件处理函数
 * @param {Object} e 事件对象
 */
function handlerAddStuBtn(e) {
    e.preventDefault(); // 阻止刷新页面的默认行为
    const result = getFormData(addStuForm); // 获取新增学生表单中的数据
    console.log(result);
    if (result.status === "success") {
        transferData('GET', '/api/student/addStudent', result.data, function () {
            alert("添加成功");
            location.reload(); // 刷新页面 (仅当数据添加成功时才会刷新页面)
        })
    } else {
        alert(result.msg); // 弹出数据添加失败的原因 (能走到这一步 说明 表单数据校验已通过 有可能是学号字段重复的问题)
    }
}

/**
 * 获取表单数据
 * @param {HTMLElement} form
 */
function getFormData(form) {
    // 得到表单数据
    let name = form.name.value,
        sex = form.sex.value,
        email = form.email.value,
        sNo = form.sNo.value,
        birth = form.birth.value,
        phone = form.phone.value,
        address = form.address.value;
    let result = { // 最终要返回的对象
        status: 'success',
        msg: '', // 存放错误提示信息
        data: {} // 存放最终通过校验的表单数据
    }
    // 表单校验
    if (!name || !email || !sNo || !birth || !phone || !address) {
        result.status = 'fail';
        result.msg = '信息填写不全，请校验后再提交';
        return result;
    }
    let emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
    if (!emailReg.test(email)) {
        result.status = 'fail';
        result.msg = "请输入正确的邮箱格式";
        return result;
    }
    let sNoReg = /\d{4,16}/g;
    if (!sNoReg.test(sNo)) {
        result.status = 'fail';
        result.msg = "学号必须为4-16位的数字组成";
        return result;
    }
    if (birth >= 2010 || birth <= 1970) {
        result.status = 'fail';
        result.msg = "只收1970-2010年出生的学生";
        return result;
    }
    let phoneReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g;
    if (!phoneReg.test(phone)) {
        result.status = "fail";
        result.msg = "请输入正确的手机号";
        return result;
    }
    // 将通过校验的数据存入 result.data
    result.data = {
        name,
        sex,
        email,
        sNo,
        birth,
        phone,
        address
    }
    return result;
}

/**
 * 编辑 & 删除
 * @param {Object} e 事件对象
 */
function handlerTBody(e) {
    const node = e.target;
    let tr_index, stuInfo; // 当前点击的行的索引 该行的学生信息
    if (node.tagName === 'BUTTON') {
        tr_index = Array.from(tBody.children).indexOf(node.parentElement.parentElement) + page.size * (page.now - 1);
        // console.log(tr_index); // 获取当前行的索引值
        stuInfo = tableData[tr_index]; // 获取这一行的学生信息 (用于表单信息的回填)
        if (node.classList.contains('edit')) { // 点击的是 编辑 按钮
            // console.log('edit');
            // console.log(stuInfo);
            // 显示编辑表单
            modal.style.display = 'block';
            // 表单信息回填
            for (let prop in stuInfo) {
                if (prop in editForm && prop !== 'id') {
                    editForm[prop].value = stuInfo[prop];
                }
            }
            editSubmitBtn.onclick = function (e) {
                e.preventDefault(); // 防 刷新页面
                updateStuInfo(getFormData(editForm));
            }
        } else if (node.classList.contains('remove')) { // 点击的是 删除 按钮
            // console.log('remove');
            const sNo = stuInfo.sNo;
            removeStuInfo(sNo);
        }
    }
}

/**
 * 编辑表单的关闭功能
 * @param {Object} e 事件对象
 */
function handlerModal(e) {
    const node = e.target;
    if (node.classList.contains('close')) {
        // console.log('close');
        modal.style.display = 'none';
    }
}

/**
 * 修改功能
 * @param {Object} result 获取到的表单数据
 */
function updateStuInfo(result) {
    if (result.status === 'fail') {
        alert(result.msg);
    } else if (result.status === 'success') {
        transferData('GET', '/api/student/updateStudent', result.data, function (res) {
            alert(res.msg);
            modal.style.display = 'none';
            getTableData(); // 重新获取数据 渲染页面
        });
    }
}

/**
 * 删除功能
 * @param {Number} sNo 学号
 */
function removeStuInfo(sNo) {
    transferData("GET", "/api/student/delBySno", {
        sNo,
    }, function (res) {
        alert(res.msg);
        getTableData(); // 重新获取数据 渲染页面
    });
}