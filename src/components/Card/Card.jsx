import React from "react";
import "./Card.scss";

const Card = (props) => {
  const {beerArr} = props;

  const beerInfo = beerArr.map((beer) => {
    return (
      <>
      <div key={beer.id} className="beer-info">
        <img src={beer.image_url} alt="" />
        <h3>{beer.name}</h3>
        <h3>{beer.abv}%</h3>
        <p>{beer.description}</p>
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
