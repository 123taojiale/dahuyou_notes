import React, { useState, useLayoutEffect, useRef } from "react";

export default function App() {
  const [n, setN] = useState(0);
  const h1Ref = useRef();
  useLayoutEffect(() => {
    h1Ref.current.innerText = Math.random().toFixed(2);
  });
  return (
    <div>
      <h1 ref={h1Ref}>0</h1>
      <p>第 {n} 次更新</p>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
