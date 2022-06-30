import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

let num = 1;
setInterval(() => {
  root.render((
    <>
      <p>
        第 {num++} 秒</p>
    </>
  ))
}, 1000);
