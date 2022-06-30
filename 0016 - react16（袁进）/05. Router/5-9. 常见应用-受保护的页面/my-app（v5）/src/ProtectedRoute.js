import React from "react";
import { Route, Redirect } from "react-router-dom";
import loginInfo from "./loginInfo";

export default function ProtectedRoute({
  component: Component,
  children,
  render,
  ...rest // 剩余和渲染无关的属性
}) {
  return (
    <Route
      {...rest}
      // 匹配 ProtectedRoute 组件后，由 render 的返回值来决定具体渲染啥
      render={(values) => {
        if (loginInfo.isLogin) {// 用户已登录，可以正常展示页面
          return <Component />;
        } else {
          // 方式1：直接将用户想要访问的鉴权页的 path 信息保存到 url 中
          // return <Redirect to={{
          //   pathname: "/login",
          //   search: "?returnurl=" + values.location.pathname
          // }} />

          return (
            <Redirect
              to={{
                pathname: "/login",
                // 方式2：使用 state 来存储用户想要访问的鉴权页的 path 信息
                state: values.location.pathname,
              }}
            />
          );
        }
      }}
    />
  );
}
