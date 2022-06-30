import React, { Component } from "react";
import "../style/Ball.css";

export default class Ball extends Component {
  state = {
    left: this.props.left, // 横坐标
    top: this.props.top, // 纵坐标
    xSpeed: this.props.xSpeed, // 横向速度（单位 px/s）
    ySpeed: this.props.ySpeed, // 纵向速度
    bg: this.props.bg, // 背景色
  };

  constructor(props) {
    super(props);

    const duration = 16, // 每次移动的时间间隔（单位 ms）
      cWidth = document.documentElement.clientWidth, // 容器宽度
      cHeight = document.documentElement.clientHeight; // 容器高度

    setInterval(() => {
      const s = this.state,
        xDis = (s.xSpeed / 1000) * duration, // 横向移动距离
        yDis = (s.ySpeed / 1000) * duration; // 纵向移动距离
      let newLeft = s.left + xDis,
        newTop = s.top + yDis;

      // 即将越过左侧
      if (newLeft <= 0) {
        newLeft = 0;
        s.xSpeed *= -1;
      }
      // 即将越过右侧
      if (newLeft >= cWidth - 100) {
        newLeft = cWidth - 100;
        s.xSpeed *= -1;
      }
      // 即将越过顶部
      if (newTop <= 0) {
        newTop = 0;
        s.ySpeed *= -1;
      }
      // 即将越过底部
      if (newTop >= cHeight - 100) {
        newTop = cHeight - 100;
        s.ySpeed *= -1;
      }

      this.setState({
        left: newLeft,
        top: newTop,
      });
    }, duration);
  }
  render() {
    return (
      <div
        className="ball"
        style={{
          left: this.state.left + "px",
          top: this.state.top + "px",
          background: this.state.bg,
        }}
      ></div>
    );
  }
}
