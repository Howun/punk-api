import React from "react";
import "./NavBar.scss"

const NavBar = () => {
  return (
    <div className="navBar">

      <input type="text" />

      <label className="params high-abv">
        High ABV ({">"}6.0%)
        <input type="checkbox" />
      </label>

      <label className="params classic-range">
        High ABV
        <input type="checkbox" />
      </label>

      <label className="params acidity">
        High ABV (ph {"<"} 4)
        <input type="checkbox" />
      </label>
    </div>
  );
};

export default NavBar;
