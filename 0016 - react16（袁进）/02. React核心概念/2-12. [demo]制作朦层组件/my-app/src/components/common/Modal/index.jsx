import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  constructor(props) {
    super(props);
    const defaultOpts = {};
    this.opts = Object.assign({}, defaultOpts, this.props);
    console.log(this.opts);
  }

  render() {
    return (
      <>
        <div className="modal-bg" onClick={this.props.onClose}></div>
        <div
          className="modal-content"
          style={this.opts.style}
        >
          {this.opts.children}
        </div>
      </>
    );
  }
}
