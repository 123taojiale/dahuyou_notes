import React, { Component } from "react";

class Comp1 extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log("4. Comp1 constructor");
  }
  static getDerivedStateFromProps() {
    console.log("5. Comp1 getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Comp1 componentDidMount");
  }
  render() {
    console.log("6. Comp1 render");
    return <h1>Comp1</h1>;
  }
}

export default class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log("1. App constructor");
  }
  static getDerivedStateFromProps() {
    console.log("2. App getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("App componentDidMount");
  }
  render() {
    console.log("3. App render");
    return (
      <div>
        <Comp1 />
      </div>
    );
  }
}
