import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Container from "./Components/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="grid grid-cols-5 space-x-8 space-y-20 m-20   ">
      <div className="  mx-auto  ">
        <div className=" h-60 w-60    bg-blue-50 grid   content-center rounded-md       ">
          <Container name="Rebaz" position="CEO & Founder" />
        </div>
      </div>
    </div>
  </React.StrictMode>
);
