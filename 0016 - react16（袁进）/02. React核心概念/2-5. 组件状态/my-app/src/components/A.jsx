import React, { Component } from "react";

export default class A extends Component {
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
        left: this.state.left - 1,
      });
    }, 1000);
  }

  render() {
    return <B n={this.state.left} />;
  }
}

function B(props) {
  return (
    <div>
      组件B：{props.n}
      <C n={props.n} />
    </div>
  );
}

function C(props) {
  return <div>组件C：{props.n}</div>;
}
