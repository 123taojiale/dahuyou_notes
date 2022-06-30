import React, { Component } from "react";

export default class StudentItem extends Component {
  render() {
    return (
      <>
        <li>【姓名】{this.props.name}</li>
        <li>【性别】{+this.props.sex === 0 ? "男" : "女"}</li>
        <li>【邮箱】{this.props.email}</li>
        <hr />
      </>
    );
  }
}
