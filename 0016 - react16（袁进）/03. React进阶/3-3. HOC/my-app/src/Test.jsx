import React, { Component } from "react";

export class A extends Component {
  render() {
    return <p>A Component - props.a is {this.props.a}</p>;
  }
}

export class B extends Component {
  render() {
    return <p>B Component - props.b is {this.props.b}</p>;
  }
}
