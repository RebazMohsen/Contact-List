import React from "react";
import UpperContainer from "./UpperContainer";
import LowerContainer from "./LowerContainer";
import Divider from "./Divider";
export default function Container(prop) {
  return (
    <div>
      <div className="mt-10 shadow-2xl">
        <UpperContainer name={prop.name} position={prop.position} />
        <Divider />
        <LowerContainer />
      </div>
    </div>
  );
}
