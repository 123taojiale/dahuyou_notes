import React, { Component } from "react";
import commonTypes from "../../../utils/commonTypes";
import PropTypes from "prop-types";
import withDataGroup from "../hoc/withDataGroup";

/**
 * 单个 checkbox
 */
class Check extends Component {
  static defaultProps = {
    name: "checkbox",
  };

  static propTypes = {
    name: PropTypes.string,
    data: commonTypes.singleData.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  // checkbox 选中逻辑
  handleChange = (e) => {
    const isChecked = e.target.checked,
      val = e.target.value; // => this.props.data.value
    if (isChecked) {
      // 选中 - 新增
      this.props.onChange(val, "add");
    } else {
      // 取消选中 - 移除
      this.props.onChange(val, "remove");
    }
  };

  render() {
    return (
      <>
        <label>
          <input
            type="checkbox"
            name={this.props.name}
            value={this.props.data.value}
            onChange={this.handleChange}
          />
          {this.props.data.text}
        </label>
      </>
    );
  }
}

export default withDataGroup(Check);
