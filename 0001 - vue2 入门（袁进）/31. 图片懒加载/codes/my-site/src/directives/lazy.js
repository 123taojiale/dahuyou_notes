// 图片懒加载效果
import defaultUrl from "@/assets/default.gif";
import debounce from "@/utils/debounce.js";
import eventBus from "@/eventBus.js";

let imgs = []; // 相关数据

export default {
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value
    };
    imgs.push(img);
    setImg(img);
  },
  unbind() {
    imgs = []; // 清空数据
  }
}

// 判断当前图片是否需要加载
function setImg(img) {
  img.dom.src = defaultUrl; // 所有图片默认显示占位图
  const top = img.dom.getBoundingClientRect().top; // 当前图片与视口顶部之间的距离
  const imgHeight = img.dom.clientHeight || 150; // 占位图的高度默认是 150
  const htmlHeight = document.documentElement.clientHeight; // 可视区的高度
  if (top >= -imgHeight && top <= htmlHeight) { // 可视区的图片
    img.dom.src = img.src;
    imgs = imgs.filter(i => i !== img); // 留下未加载的图片
  }
}

function handleScroll() {
  for (const img of imgs) {
    setImg(img);
  }
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

// setInterval(() => {
//   console.log('待处理的图片数据：', imgs);
// }, 1000);