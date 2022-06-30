import React, { PureComponent } from "react";

export default class MovablePanel extends PureComponent {
  state = {
    x: 0,
    y: 0,
  };
  refContainer = React.createRef();
  handleMouseMove = (e) => {
    const { left, top } = this.refContainer.current.getBoundingClientRect(),
      x = e.clientX - left,
      y = e.clientY - top;
    this.setState({
      x,
      y,
    });
  };
  render() {
    return (
      <div
        ref={this.refContainer}
        className="moveContainer"
        onMouseMove={this.handleMouseMove}
      >
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightcoral',
            position: 'absolute',
            left: this.state.x,
            top: this.state.y,
          }}
        ></div>
      </div>
    );
  }
}
