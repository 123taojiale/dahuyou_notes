import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

/**
 * 查询 el 下带有 loading 效果的 img 节点
 * @param {HTMLElement} el 真实 DOM 节点
 * @returns loading 效果的 img 节点
 */
function queryLoadingImg(el) {
  return el.querySelector("img[data-role='loading']");
}

/**
 * 创建一个带有 loading 效果的 img
 * @returns 带有 loading 效果的 img
 */
function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = loadingUrl;
  img.classList.add(styles.loading);
  return img;
}

export default (el, binding) => {
  const curImg = queryLoadingImg(el); // 查询当前的 el 节点下是否含有 loading 效果的 img 子节点
  if (!curImg && binding.value === true) {
    const img = createLoadingImg();
    el.appendChild(img);
  } else if (curImg && binding.value === false) {
    curImg.remove();
  }
}