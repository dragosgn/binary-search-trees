import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
  return <div className="App">random things on a sunday</div>;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
