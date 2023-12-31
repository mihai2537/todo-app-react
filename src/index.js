import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./theme";

import "./css/variables.css";
import "./css/global.css";
import "./css/style.css";
import "./css/header.css";
import "./css/card-input.css";
import "./css/items.css";
import "./css/footer.css";
import "./css/queries.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
