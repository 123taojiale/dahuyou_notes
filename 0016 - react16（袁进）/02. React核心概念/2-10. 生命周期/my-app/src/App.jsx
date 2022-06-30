import React, { Component } from "react";
import Test from "./Test";

export default class App extends Component {
  state = {
    n: 1,
  };
  handleClick = () => {
    this.setState((cur) => ({ n: cur.n + 1 }));
  };
  render() {
    return (
      <>
        <Test n={this.state.n} handleClick={this.handleClick} />
      </>
    );
  }
}
