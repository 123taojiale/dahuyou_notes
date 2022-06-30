import React, { PureComponent } from "react";

export default function withMouseListener(Comp) {
  return class MovableListener extends PureComponent {
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
          <Comp x={this.state.x} y={this.state.y} {...this.props} />
        </div>
      );
    }
  }
}
