import React, { Component } from "react";
import commonTypes from "../../../utils/commonTypes";
import PropTypes from "prop-types";
import "./index.css";

export default class index extends Component {

  static defaultProps = {}

  static propTypes = {
    children: commonTypes.children,
    onClose: PropTypes.func,
    style: PropTypes.object,
  }

  render() {
    return (
      <>
        <div className="modal-bg" onClick={this.props.onClose}></div>
        <div
          className="modal-content"
          style={this.props.style}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}
