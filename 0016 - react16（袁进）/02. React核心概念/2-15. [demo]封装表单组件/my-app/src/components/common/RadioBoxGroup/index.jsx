import React, { Component } from "react";

export default class RadioBoxGroup extends Component {
  handleChange = (e) => {
    // console.log("选中：", e.target.value);
    let selectedStu = e.target.value;
    this.props.onChange && this.props.onChange(selectedStu, this.props.name, e);
  };

  // 依据 props.datas 获取单选框组的 jsx 表达式
  getRadioGroup = () => {
    return this.props.datas.map((it, i) => (
      <label key={i}>
        <input
          type="radio"
          name={this.props.name}
          value={it.value}
          checked={this.props.selectedStu === it.value}
          onChange={this.handleChange}
        />
        {it.text}
      </label>
    ));
  };

  render() {
    // console.log("render", this.props);
    const rs = this.getRadioGroup();
    return (
      <>
        <h1>RadioBoxGroup</h1>
        {rs}
      </>
    );
  }
}
