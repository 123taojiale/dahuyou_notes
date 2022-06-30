// import React, { PureComponent } from "react";
// import taskType from "./taskType";

// export default class Task extends PureComponent {
//   static propTypes = taskType;

//   render() {
//     console.log("Task render");
//     return (
//       <li className={this.props.isFinish ? "finish" : ""}>{this.props.name}</li>
//     );
//   }
// }

import React, {PureComponent} from "react";
import taskType from "./taskType";

function memo(FuncComp) {
  return class Memo extends PureComponent {
    render() {
      return <>
        <FuncComp {...this.props} />
        {/* FuncComp(this.props) */}
      </>
    }
  }
}

function Task(props) {
  console.log("Task render");
  return <li className={props.isFinish ? "finish" : ""}>{props.name}</li>;
}

Task.propTypes = taskType;

export default memo(Task);
