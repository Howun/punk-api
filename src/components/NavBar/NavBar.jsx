import React from "react";
import Searchbox from "../SearchBox/Searchbox";
import "./NavBar.scss"

const NavBar = (props) => {
  const {
    searchTerm,
    handleInput,
    handleSubmitABV,
    handleSubmitBrewDate,
    handleSubmitPH,
  } = props;
  return (
    <div className="navBar">

      <h1>PUNK API</h1>

      <Searchbox
        className="navBar__searchBox"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />

      <div className="params">
        <div className="params__option">
          <label>High ABV ({">"}6.0%)</label>
          <input type="checkbox" onClick={handleSubmitABV} />
        </div>

        <div className="params__option">
          <label>Classic Range</label>
          <input type="checkbox" onClick={handleSubmitBrewDate} />
        </div>

        <div className="params__option">
          <label>Acidity (ph {"<"} 4)</label>
          <input type="checkbox" onClick={handleSubmitPH} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
