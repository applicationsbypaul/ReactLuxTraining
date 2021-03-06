import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  const activeStyle2 = { color: "green" };
  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/"> 
        Home
      </NavLink>
      |{" | "}
      <NavLink activeStyle={activeStyle2} to="/courses">
        Courses
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
