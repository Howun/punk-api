import React from "react";
import Card from "../Card/Card";
import beers from "../../data/beers";
import "./CardList.scss";

const CardList = () => {
  return (
    <div className="CardList">
      <Card beerArr={beers} className="beers-card"/>
    </div>
  );
};

export default CardList;
