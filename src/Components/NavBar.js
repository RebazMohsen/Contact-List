import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/About" },
  { name: "Project", url: "/Project" },
  { name: "Skill", url: "/Skills" },
];

export default function NavBar() {
  return (
    <div className="bg-slate-600  ">
      <ul className="flex    text-2xl  space-x-3 text-white p-3">
        {links.map((item) => {
          return <Link to={item.url}> {item.name} </Link>;
        })}
      </ul>
    </div>
  );
}
