import React, { Component } from "react";
import PropTypes from "prop-types";
import commonTypes from "../../../utils/commonTypes";
import "./index.css";

export default class index extends Component {
  static defaultProps = {
    leftWidth: 200,
    rihgtWidth: 200,
    minWidth: 800, // 容器的最小宽度值
    gap: 20, // 主区域与侧边栏之间的间隙
    // 侧边栏内容 - 有父组件传递
    leftHtml: null,
    rightHtml: null,
  };

  static propTypes = {
    leftWidth: PropTypes.number,
    rihgtWidth: PropTypes.number,
    minWidth: PropTypes.number,
    gap: PropTypes.number,
    leftHtml: PropTypes.node,
    rightHtml: PropTypes.node,
    children: commonTypes.children,
  };

  render() {
    return (
      <>
        <div
          className="three-leyout-container"
          style={{
            minWidth: this.props.minWidth + "px",
          }}
        >
          {/* 主区域 */}
          <div className="main-area">{this.props.children}</div>
          {/* 左边栏 */}
          <div
            className="left-aside"
            style={{
              marginRight: this.props.gap + "px",
            }}
          >
            {this.props.leftHtml}
          </div>
          {/* 右边栏 */}
          <div
            className="right-aside"
            style={{
              marginLeft: this.props.gap + "px",
            }}
          >
            {this.props.rightHtml}
          </div>
        </div>
      </>
    );
  }
}
