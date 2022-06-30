import Icon from "@/components/Icon";
import getComponentRootDom from "./getComponentRootDom.js";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息的内容
 * @param {String} type 消息的类型 correct（正确消息）、warn（警告消息）、error（错误消息）、info（正常消息）
 * @param {HTMLElement} container 消息的容器
 * @param {Number} duration 消息的持续时间
 * @param {Function} cb 消息显示结束后的回调
 */
function showMessage(options) {
  const content = options.content || "未指定消息的内容",
    type = options.type || "info", // 默认为普通消息
    container = options.container || document.body, // 消息容器默认为 body
    duration = options.duration || 500, // 消息的持续时间默认为 500ms
    cb = options.cb || function () {}; // 消息弹出后的回调函数 函数体默认为空

  // 获取 dom
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, {
    type,
  });
  const iconDomStr = iconDom.outerHTML;

  // 处理内容
  div.innerHTML = `
    <div class=${styles.icon}>${iconDomStr}</div>
    <div>${content}</div>
    `;

  // 处理样式
  div.classList.add(styles.message);
  div.classList.add(styles["message-" + type]);

  // 插入到容器中
  container.appendChild(div);

  // reflow
  div.clientHeight;

  // 上浮
  div.style.transform = "translate(-50%, -50%) translateY(0px)";
  div.style.opacity = 1;

  setTimeout(() => {
    // 消失
    div.style.transform = "translate(-50%, -50%) translateY(-25px)";
    div.style.opacity = 0;
    div.addEventListener("transitionend", function () {
      cb();
    }, {
      once: true,
    });
  }, duration);
}

export default showMessage;