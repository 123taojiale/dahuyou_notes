import React, { Component } from "react";
import ChildA21 from "./ChildA21";
import { AppCtx, ChildA2Ctx } from "./ctxs";

export default class ChildA2 extends Component {
  render() {
    return (
      <>
        <ChildA2Ctx.Provider value={{a: 100}}>
          <div>
            ChildA2
            <AppCtx.Consumer>
              {(ctx) => (
                <>
                  <p>ctx.a: {ctx.a}</p>
                  <p>ctx.b: {ctx.b}</p>
                </>
              )}
            </AppCtx.Consumer>
          </div>
          <ul>
            <li>
              <ChildA21 />
            </li>
          </ul>
        </ChildA2Ctx.Provider>
      </>
    );
  }
}
