import React from "react";
import Card from "../Card/Card";
import beers from "../../data/beers";
import "./CardList.scss";

const CardList = () => {
  return (
    <>
      <Card beerArr={beers} className="cardList"/>
    </>
  );
};

export default CardList;
