import React, { Component } from "react";
import Tick from "./Tick";

export default class TickControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOver: false, // 倒计时是否结束
    };
  }

  handleOver() {
    this.setState({
      isOver: true,
    });
  }

  render() {
    return (
      <div>
        <Tick num={3} onOver={this.handleOver.bind(this)}></Tick>
        <h2>{this.state.isOver ? "倒计时已结束" : "正在倒计时"}</h2>
      </div>
    );
  }
}
