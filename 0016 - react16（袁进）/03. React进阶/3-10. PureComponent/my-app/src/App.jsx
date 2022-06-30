import React, { Component } from "react";
import TaskContainer from "./TaskContainer";

export default class App extends Component {
  render() {
    console.log('App render');
    return (
      <>
        <TaskContainer />
      </>
    );
  }
}
