import React from "react";
import UpperContainer from "./UpperContainer";
import LowerContainer from "./LowerContainer";
import Divider from "./Divider";
export default function Container(prop) {
  return (
    <div>
      <div className="mt-10 shadow-2xl  ">
        <UpperContainer name={prop.name} position={prop.position} />
        <Divider />
        <LowerContainer />
      </div>
    </div>
  );
}

/*<div className="bg-slate-500 flex ">
      <div className="grid grid-cols-5 space-x-8 space-y-20 m-20   ">
        <div className="  mx-auto  ">
          <div className=" h-60 w-60    bg-blue-50 grid   content-center rounded-md       ">
            <Container name="Rebaz" position="CEO & Founder" />
          </div>
        </div>
      </div>
    </div>*/
