import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import cartStore from "./store/cartStore";
import { Provider } from "react-redux";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={cartStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
