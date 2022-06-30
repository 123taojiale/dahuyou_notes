import React, { Component } from "react";

export default class RadioBoxGroup extends Component {
  handleChange = (e) => {
    // console.log("选中：", e.target.value);
    let selectedStu = e.target.value;
    this.props.onChange && this.props.onChange(selectedStu, this.props.name, e);
  };

  // 依据 props.datas 获取下拉列表的 jsx 表达式
  getSelectOptions = () => {
    return this.props.datas.map((it, i) => (
      <option key={i} value={it.value}>{it.text}</option>
    ));
  };

  render() {
    // console.log("render", this.props);
    const ops = this.getSelectOptions();
    return (
      <>
        <select
          name={this.props.name}
          value={this.props.selectedStu}
          onChange={this.handleChange}
        >
          {ops}
        </select>
      </>
    );
  }
}
