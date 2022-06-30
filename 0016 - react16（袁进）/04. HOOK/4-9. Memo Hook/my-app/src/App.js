import React, { useState, useMemo } from "react";

function Item(props) {
  // console.log("Item Render " + props.value);
  return <li>{props.value}</li>;
}

export default function App() {
  const [range] = useState({ min: 1, max: 10000 });
  const [n, setN] = useState(0);
  // 使用 useMemo
  const list = useMemo(() => {
    const list = [];
    for (let i = range.min; i <= range.max; i++) {
      list.push(<Item key={i} value={i}></Item>);
    }
    return list;
  }, [range.min, range.max]);
  // 不使用 useMemo
  // const list = [];
  // for (let i = range.min; i <= range.max; i++) {
  //     list.push(<Item key={i} value={i}></Item>)
  // }
  return (
    <div>
      {/* 每当 n 变化，会导致 App 重新渲染 */}
      <input
        type="number"
        value={n}
        onChange={(e) => {
          setN(parseInt(e.target.value));
        }}
      />
      <ul>{list}</ul>
    </div>
  );
}
