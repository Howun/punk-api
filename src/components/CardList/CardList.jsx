import React from "react";
import Card from "../Card/Card";
// import beers from "../../data/beers";
import "./CardList.scss";

const CardList = props => {
  const {beerArr} = props;


  const cardList = beerArr.map((beer) => {
  return (
      <Card 
      key={beer.id}
      image_URL={beer.image_url} 
      name={beer.name} abv={beer.abv} 
      description={beer.description} 
      />
  );
});
return (
<div>
  <div className="beers">{cardList}</div>
</div>
);
};

export default CardList;
