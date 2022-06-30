import React, { Component } from "react";
import ThreeLayout from "./components/common/ThreeLayout";

export default class App extends Component {
  render() {
    const leftHtml = (
      <>
        <div
          style={{
            border: "1px solid #ddd",
            height: "100%",
          }}
        >
          左侧内容区域
        </div>
      </>
    );

    const rightHtml = (
      <>
        <div
          style={{
            border: "1px solid #ddd",
            height: "100%",
          }}
        >
          右侧内容区域
        </div>
      </>
    );
    return (
      <>
        <ThreeLayout leftHtml={leftHtml} rightHtml={rightHtml}>
          <div
            style={{
              border: "1px solid #f40",
            }}
          >
            <h1>主区域</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              consectetur eius tenetur corporis quas ab reiciendis sint id
              eligendi veniam aliquid consequuntur sequi, eos aliquam unde, ea
              autem quo. Sequi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              consectetur eius tenetur corporis quas ab reiciendis sint id
              eligendi veniam aliquid consequuntur sequi, eos aliquam unde, ea
              autem quo. Sequi.
            </p>
          </div>
        </ThreeLayout>
      </>
    );
  }
}
