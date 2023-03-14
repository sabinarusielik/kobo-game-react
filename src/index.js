import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import DrawnCardContextProvider from "./context/DrawnCardContext";
import RejectedCardContextProvider from "./context/RejectedCardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RejectedCardContextProvider>
      <DrawnCardContextProvider>
        <App />
      </DrawnCardContextProvider>
    </RejectedCardContextProvider>
  </React.StrictMode>
);
