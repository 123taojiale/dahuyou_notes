import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function A() {
  return <h1>组件A</h1>;
}

function B() {
  return <h1>组件B</h1>;
}

function C() {
  return <h1>组件C</h1>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aa" element={<A />} />
        <Route caseSensitive path="/aa/b" element={<B />} />
        <Route path="/" element={<C />} />
      </Routes>
    </Router>
  );
}
