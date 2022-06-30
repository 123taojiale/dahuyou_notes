import React from "react";
import { createRoot } from "react-dom/client";
import A from "./components/A";
// import Tick from "./components/Tick";

const root = createRoot(document.getElementById("root"));

root.render(<A num={123} />);