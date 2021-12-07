import React from "react";
import "./Card.scss";

const Card = (props) => {
  const {beerArr} = props;

  const beerInfo = beerArr.map((beer) => {
    return (
      <>
      <div key={beer.id} className="beer">
        <img className="beer__image" src={beer.image_url} alt="" />
        <p className="text beer__name">{beer.name}</p>
        <p className="text beer__abv">{beer.abv}%</p>
        <p className="text beer__description">{beer.description}</p>
      </div>
      </>
    )
  })
  return (
    <>
      {beerInfo}
    </>
  );
};

export default Card;
