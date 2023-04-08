import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/auth-context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </AuthContextProvider>
);
