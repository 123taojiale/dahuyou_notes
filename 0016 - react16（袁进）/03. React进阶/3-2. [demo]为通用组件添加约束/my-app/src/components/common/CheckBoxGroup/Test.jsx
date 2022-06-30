import React, { Component } from "react";
import CheckBoxGroup from "./index";
import getAllStudents from "../../../services/students";

export default class Test extends Component {
  state = {
    datas: [],
    selectedStu: [],
  };

  async componentDidMount() {
    const resp = await getAllStudents();
    this.setState(() => ({
      datas: resp.map((it) => ({ value: it.id.toString(), text: it.name })),
    }));
  }

  handleChange = (newArr) => {
    console.log('最新选中的项：', newArr);
    this.setState(() => ({ selectedStu: newArr }));
  };

  render() {
    return (
      <CheckBoxGroup
        name={"stuNames"}
        {...this.state}
        onChange={this.handleChange}
      />
    );
  }
}
