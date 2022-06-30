import React from "react";
import { createRoot } from "react-dom/client";
import TickControl from "./components/TickControl";
const container = document.getElementById("root"),
  root = createRoot(container);

root.render(
  <>
    <TickControl />
  </>
);
