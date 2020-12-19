import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

import buildingBlocks from "./Pages/blocks";
buildingBlocks.register("test", import("./Pages/blocks/test"));

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
