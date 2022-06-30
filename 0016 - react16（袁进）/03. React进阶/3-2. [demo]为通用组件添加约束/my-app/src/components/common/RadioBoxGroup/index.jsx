import React, { Component } from "react";
import commonTypes from "../../../utils/commonTypes";
import PropTypes from "prop-types";

export default class RadioBoxGroup extends Component {
  static defaultProps = {
    datas: [],
    name: "radio",
  };

  static propTypes = {
    name: PropTypes.string,
    selectedStu: PropTypes.string,
    datas: commonTypes.groupDatas.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
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
        {rs}
      </>
    );
  }
}
