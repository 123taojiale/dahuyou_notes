import React, { Component } from "react";

export default class Test extends Component {
  state = {
    n: this.props.n,
  };
  handleClick = () => {
    this.setState((cur) => ({ n: cur.n + 1 }));
  };
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log(`getSnapshotBeforeUpdate 在组件完成更新之前调用
之前的属性：${prevProps.n}
之前的状态：${prevState.n}
必须要和 componentDidUpdate 联合使用
必须要有返回值，返回值将成为 componentDidUpdate 的第三个参数`);
    return 123;
  };
  componentDidUpdate(prevProps, prevState, snap) {
    console.log(`componentDidUpdate 在组件完成更新之后调用
之前的属性：${prevProps.n}
之前的状态：${prevState.n}
接收到的 getSnapshotBeforeUpdate 的返回值：${snap}
`);
  }
  render() {
    console.log("render");
    return (
      <>
        <p>状态：{this.state.n}</p>
        <button onClick={this.handleClick}>state.n + 1</button>
        <p>属性：{this.props.n}</p>
        <button onClick={this.props.handleClick}>state.n + 1</button>
      </>
    );
  }
}
