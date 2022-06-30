import React, { Component } from "react";

export default class MyClassComp extends Component {
  render() {
    if (this.props.user) {
      this.props.user.name = "xiaohuyou";
      this.props.user.gender = "男";
      return (
        <>
          <div>姓名：{this.props.user.name}</div>
          <div>年龄：{this.props.user.age}</div>
          <div>性别：{this.props.user.gender}</div>
        </>
      );
    }
    return <div>MyClassComp</div>;
  }
}
