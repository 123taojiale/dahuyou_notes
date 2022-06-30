import React, { Component } from "react";

export default class Test extends Component {
  state = {
    txt: null,
    show: true,
  };

  getRef = (el) => {
    console.log("函数运行了 el => ", el);
    this.state.txt = el;
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <>
        {this.state.show && <input type="text" ref={this.getRef} />}
        <button
          onClick={() => {
            this.state.txt.focus();
            this.setState({}); // 重新渲染
          }}
        >
          聚焦
        </button>
        <button
          onClick={() => {
            this.setState((cur) => ({
              show: !cur.show,
            }));
          }}
        >
          显示/隐藏
        </button>
      </>
    );
  }
}
