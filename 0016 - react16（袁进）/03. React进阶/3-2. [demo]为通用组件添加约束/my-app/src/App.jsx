import React, { Component } from "react";
import ThreeLayout from "./components/common/ThreeLayout";
import CheckBoxGroup from "./components/common/CheckBoxGroup";
import Modal from "./components/common/Modal";
import RadioBoxGroup from "./components/common/RadioBoxGroup";
import Select from "./components/common/Select";
import getAllStudents from "./services/students";

export default class App extends Component {
  static defaultProps = {
    isModalVisible: false,
  };

  state = {
    datas: [],
    selectedStu: {
      select: "", // Select 下拉框选中的学生
      radio: "", // RadioBoxGroup 单选框选中的学生
      checkbox: [], // CheckBoxGroup 复选框选中的学生
    },
    isModalVisible: this.props.isModalVisible,
  };

  handleChange = (type = "", selected) => {
    // type 的可能取值：state.selectedStu 的 key
    this.setState((cur) => ({
      selectedStu: { ...cur.selectedStu, [type]: selected },
    }));
  };

  async componentDidMount() {
    const resp = await getAllStudents();
    this.setState(() => ({
      datas: resp.map((it) => ({ value: it.id.toString(), text: it.name })),
    }));
  }

  render() {
    return (
      <>
        <ThreeLayout
          leftHtml={
            <>
              <h2>leftHtml</h2>
              <button
                onClick={() => {
                  this.setState(() => ({ isModalVisible: true }));
                }}
              >
                show modal
              </button>
            </>
          }
          rightHtml={<h2>rightHtml</h2>}
        >
          <h1>主区域</h1>
          <hr />
          <h2>Select</h2>
          <Select
            onChange={(selected) => this.handleChange("select", selected)}
            datas={this.state.datas}
            selectedStu={this.state.selectedStu.select}
          />
          <hr />
          <h2>RadioBoxGroup</h2>
          <RadioBoxGroup
            onChange={(selected) => this.handleChange("radio", selected)}
            datas={this.state.datas}
            selectedStu={this.state.selectedStu.radio}
          />
          <hr />
          <h2>CheckBoxGroup</h2>
          <CheckBoxGroup
            onChange={(selected) => this.handleChange("checkbox", selected)}
            datas={this.state.datas}
            selectedStu={this.state.selectedStu.checkbox}
          />
        </ThreeLayout>
        {this.state.isModalVisible ? (
          <Modal
            style={{ background: "#fff", padding: "2em", borderRadius: "10px" }}
            onClose={() => {
              this.setState(() => ({ isModalVisible: false }));
            }}
          >
            Modal content...
          </Modal>
        ) : null}
      </>
    );
  }
}
