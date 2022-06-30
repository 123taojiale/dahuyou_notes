import React, { Component } from "react";
import Modal from "./index";

export default class Test extends Component {
  state = {
    isModalVisible: false,
  };

  render() {
    return (
      <>
        {this.state.isModalVisible ? <Modal> Modal Content... </Modal> : null}
        <button
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 2,
          }}
          onClick={() => {
            this.setState((cur) => ({ isModalVisible: !cur.isModalVisible }));
          }}
        >
          show
        </button>
      </>
    );
  }
}
