import React, { Component } from "react";
import RadioBoxGroup from "./index";
import getAllStudents from "../../../services/students";

export default class Test extends Component {
  state = {
    datas: [],
    selectedStu: "", // 选中的学生
  };

  async componentDidMount() {
    const resp = await getAllStudents();
    // console.log("resp => ", resp.map(it => it.name));
    this.setState(() => ({
      datas: resp.map((it) => ({value: it.id.toString(), text: it.name})),
    }));
  }

  handleChange = (selectedStu) => {
    console.log("最新选中的学生：", selectedStu);
    this.setState(() => ({ selectedStu }));
  };

  render() {
    return (
      <>
        <RadioBoxGroup
          name="stu"
          onChange={this.handleChange}
          {...this.state}
        />
      </>
    );
  }
}
