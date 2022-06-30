import React, { Component } from "react";

export default class A extends Component {
  render() {
    return (
      <>
        <h1 ref={this.props.ref1}>A</h1>
        <p>{this.props.msg ? this.props.msg : "A component。。。"}</p>
      </>
    );
  }
}
