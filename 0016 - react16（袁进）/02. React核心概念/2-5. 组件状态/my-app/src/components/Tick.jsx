import React, { Component } from "react";

export default class Tick extends Component {
  state = {
    left: this.props.num,
  };

  constructor(props) {
    super(props);
    this.timer = setInterval(() => {
      if (this.state.left === 0) {
        clearInterval(this.timer);
        return;
      }
      this.setState({
        left: this.state.left - 1
      })
    }, 1000);
  }
  render() {
    return <h1>倒计时剩余时间：{this.state.left}</h1>;
  }
}
