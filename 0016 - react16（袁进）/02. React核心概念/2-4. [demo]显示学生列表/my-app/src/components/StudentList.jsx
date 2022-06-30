import React, { Component } from "react";
import StudentItem from "./StudentItem";

export default class StudentList extends Component {
  render() {
    const list = this.props.stus.map((item) => (
      <StudentItem key={item.id} {...item} />
    ));
    return <ul>{list}</ul>;
  }
}
