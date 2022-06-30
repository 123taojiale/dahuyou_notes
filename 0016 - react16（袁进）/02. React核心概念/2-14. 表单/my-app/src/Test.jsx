import React, { Component } from "react";
import "./index.css";

export default class Test extends Component {
  state = {
    loginId: "",
    loginPwd: "",
    gender: "male",
    selectedLoves: [],
    loves: [
      { value: "love1", text: "爱好1" },
      { value: "love2", text: "爱好2" },
      { value: "love3", text: "爱好3" },
      { value: "love4", text: "爱好4" },
      { value: "other", text: "其它" },
    ],
    selectedCity: "bj",
    citys: [
      { value: "bj", text: "北京" },
      { value: "sh", text: "上海" },
      { value: "hz", text: "杭州" },
      { value: "sz", text: "深圳" },
    ],
    description: "",
  };

  handleChange = (e) => {
    let val = e.target.value,
      prop = e.target.name,
      newPartialState = {}; // 状态 - 需要更新的部分

    if (prop === "selectedLoves") {
      newPartialState[prop] = this.state[prop];
      if (e.target.checked) newPartialState[prop].push(val);
      else newPartialState[prop] = newPartialState[prop].filter((it) => it !== val);
      console.log(newPartialState[prop]);
    } else {
      newPartialState[prop] = val;
    }
    // console.log(`状态的${prop}属性发生变化，新的值为${val}`);
    this.setState(newPartialState);
  };

  render() {
    const checkboxes = this.state.loves.map((it, i) => (
      <label key={i}>
        <input
          type="checkbox"
          name="selectedLoves"
          value={it.value}
          onChange={this.handleChange}
        />
        {it.text}
      </label>
    ));

    const selectOptions = this.state.citys.map((it, i) => (
      <option key={i} value={it.value}>
        {it.text}
      </option>
    ));

    return (
      <>
        <div className="Test-container">
          <div className="left">
            {/* 普通文本输入框 - text */}
            <p>
              账号：
              <input
                type="text"
                name="loginId"
                value={this.state.loginId}
                onChange={this.handleChange}
              />
            </p>
            {/* 密码框 - password */}
            <p>
              密码：
              <input
                type="password"
                name="loginPwd"
                value={this.state.loginPwd}
                onChange={this.handleChange}
              />
            </p>
            {/* 单选框 - radio */}
            <p>
              性别：
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={this.state.gender === "male"}
                  onChange={this.handleChange}
                />
                女
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={this.state.gender === "female"}
                  onChange={this.handleChange}
                />
                男
              </label>
            </p>
            {/* 复选框 - checkbox */}
            <p>{checkboxes}</p>
            {/* 下拉框 - select */}
            <p>
              <select
                name="selectedCity"
                onChange={this.handleChange}
                value={this.state.selectedCity}
              >
                {selectOptions}
              </select>
            </p>
            {/* 多行文本框 - textarea */}
            <p>
              <textarea
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              ></textarea>
            </p>
          </div>
          <div className="right">
            <p>loginId: {this.state.loginId}</p>
            <p>loginPwd: {this.state.loginPwd}</p>
            <p>gender: {this.state.gender}</p>
            <p>selectedLoves: {this.state.selectedLoves.toString()}</p>
            <p>selectedCity: {this.state.selectedCity}</p>
            <p>description: {this.state.description}</p>
          </div>
        </div>
      </>
    );
  }
}
