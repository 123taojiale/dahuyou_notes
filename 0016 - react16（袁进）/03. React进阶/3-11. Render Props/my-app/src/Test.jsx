import React, { PureComponent } from "react";
import withMouseListener from "./withMouseListener";

let MovablePanel = (props) => (
  <div
    style={{
      width: 100,
      height: 100,
      backgroundColor: "lightcoral",
      position: "absolute",
      left: props.x,
      top: props.y,
    }}
  ></div>
);

let ShowMousePosition = (props) => (
  <div>
    横坐标：{Math.round(props.x)}，纵坐标：{Math.round(props.y)}
  </div>
);

MovablePanel = withMouseListener(MovablePanel);
ShowMousePosition = withMouseListener(ShowMousePosition);

export default class Test extends PureComponent {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>MovablePanel</h2>
        <MovablePanel />
        <h2 style={{ textAlign: "center" }}>ShowMousePosition</h2>
        <ShowMousePosition />
      </div>
    );
  }
}
