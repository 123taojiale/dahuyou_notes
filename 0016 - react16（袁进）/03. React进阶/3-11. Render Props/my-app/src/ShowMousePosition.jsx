import React, { PureComponent } from "react";

export default class showMousePosition extends PureComponent {
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
        <div>
          横坐标：{Math.round(this.state.x)}，纵坐标：{Math.round(this.state.y)}
        </div>
      </div>
    );
  }
}
