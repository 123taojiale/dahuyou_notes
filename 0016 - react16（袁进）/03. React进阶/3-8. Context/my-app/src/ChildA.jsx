import React, { Component } from "react";
import ChildA1 from "./ChildA1";
import ChildA2 from "./ChildA2";

export default class ChildA extends Component {
  render() {
    return (
      <>
        <div>ChildA</div>
        <ul>
          <li>
            <ChildA1 />
          </li>
          <li>
            <ChildA2 />
          </li>
        </ul>
      </>
    );
  }
}