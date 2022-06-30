import React, { Component } from "react";
import { Provider } from "./formContext";
import PropTypes from "prop-types";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

export default class Form extends Component {
  state = {
    formData: {}, // 表单数据
    changeFormData: (type, newValue) => {
      this.setState((cur) => {
        cur.formData[type] = newValue;
        return cur;
      });
    },
    submit: () => {
      this.props.onSubmit && this.props.onSubmit(this.state.formData);
    }
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

Form.Input = FormInput;
Form.Button = FormButton;