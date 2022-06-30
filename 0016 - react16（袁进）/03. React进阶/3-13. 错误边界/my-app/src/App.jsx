import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default class App extends Component {
  render() {
    return (
      <ul>
        <li>App</li>
        <Child1 />
        <Child2 />
      </ul>
    );
  }
}
