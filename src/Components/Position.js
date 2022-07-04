import React from "react";

export default function Position(prop) {
  return (
    <div>
      <p
        align="center"
        className=" 
         text-sm text-gray-500 dark:text-gray-400"
      >
        {prop.position}
      </p>
    </div>
  );
}
