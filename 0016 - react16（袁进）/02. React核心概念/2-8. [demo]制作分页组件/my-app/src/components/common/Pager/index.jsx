import React, { Component } from "react";
import "./index.css";

export default class Pager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: props.size,
      total: props.total,
      visibleNum: props.visibleNum,
      minPage: 1, // 最小页码
      maxPage: Math.ceil(this.props.total / this.props.size), // 最大页码
    };
  }

  // 获取可见的最小页码
  getMinVisiblePage = () => {
    let minVisiblePage =
      this.props.current - Math.floor(this.state.visibleNum / 2);
    minVisiblePage =
      minVisiblePage >= this.state.minPage
        ? minVisiblePage
        : this.state.minPage;
    return minVisiblePage;
  };

  // 获取可见的最大页码
  getMaxVisiblePage = () => {
    let maxVisiblePage = this.getMinVisiblePage() + this.state.visibleNum - 1;
    maxVisiblePage =
      maxVisiblePage < this.state.maxPage ? maxVisiblePage : this.state.minPage;
    return maxVisiblePage;
  };

  // 获取可见页码
  getVisiblePages = () => {
    const visiblePages = [],
      min = this.getMinVisiblePage(),
      max = this.getMaxVisiblePage(),
      cur = this.props.current;
    for (let i = min; i <= max; i++) {
      visiblePages.push(
        <span
          key={i}
          className={cur === i ? "item selected" : "item"}
          onClick={() => {
            this.handleClick(i);
          }}
        >
          {i}
        </span>
      );
    }
    return visiblePages;
  };

  handleClick = (newPage) => {
    if (
      newPage === this.props.current ||
      newPage < this.state.minPage ||
      newPage > this.state.maxPage
    )
      return;
    this.props.onChange && this.props.onChange(newPage);
  };

  render() {
    console.log("render current => ", this.props.current);
    const visiblePages = this.getVisiblePages();
    return (
      <>
        <div className="Pager-container">
          {/* 首页 */}
          <span
            className={this.props.current === 1 ? "disabled item" : "item"}
            onClick={() => {
              this.handleClick(this.state.minPage);
            }}
          >
            |&lt;&lt;
          </span>
          {/* 上一页 */}
          <span
            className={this.props.current === 1 ? "disabled item" : "item"}
            onClick={() => {
              this.handleClick(this.props.current - 1);
            }}
          >
            &lt;&lt;
          </span>
          {/* 可见页码 */}
          {visiblePages}
          {/* 下一页 */}
          <span
            className={
              this.props.current === this.state.maxPage
                ? "disabled item"
                : "item"
            }
            onClick={() => {
              this.handleClick(this.props.current + 1);
            }}
          >
            &gt;&gt;
          </span>
          {/* 尾页 */}
          <span
            className={
              this.props.current === this.state.maxPage
                ? "disabled item"
                : "item"
            }
            onClick={() => {
              this.handleClick(this.state.maxPage);
            }}
          >
            &gt;&gt;|
          </span>
        </div>
      </>
    );
  }
}
