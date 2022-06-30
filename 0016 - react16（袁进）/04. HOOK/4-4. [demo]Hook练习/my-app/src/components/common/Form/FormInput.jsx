import React, { Component } from "react";
import PropTypes from "prop-types";
import ctx from "./formContext";

export default class FormInput extends Component {
  static contextType = ctx;

  static defaultProps = {
    type: "text",
  };

  static propTypes = {
    type: PropTypes.string,
    PropName: PropTypes.string,
  };

  render() {
    return (
      <>
        <input
          type={this.props.type}
          value={this.context.formData[this.props.PropName]}
          onChange={(e) => {
            this.context.changeFormData(this.props.PropName, e.target.value);
          }}
        />
      </>
    );
  }
}
