import React, { Component } from "react";
import StudentList from "../StudentList";
import findStuByPage from "../../../services/findStuByPage";
import Modal from "../Modal";
import Pager from "./index";

export default class Test extends Component {
  state = {
    isLoading: true,
    datas: [], // 存放学生信息
    total: 0,
    current: 1,
    size: 2,
    visibleNum: 5,
  };

  async findStuByPage() {
    this.setState(() => ({ isLoading: true }));
    const resp = await findStuByPage(this.state.current, this.state.size);
    this.setState(() => ({
      isLoading: false,
      datas: resp.findByPage,
      total: resp.cont,
    }));
  }

  componentDidMount() {
    this.findStuByPage();
  }

  handleChange = (newPage) => {
    this.setState(
      () => ({ current: newPage }),
      () => {
        this.findStuByPage();
      }
    );
  };

  render() {
    return (
      <>
        <StudentList datas={this.state.datas} />
        {this.state.isLoading ? (
          <div>
            <Modal> 加载中。。。 </Modal>
          </div>
        ) : (
          <>
            <div
              style={{
                height: "100px",
              }}
            >
              <Pager
                total={this.state.total}
                current={this.state.current}
                size={this.state.size}
                visibleNum={this.state.visibleNum}
                onChange={this.handleChange}
              />
            </div>
          </>
        )}
      </>
    );
  }
}
