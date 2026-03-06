import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/My_Quiz_Platform20">
    <App />

    </BrowserRouter>
    
  </React.StrictMode>
);