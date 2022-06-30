import React, { Component } from 'react'
import "./index.css"

export default class Modal extends Component {
  render() {
    return (
      <>
        <div className='modal'></div>
        <div className="modal-content">
          {this.props.children}
        </div>
      </>
    )
  }
}
