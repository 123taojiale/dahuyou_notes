import React, { Component } from "react";

export default class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.num,
    };
    this.timer = setInterval(() => {
      if (this.state.num === 0) {
        clearInterval(this.timer);
        this.props.onOver();
        return;
      }
      this.setState({
        num: this.state.num - 1,
      });
    }, 1000);
  }
  render() {
    return <div>倒计时剩余时间：{this.state.num}</div>;
  }
}
