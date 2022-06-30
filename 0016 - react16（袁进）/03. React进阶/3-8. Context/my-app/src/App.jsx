import React, { Component } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import { AppCtx } from "./ctxs";

export default class App extends Component {
  stateList = [
    {
      ctx: {
        a: 1,
        b: 2,
      },
    },
  ];

  state = this.stateList[0];

  render() {
    return (
      <>
        <AppCtx.Provider value={this.state.ctx}>
          <div>
            App
            <p>state.a: {this.state.a}</p>
            <p>state.b: {this.state.b}</p>
            <p>
              <button
                onClick={() => {
                  this.setState({}, () => {
                    this.stateList.push(this.state);
                    console.log(
                      "旧的 state 是否等于新的 state",
                      this.stateList[0] === this.stateList[1]
                    );
                    console.log(
                      "旧的 state.ctx 是否等于新的 state.ctx",
                      this.stateList[0].ctx === this.stateList[1].ctx
                    );
                  });
                }}
              >
                state.a + 1
              </button>
            </p>
          </div>
          <ul>
            <li>
              <ChildA />
            </li>
            <li>
              <ChildB />
            </li>
          </ul>
        </AppCtx.Provider>
      </>
    );
  }
}
