import React, { Component } from "react";
import getRandom from "../utils/getRandom";
import Ball from "./Ball";

// 每间隔一定时间，在页面上随机生成一个运动的小球
export default class BallList extends Component {
  state = {
    // 存放每一个小球的相关属性
    ballInfos: [
      // {
      // left: 0, // 横坐标
      // top: 0, // 纵坐标
      // xSpeed: 0, // 横向速度（单位 px/s）
      // ySpeed: 0, // 纵向速度
      // },
    ],
  };
  constructor(props) {
    super(props);

    const duration = 300, // 间隔的时长（ms）
      cWidth = document.documentElement.clientWidth, // 容器宽度
      cHeight = document.documentElement.clientHeight; // 容器高度
    this.timer = setInterval(() => {
      if(this.state.ballInfos.length === 10) clearInterval(this.timer)
      const newBallInfo = {
        left: getRandom(0, cWidth - 100), // 横坐标
        top: getRandom(0, cHeight - 100), // 纵坐标
        xSpeed: getRandom(0, 6666), // 横向速度（单位 px/s）
        ySpeed: getRandom(0, 6666), // 纵向速度
        bg: `rgba(
          ${getRandom(0, 255)},
          ${getRandom(0, 255)},
          ${getRandom(0, 255)},
          ${Math.random()})`,
      };
      this.state.ballInfos.push(newBallInfo);
      this.setState({
        ballInfos: [...this.state.ballInfos],
      });
    }, duration);
  }
  render() {
    return this.state.ballInfos.map((item, i) => <Ball key={i} {...item} />);
  }
}
