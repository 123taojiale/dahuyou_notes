import React, { useState, useEffect, useRef } from "react";

function Test() {
  const [n, setN] = useState(3);
  const nRef = useRef(n);
  useEffect(() => {
    console.log('useEffect');
    const timer = setInterval(() => {
      if (nRef.current === 0) {
        clearInterval(timer);
        return;
      }
      nRef.current--;
      setN(nRef.current);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>{n}</h1>
    </div>
  );
}

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible ? <Test /> : null}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        显示/隐藏
      </button>
    </>
  );
}
