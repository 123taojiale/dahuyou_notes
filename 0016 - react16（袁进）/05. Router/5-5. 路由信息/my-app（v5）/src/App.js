import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

const AWrapper = withRouter(A);

function News(props) {
  return (
    <div>
      <h1>新闻列表</h1>
      <p>
        A 无法获取到 Router 组件所提供的上下文中的内容：
        <A />
      </p>
      <p>
        方法1：使用高阶组件 withRouter 来处理：<AWrapper />
      </p>
      <p>
        方法2：将 props 一层一层传递：<A {...props} />
      </p>
    </div>
  );
}

function A(props) {
  console.log("A props => ", props);
  return (
    <button
      onClick={() => {
        props.history.push("/");
      }}
    >
      点击返回
    </button>
  );
}

function Index() {
  return <h1>首页</h1>;
}

function NotFound() {
  return <h1>找不到页面</h1>;
}
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/news" component={News} />
        <Route path="/" exact component={Index} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
