import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
// import Link from "./Link"

function PageA() {
  return <h1>A页</h1>;
}

function PageB() {
  return <h1>B页</h1>;
}

function NavBar() {
  return (
    <div>
      <NavLink
        activeClassName="selected"
        exact
        strict
        activeStyle={{
          background: "#ccc",
        }}
        innerRef={(node) => {
          console.log(node);
        }}
        to="/a"
        style={{ marginRight: 20 }}
      >
        去a页
      </NavLink>
      <NavLink
        activeClassName="selected"
        activeStyle={{
          background: "#ccc",
        }}
        replace
        to={{
          pathname: "/b",
          hash: "#abc",
          search: "?a=1&b=2",
        }}
      >
        去b页
      </NavLink>

      <NavLink to="/abc" style={{ marginLeft: 20 }}>
        其他页
      </NavLink>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/a" component={PageA} />
        <Route path="/b" component={PageB} />
        {/*
        Redirect 重定向组件，若之前的组件都没匹配上，执行到该组件时，重定向到 to
        注意：from 匹配到的 :id 会传递给 to 的 :id 要求占位的变量名相同 */}
        <Redirect from="/abc/:id" to="/a/:id" />
      </Switch>
    </Router>
  );
}
