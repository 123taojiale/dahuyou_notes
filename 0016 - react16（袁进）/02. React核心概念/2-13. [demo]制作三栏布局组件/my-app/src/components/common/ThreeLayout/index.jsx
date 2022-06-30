import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  constructor(props) {
    super(props);
    const defaultOpts = {
      leftWidth: 200,
      rihgtWidth: 200,
      minWidth: 800, // 容器的最小宽度值
      gap: 20, // 主区域与侧边栏之间的间隙
      // 侧边栏内容 - 有父组件传递
      leftHtml: null,
      rightHtml: null,
    };
    this.opts = Object.assign({}, defaultOpts, this.props);
  }
  render() {
    return (
      <>
        <div
          className="three-leyout-container"
          style={{
            minWidth: this.opts.minWidth + "px",
          }}
        >
          {/* 主区域 */}
          <div className="main-area">{this.opts.children}</div>
          {/* 左边栏 */}
          <div
            className="left-aside"
            style={{
              marginRight: this.opts.gap + "px",
            }}
          >
            {this.opts.leftHtml}
          </div>
          {/* 右边栏 */}
          <div
            className="right-aside"
            style={{
              marginLeft: this.opts.gap + "px",
            }}
          >
            {this.opts.rightHtml}
          </div>
        </div>
      </>
    );
  }
}
