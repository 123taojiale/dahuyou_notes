import React from "react";
import { createRoot } from "react-dom/client";
import Comp from "./Comp";
import Test, { A } from "./Test";

const container = document.getElementById("root"),
  root = createRoot(container);

root.render(
  <>
    <Test
      a={2}
      d={<Comp />}
      e={<Comp />}
      F={Comp}
      g={new A()}
      sex="男"
      h={[2, 3]}
      i={{
        a: 2,
      }}
      j={{
        a: 3,
        name: "abc",
        age: 233,
        address: {
          province: "asdfa",
          city: "adsfasdf",
        },
      }}
      k={[{ name: "asdf", age: 33 }]}
      m={23}
      score={33}
    />
  </>
);
