import React, { Component } from "react";
import { AppCtx, ChildA2Ctx } from "./ctxs";

export default class ChildA21 extends Component {
  static contextType = AppCtx;

  shouldComponentUpdate() {
    console.log("ChildA21 shouldComponentUpdate");
    return false;
  }

  render() {
    console.log("ChildA21 render");
    return (
      <>
        <div>ChildA21</div>
        <p>contextType = AppCtx</p>
        <p>context.a: {this.context.a}</p>
        <p>context.b: {this.context.b}</p>
        <AppCtx.Consumer>
          {(ctx) => (
            <>
              <p>AppCtx.Consumer</p>
              <p>ctx.a: {ctx.a}</p>
              <p>ctx.b: {ctx.b}</p>
            </>
          )}
        </AppCtx.Consumer>
        <ChildA2Ctx.Consumer
          children={(ctx) => (
            <>
              <p>ChildA2Ctx.Consumer</p>
              <p>ctx.a: {ctx.a}</p>
            </>
          )}
        />
      </>
    );
  }
}
