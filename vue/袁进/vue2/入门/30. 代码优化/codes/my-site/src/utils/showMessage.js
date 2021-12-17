import Icon from "@/components/Icon";
import getComponentRootDom from "./getComponentRootDom.js";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {HTMLElement} container 消息容器
 * @param {String} type 消息类型 info、warn、error、correct
 * @param {Number} duration 消息的持续时间
 * @param {Function} cb 弹出消息结束后的回调函数
 */
function showMessage(options = {}) {
  // 初始化相关数据
  const content = options.content || "尚未指定消息内容",
    container = options.container || document.body, // 消息容器默认为 body
    type = options.type || "info", // 消息类型默认为正常消息
    duration = options.duration || 500, // 消息的显示时长默认为 500ms
    cb = options.cb || function () {}; // 弹出消息结束后的默认回调函数为空

  // 创建元素
  const div = document.createElement("div"), // 消息DOM
    iconDom = getComponentRootDom(Icon, {
      type
    });

  // 处理内容
  const iconDomStr = iconDom.outerHTML;
  div.innerHTML = `
  <div class=${styles.icon}>${iconDomStr}</div>
  <div>${content}</div>
  `;

  // 处理样式
  div.classList.add(styles.message); // 不同类型信息的统一样式
  div.classList.add(styles["message-" + type]); // 指定类型信息的背景色

  // 插入到容器中
  container.appendChild(div);
  // reflow
  div.clientHeight;

  // 过渡 上升，显示
  div.style.transform = `translate(-50%, -50%) translateY(0)`;
  div.style.opacity = 1;

  // 停留一段时间 duration
  setTimeout(() => {
    // 上升，消失
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
    div.style.opacity = 0;
    div.addEventListener("transitionend", function () {
      div.remove(); // 消息移除
      cb(); // 执行回调函数
    }, {
      once: true,
    });
  }, duration);
}

export default showMessage;