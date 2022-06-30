import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class AddTask extends PureComponent {
  state = {
    val: "",
  };

  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  render() {
    console.log("AddTask render");
    return (
      <>
        <input
          type="text"
          value={this.state.val}
          onChange={(e) => {
            this.setState({
              val: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            this.props.onAdd &&
              this.props.onAdd({
                name: this.state.val,
                isFinish: false,
              });
            this.setState({ val: "" }); // 清空输入框
          }}
        >
          添加任务
        </button>
      </>
    );
  }
}
