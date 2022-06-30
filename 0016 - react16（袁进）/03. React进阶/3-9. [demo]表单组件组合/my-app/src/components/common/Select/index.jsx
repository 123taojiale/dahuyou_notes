import React, { Component } from "react";
import commonTypes from "../../../utils/commonTypes";
import PropTypes from "prop-types";
import withDataGroup from "../hoc/withDataGroup";

class Option extends Component {
  static propTypes = {
    data: commonTypes.singleData.isRequired,
  };

  render() {
    return (
      <option value={this.props.data.value}>{this.props.data.text}</option>
    );
  }
}

const OptionGroup = withDataGroup(Option);

export default class Select extends Component {
  static defaultProps = {
    name: "select",
  };

  static propTypes = {
    name: PropTypes.string,
    selectedStu: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <select
          name={this.props.name}
          value={this.props.selectedStu}
          onChange={(e) => {
            this.props.onChange(e.target.value);
          }}
        >
          <OptionGroup {...this.props} />
        </select>
      </>
    );
  }
}
