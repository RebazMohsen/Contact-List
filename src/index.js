import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Container from "./Components/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container mt-9 mx-auto px-10 ">
      <div className=" h-60 w-60  py-5 mt-16 bg-blue-50 grid grid-cols-1  content-center rounded-md       ">
        <Container />
      </div>
    </div>
  </React.StrictMode>
);
