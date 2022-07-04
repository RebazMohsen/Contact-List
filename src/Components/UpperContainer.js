import React from "react";
import Position from "./Position";
import MyImage from "./MyImage";
import Header from "./Header";
import Button from "./Button";

export default function UpperContainer() {
  return (
    <div className="mx-auto">
      <MyImage />
      <Header name="Flucia" />
      <Position position="CEO" />
      <Button />
    </div>
  );
}
