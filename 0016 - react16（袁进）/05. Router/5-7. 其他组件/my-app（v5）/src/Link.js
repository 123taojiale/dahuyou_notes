/* eslint {"jsx-a11y/anchor-is-valid":"off", "no-script-url":"off"} */
import React from "react";
import { withRouter } from "react-router-dom";

// 仿写一个 Link
function Link(props) {
  // 注意：props 中有一些成员不适合丢给 a 元素，如果直接将 props 展开 {...props}，会报错
  return (
    // 方式1
    <a
      href={props.to}
      onClick={(e) => {
        e.preventDefault();
        props.history.push(props.to);
      }}
    >
      {props.children}
    </a>
    // 使用下面这种「方式2」也可以阻止 a 元素的默认行为（跳转并刷新页面）
    // 相较前者，这么写的缺点在于：浏览器中查看元素结构时，方式1：href="/a"，方式2：href="javascript:;" 前者可以更直观地看出目标路由
    // 方式2
    // <a href="javascript:;" onClick={() => { props.history.push(props.to) }} >{ props.children }</a>
  );
}

// 使用高阶组件 withRouter 处理，确保该 Link 也能获取到 Router 提供的上下文中的内容
export default withRouter(Link);
