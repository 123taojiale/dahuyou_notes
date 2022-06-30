const menuBtn = document.querySelector('.nav button'),
    menuList = document.querySelector('.nav ul');
menuBtn.onclick = function () {
    if (menuList.classList.contains('extend')) {
        menuList.classList.remove('extend')
    } else {
        menuList.classList.add('extend')
    }
}

// 通过 transform 来实现轮播图
const bannerUl = document.querySelector('#banner ul');

let curIndex = 0; // 当前展示的图片的索引值
setInterval(() => {
    curIndex++;
    bannerUl.style.transform = `translateX(-${curIndex % 3 * 100}vw)`
}, 3000);


// 通过 absolute 定位 来实现无缝轮播图
// const bannerUl = document.querySelector('#banner ul');
// let curLeft = 0; // bannerUl 当前的 left 值
// setInterval(() => {
//     curLeft += 100;

//     // 临界点
//     // if(curLeft > 300){
//     //     curLeft -= 300;
//     // }
//     if(curLeft % 300 === 0){
//         bannerUl.style.transform = `translateX(-300vw);`
//     }

//     bannerUl.style.left = `-${curLeft}vw`

// }, 1000);