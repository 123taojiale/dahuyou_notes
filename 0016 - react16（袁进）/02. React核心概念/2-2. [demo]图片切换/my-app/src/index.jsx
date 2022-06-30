import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root"),
  root = createRoot(container);

const lis = [];
for (let i = 1; i <= 1000; i++) {
  lis.push(<li key={i}>{i}</li>);
}

root.render(lis)