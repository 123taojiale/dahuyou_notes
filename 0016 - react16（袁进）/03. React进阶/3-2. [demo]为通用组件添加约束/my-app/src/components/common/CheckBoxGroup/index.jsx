import React, { Component } from "react";
import commonTypes from "../../../utils/commonTypes";
import PropTypes from "prop-types";

/**
 * 一组复选框
 */
export default class CheckBoxGroup extends Component {
  static defaultProps = {
    datas: [],
    name: "checkbox",
  };

  static propTypes = {
    name: PropTypes.string,
    selectedStu: PropTypes.arrayOf(PropTypes.string),
    datas: commonTypes.groupDatas.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  // checkbox 选中逻辑
  handleChange = (e) => {
    const val = e.target.value;
    if (e.target.checked)
      this.setState(
        (cur) => ({ selectedStu: [...this.props.selectedStu, val] }),
        this.emitOnChange(e)
      );
    else
      this.setState(
        (cur) => ({
          selectedStu: this.props.selectedStu.filter((it) => it !== val),
        }),
        this.emitOnChange(e)
      );
  };

  emitOnChange = (e) => {
    return () => {
      this.props.onChange &&
        this.props.onChange(this.state.selectedStu, this.props.name, e);
    };
  };

  // 依据传入的 datas 获取一组复选框
  getCheckBoxGroup = () => {
    return this.props.datas.map((it) => (
      <label key={it.value}>
        <input
          type="checkbox"
          name={this.props.name}
          value={it.value}
          onChange={this.handleChange}
        />
        {it.text}
      </label>
    ));
  };

  render() {
    const bs = this.getCheckBoxGroup() || null;
    return (
      <>
        {bs}
      </>
    );
  }
}
