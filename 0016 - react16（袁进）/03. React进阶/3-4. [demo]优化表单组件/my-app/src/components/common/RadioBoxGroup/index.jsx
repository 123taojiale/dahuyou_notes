import React, { Component } from "react";
import commonTypes from "../../../utils/commonTypes";
import PropTypes from "prop-types";
import withDataGroup from "../hoc/withDataGroup";

class Radio extends Component {
  static defaultProps = {
    name: "radio",
  };

  static propTypes = {
    name: PropTypes.string,
    selectedStu: PropTypes.string.isRequired, // 选中项
    data: commonTypes.singleData.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <label>
          <input
            type="radio"
            name={this.props.name}
            value={this.props.data.value}
            checked={this.props.selectedStu === this.props.data.value}
            onChange={(e) => {
              this.props.onChange(e.target.value);
            }}
          />
          {this.props.data.text}
        </label>
      </>
    );
  }
}

export default withDataGroup(Radio);
