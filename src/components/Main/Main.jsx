import React from "react";
import CardList from "../CardList/CardList";

const Main = (props) => {
  const {beerArr} = props;
  return (
    <div className="main">
      <CardList beerArr={beerArr}/>
    </div>
  );
};

export default Main;
