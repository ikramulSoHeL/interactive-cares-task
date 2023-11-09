import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./styles/global.scss";
import { DestinationProvider } from "./context/destination.context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DestinationProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DestinationProvider>
);
