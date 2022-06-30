import React, { Component } from "react";
import Form from "./index";

export default class Test extends Component {
  render() {
    return (
      <>
        <Form
          onSubmit={(datas) => {
            // 获取提交的表单数据
            console.log(datas);
          }}
        >
          <p>
            账号：
            <Form.Input PropName="loginId" />
          </p>
          <p>
            密码：
            <Form.Input PropName="loginPwd" type="password" />
          </p>
          <p>
            <Form.Button>提交</Form.Button>
          </p>
        </Form>
      </>
    );
  }
}
