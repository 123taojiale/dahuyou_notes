import React, { Component } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export default class TaskContainer extends Component {
  state = {
    tasks: [], // 任务列表数据
  };

  componentDidMount() {
    const tasks = [];
    for (let i = 1; i <= 10; i++) {
      tasks.push({
        name: `任务${i}`,
        isFinish: Math.random() - 0.5 > 0,
      });
    }
    this.setState({
      tasks,
    });
  }

  handleAdd = (newTask) => {
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  }

  render() {
    console.log(
      "TaskContainer render tasks length => ",
      this.state.tasks.length
    );
    return (
      <>
        <AddTask
          onAdd={this.handleAdd}
        />
        <TaskList tasks={this.state.tasks} />
      </>
    );
  }
}
