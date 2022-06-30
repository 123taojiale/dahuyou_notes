import React, { Component } from "react";
import PropTypes from "prop-types";
import taskType from "./taskType";
import Task from "./Task";

// 任务列表
export default class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape(taskType)).isRequired,
  };

  render() {
    console.log('TaskList render');
    const ts = this.props.tasks.map((it, i) => <Task key={i} {...it} />);
    return <>{ts}</>;
  }
}
