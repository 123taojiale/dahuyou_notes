import React, { Component } from "react";
import StudentList from "./index";
import findStuByPage from "../../../services/findStuByPage";

export default class Test extends Component {
  state = {
    datas: [], // 存放学生信息
  };

  async findStuByPage() {
    // const resp = await findStuByPage(this.props.page, this.props.size);
    const resp = await findStuByPage(1, 2);
    this.setState(() => ({ datas: resp.findByPage }));
  }

  componentDidMount() {
    this.findStuByPage();
  }

  render() {
    return (
      <>
        <StudentList datas={this.state.datas} />
      </>
    );
  }
}
