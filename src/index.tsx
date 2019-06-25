import * as React from "react";
import { render } from "react-dom";

import BinaryTree from "./BinaryTree";

import stack from "./Stack";
import queue from "./Queue";

import "./styles.css";

function App() {
  stack();
  queue();
  return (
    <div>
      <div>random things on a sunday</div>
      <BinaryTree />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
