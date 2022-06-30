import React, { Component } from "react";
import StudentItem from "./StudentItem";

export default class StudentList extends Component {
  render() {
    const list = this.props.datas.map((it) => (
      <StudentItem key={it.sNo} {...it} />
    ));
    return <>{list}</>;
  }
}
