import React, { Component } from "react";

export default class Test extends Component {
  render() {
    return (
      <>
        <p>
          this.props.children: {this.props.children || <span>default content</span>}
        </p>
      </>
    );
  }
}
