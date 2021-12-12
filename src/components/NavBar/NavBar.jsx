import React from "react";
import Searchbox from "../SearchBox/Searchbox";
import "./NavBar.scss"

const NavBar = (props) => {
  const { searchTerm, handleInput } = props;
  return (
    <div className="navBar">

      <Searchbox searchTerm={searchTerm} handleInput={handleInput}/>

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
