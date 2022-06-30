import React, { PureComponent } from "react"; // rccp
// import ReactDOM from "react-dom"; // imrd

// function ChildA() {
//   return ReactDOM.createPortal(
//     <div
//       className="child-a"
//       onClick={() => {
//         console.log("ChildA 被点击了");
//       }}
//     >
//       ChildA component...
//       <ChildB />
//     </div>,
//     document.getElementById("test")
//   );
// }

function ChildA() {
  return (
    <div
      className="child-a"
      onClick={() => {
        console.log("ChildA 被点击了");
      }}
    >
      ChildA component...
      <ChildB />
    </div>
  );
}

function ChildB() {
  return (
    <div
      onClick={() => {
        console.log("ChildB 被点击了");
      }}
      className="child-b"
    >
      ChildB component...
    </div>
  );
}

export default class Test extends PureComponent {
  render() {
    return (
      <div
        onClick={() => {
          console.log("Test 被点击了");
        }}
      >
        Test component...
        <ChildA />
      </div>
    );
  }
}
