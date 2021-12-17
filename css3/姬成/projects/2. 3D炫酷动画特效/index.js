var boxBg = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#564545', '#607d8b', '#405d6b', '#9e9e9e', '#70737d', '#389fa0', '#38a05e', '#b3c981', '#76a803', '#fecf43', '#e2785f']; //box背景色
var bodyBg = ['#F7E8ED', '#F2D9E6', '#ECC6DE', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#E0E1F5', '#F7E8ED', '#F2D9E6', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#DFD1F0', '#6161616']; //body背景色

initBg();

function initBg() {
    const style = document.createElement('style');

    let styleStr = '';

    boxBg.forEach((color, index) => {
        styleStr += `
        .wrapper .box:nth-of-type(${index + 1}) div{
            background: url(./images/${index + 1}.png) ${color} no-repeat center center;
        }`;
    });

    style.innerHTML += styleStr;

    document.head.appendChild(style);
}

document.onmousemove = function (e) {
    var roY = (e.clientX / window.innerWidth - 0.5) * 20,
        roX = (0.5 - e.clientY / window.innerHeight) * 20;
    document.querySelector('.wrapper').style.transform = `rotateX(${roX}deg) rotateY(${roY}deg)`
}

getEnterPos();

/**
 * 获取鼠标是从当前盒子的哪个方向移入的
 */
// function getEnterPos() {
//     const boxs = document.querySelectorAll('.box');
//     let dir;
//     Array.from(boxs).forEach(box => {
//         box.onmouseenter = function (e) {
//             const enter_x = e.clientX, // 鼠标移入盒子时的 横坐标 x
//                 enter_y = e.clientY, // 鼠标移入盒子时的 纵坐标 y
//                 info = this.getBoundingClientRect(),
//                 left = info.left, // 盒子左侧与浏览器左侧之间的距离
//                 // right = info.right, // 盒子右侧与浏览器左侧之间的距离
//                 top = info.top, // 盒子头部与浏览器顶部之间的距离
//                 // bottom = info.bottom, // 盒子低部与浏览器顶部之间的距离
//                 width = info.width, // 盒子的宽度
//                 height = info.height, // 盒子的高度
//                 x = enter_x - (left + width / 2), // 移入点相对于盒子中心的 横 坐标
//                 y = enter_y - (top + height / 2), // 移入点相对于盒子中心的 纵 坐标
//                 deg = Math.atan2(y, x) / Math.PI * 180; // 鼠标移入点 与 中心点构成的角的度数 (正方向 x轴 水平向右 y轴 垂直向下)
//             // Math.atan2(y, x) 获取到的是弧度 1π = 180°

//             dir = (Math.round((deg + 180) / 90) + 3) % 4;

//             var rotateArr = [
//                 'rotateX(-180deg)',
//                 'rotateY(-180deg)',
//                 'rotateX(180deg)',
//                 'rotateY(180deg)'
//             ];

//             this.style.transform = 'translateZ(150px) ' + rotateArr[dir];

//             document.body.style.background = bodyBg[Math.round(Math.random() * (bodyBg.length - 1))]
//         }
//         box.onmouseleave = function (e) {
//             this.style.transform = '';
//         }
//     })
// }

function getEnterPos() {
    const boxs = document.querySelectorAll('.box');
    // let dir;

    Array.from(boxs).forEach((box, index) => {
        box.onmouseenter = function (e) {
            document.body.style.background = bodyBg[Math.round(Math.random() * (bodyBg.length - 1))]
            // console.log('enter');
            const enter_x = e.clientX,
                enter_y = e.clientY,
                info = this.getBoundingClientRect(),
                x = enter_x - (info.left + info.width / 2),
                y = enter_y - (info.top + info.height / 2),
                deg = Math.atan2(y, x) / Math.PI * 180;



            if (deg >= -45 && deg < 45) { // right
                // console.log('right');
                this.style.transform = 'translateZ(150px) rotateY(-180deg)';
            } else if (deg >= 45 && deg < 135) { // top
                // console.log('bottom');
                this.style.transform = 'translateZ(150px) rotateX(-180deg)';
            } else if (deg >= 135 && deg <= 180 || deg >= -180 && deg < -135) { // left
                // console.log('left');
                this.style.transform = 'translateZ(150px) rotateY(180deg)';
            } else if (deg >= -135 && deg < -45) {
                // console.log('top');
                this.style.transform = 'translateZ(150px) rotateX(180deg)';
            }
        }
        box.onmouseleave = function () {
            // console.log('leave');
            this.style.transform = '';
        }
    })
}