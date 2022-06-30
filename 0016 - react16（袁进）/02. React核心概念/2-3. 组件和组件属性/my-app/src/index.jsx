import React from "react";
import { createRoot } from "react-dom/client";
import MyClassComp from "./MyClassComp";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <MyClassComp user={{ name: "dahuyou", age: 23 }} />
  </>
);
