import React, { Component } from "react";
import CheckBoxGroup from "./index";
import getAllStudents from "../../../services/students";

export default class Test extends Component {
  state = {
    datas: [],
    selectedDatas: [],
  };

  async componentDidMount() {
    const resp = await getAllStudents();
    this.setState(() => ({
      datas: resp.map((it) => ({ value: it.id, text: it.name })),
    }));
  }

  handleChange = (newArr) => {
    console.log('最新选中的项：', newArr);
    this.setState(() => ({ selectedDatas: newArr }));
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
