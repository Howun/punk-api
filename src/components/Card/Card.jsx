import React from "react";
import "./Card.scss";

const Card = (props) => {
  const {name, image_URL, id, abv, description} = props;

  return (
      <>
      <div key={id} className="beer">
        <img className="beer__image" src={image_URL} alt="" />
        <h2 className="text beer__name">{name}</h2>
        <p className="text beer__abv">{abv}%</p>
        <p className="text beer__description">{description}</p>
      </div>
      </>
  )
  
};

export default Card;
