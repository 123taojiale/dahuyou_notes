import React from "react";
import { createRoot } from "react-dom/client";
import { A, B } from "./Test";
import withLog from "./HOC/withLog";
import withLogin from "./HOC/withLogin";

const container = document.getElementById("root"),
  root = createRoot(container);

const AComp = withLogin(withLog(A)),
  BComp = withLogin(withLog(B));

root.render(
  <>
    <AComp isLogin a={1}></AComp>
    <AComp isLogin a={2}></AComp>
    <AComp a={3}></AComp>
    <BComp isLogin b={4}></BComp>
    <BComp b={5}></BComp>
    <BComp isLogin b={2}></BComp>
  </>
);
