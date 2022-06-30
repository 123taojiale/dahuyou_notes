import React, { PureComponent } from "react";
import Child3 from "./Child3";
import ErrorBound from "./ErrorBound";

export default class Child1 extends PureComponent {
  render() {
    return (
      <ul>
        <li>Child1</li>
        <ErrorBound>
          <Child3 />
        </ErrorBound>
      </ul>
    );
  }
}
