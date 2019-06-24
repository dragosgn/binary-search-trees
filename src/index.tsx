import * as React from "react";
import { render } from "react-dom";

import PreorderTransversal from "./PreorderTransversal";

import "./styles.css";

function App() {
  return (
    <div>
      <div>random things on a sunday</div>
      <PreorderTransversal />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
