import React, { PureComponent } from "react";

export default class Child3 extends PureComponent {
  // 有一半的概率获取到错误数据 undefined
  generateData() {
    if (Math.random() > 0)
      return [{ label: "task1", value: 1 }]; // 模拟正确数据
    else return; // 模拟错误数据
  }

  render() {
    const datas = this.generateData();
    const spans = datas.map((it, i) => <span key={i}>{it.label}</span>);
    setTimeout(() => {
      throw new Error(
        "子组件中异步的错误，不会触发 getDerivedStateFromError 的执行"
      );
    }, 1000);
    return (
      <ul>
        <li
          onClick={() => {
            throw new Error(
              "子组件的事件中的错误，不会触发 getDerivedStateFromError 的执行"
            );
          }}
        >
          Child3 - {spans}
        </li>
      </ul>
    );
  }
}
