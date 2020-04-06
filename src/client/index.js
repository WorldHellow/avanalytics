import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import logger from "./services/logService";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

logger.init();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// registerServiceWorker();
