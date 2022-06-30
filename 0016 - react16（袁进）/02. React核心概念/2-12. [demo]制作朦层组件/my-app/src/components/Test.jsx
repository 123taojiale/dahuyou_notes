import React, { Component } from "react";
import Modal from "./common/Modal"

export default class Test extends Component {
  state = {
    isModalVisible: false,
  };

  showModal = () => {
    this.setState(() => ({ isModalVisible: true }));
  };

  hideModal = () => {
    this.setState(() => ({ isModalVisible: false }));
  };

  render() {
    return (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          necessitatibus illum consequatur voluptatibus provident. Voluptatem
          iste, veniam veritatis deleniti sint natus temporibus praesentium vero
          repellendus similique odit dolorum sapiente corrupti.
        </p>
        <p>
          <button onClick={this.showModal}>显示隐藏</button>
        </p>
        {/* 根据 isModalVisible 的值，选择是否渲染 Modal */}
        {this.state.isModalVisible ? (
          <Modal onClose={this.hideModal} style={{background: "#aaa", padding: "0 2em"}}>
            <h1>title</h1>
            <p>
              <i>Lorem ipsum dolor sit amet consectetur adipisicing.</i>
            </p>
            <p>
              <button onClick={this.hideModal}>close</button>
            </p>
          </Modal>
        ) : null}
      </>
    );
  }
}
