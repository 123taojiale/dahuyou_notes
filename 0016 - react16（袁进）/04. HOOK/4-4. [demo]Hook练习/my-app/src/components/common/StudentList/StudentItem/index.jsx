import React, { Component } from "react";
import "./index.css";

export default class StudentItem extends Component {
  render() {
    return (
      <>
        <div className="stu-card">
          <div className="left">
            <p>
              <span className="label">姓名：</span>
              <span>{this.props.name}</span>
            </p>
            <p>
              <span className="label">所在地：</span>
              <span>{this.props.address}</span>
            </p>
            <p>
              <span className="label">邮箱：</span>
              <span>{this.props.email}</span>
            </p>
            <p>
              <span className="label">电话：</span>
              <span>{this.props.phone}</span>
            </p>
          </div>
          <div className="right">
            <p>
              <span className="label">学号：</span>
              <span>{this.props.sNo}</span>
            </p>
            <p>
              <span className="label">性别：</span>
              <span>{this.props.sex === 1 ? "女" : "男"}</span>
            </p>
            <p>
              <span className="label">出生年月：</span>
              <span>{this.props.birth}</span>
            </p>
            <p>
              <span className="label">入学日期：</span>
              <span>{this.props.ctime}</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}
