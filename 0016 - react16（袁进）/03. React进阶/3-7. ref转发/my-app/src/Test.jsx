import React, { Component } from "react";
import A from "./A";
import withLog from "./HOC/withLog";
const AComp = withLog(A);

export default class Test extends Component {
  ARef = React.createRef();

  componentDidMount() {
    console.log("this.ARef => ", this.ARef);
  }

  render() {
    return (
      <>
        <AComp ref={this.ARef} msg="传递给 A 的内容" />
      </>
    );
  }
}
