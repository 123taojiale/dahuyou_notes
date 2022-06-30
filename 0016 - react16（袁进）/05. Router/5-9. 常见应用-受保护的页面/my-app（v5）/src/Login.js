import React from "react";
import loginInfo from "./loginInfo";
// import qs from "query-string";

export default function Login(props) {
  return (
    <div>
      <h1>登录授权页</h1>
      <p>该页面仅作测试，点击下方按钮即登录成功</p>
      <button
        onClick={() => {
          // 方式2：使用 state 来存储用户想要访问的鉴权页的 path 信息
          loginInfo.login();
          if (props.location.state) {
            props.history.push(props.location.state);
          } else {
            props.history.push("/");
          }
          // 方式1：直接将用户想要访问的鉴权页的 path 信息保存到 url 中
          // const query = qs.parse(props.location.search);
          // if (query.returnurl) {
          //   props.history.push(query.returnurl);
          // }
          // else {
          //   props.history.push("/");
          // }
        }}
      >
        登录
      </button>
    </div>
  );
}
