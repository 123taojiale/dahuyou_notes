import React, { Component } from "react";

/**
 * 一组复选框
 */
export default class CheckBoxGroup extends Component {
  // state = {
  //   ...this.props
  // }

  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(
    //   "getDerivedStateFromProps 状态或属性发生了变化：",
    //   props,
    //   state
    // );
    return {
      datas: props.datas,
    };
  }

  // checkbox 选中逻辑
  handleChange = (e) => {
    const val = e.target.value;
    if (e.target.checked)
      this.setState(
        (cur) => ({ selectedDatas: [...cur.selectedDatas, val] }),
        this.emitOnChange(e)
      );
    else
      this.setState(
        (cur) => ({ selectedDatas: cur.selectedDatas.filter((it) => it !== val) }),
        this.emitOnChange(e)
      );
  };

  emitOnChange = (e) => {
    return () => {
      this.state.onChange &&
        this.state.onChange(this.state.selectedDatas, this.state.name, e);
    };
  };

  // 依据传入的 datas 获取一组复选框
  getCheckBoxGroup = () => {
    return this.state.datas.map((it) => (
      <p key={it.value}>
        <label>
          <input
            type="checkbox"
            name={this.state.name}
            value={it.value}
            onChange={this.handleChange}
          />
          {it.text}
        </label>
      </p>
    ));
  };

  render() {
    console.log('render');
    const bs = this.getCheckBoxGroup() || null;
    return (
      <>
        <h1>CheckBoxGroup</h1>
        {bs}
      </>
    );
  }
}
