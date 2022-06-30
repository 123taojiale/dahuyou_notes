import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import Test from "./components/common/CheckBoxGroup/Test";
// import Test from "./components/common/RadioBoxGroup/Test";
// import Test from "./components/common/Select/Test";

const container = document.getElementById("root"),
  root = createRoot(container);

root.render(
  <>
    <App />
  </>
);
