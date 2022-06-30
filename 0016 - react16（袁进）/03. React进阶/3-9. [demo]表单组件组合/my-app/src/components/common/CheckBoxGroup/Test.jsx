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

  handleChange = (val, op) => {
    if (op === "add") this.setState({ selectedStu: [...this.state.selectedStu, val] });
    else if (op === "remove") this.setState({ selectedStu: this.state.selectedStu.filter(it !== val) });
    console.log(op, val);
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
