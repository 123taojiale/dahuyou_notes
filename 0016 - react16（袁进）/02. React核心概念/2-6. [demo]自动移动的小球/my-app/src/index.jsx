import React from "react";
import { createRoot } from "react-dom/client";
import BallList from "./components/BallList"
import "./utils/changeRootBg";
import "./style/index.css"

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <BallList />
  </>
);