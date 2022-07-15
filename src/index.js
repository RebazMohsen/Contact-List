import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NavBar from "./Components/NavBar";
import MyImage from "./Components/MyImage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<MyImage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
