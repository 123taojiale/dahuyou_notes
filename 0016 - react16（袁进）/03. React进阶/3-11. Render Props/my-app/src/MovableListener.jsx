import PropTypes from "prop-types";
import React, { PureComponent } from "react";

export default class MovableListener extends PureComponent {
  state = {
    x: 0,
    y: 0,
  };

  static propTypes = {
    render: PropTypes.func.isRequired,
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
        {this.props.render(this.state)}
      </div>
    );
  }
}
