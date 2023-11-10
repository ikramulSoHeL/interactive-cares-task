import React from "react";
import "./destinationCard.scss";

const DestinationCard = ({ destination }) => {
  return (
    <div className="featuredDestination__card">
      <div className="featuredDestination__cardImg">
        <img src={destination.image} alt="" loading="lazy" />
      </div>

      <div className="featuredDestination__cardContent">
        <span className="featuredDestination__cardSubTitle">
          {destination.name}, {destination.country}
        </span>
        <h3 className="featuredDestination__cardTitle">{destination.desc}</h3>

        <div className="featuredDestination__rattinf">
          <span className="featuredDestination__ratingTitle">
            Rating: {destination.rating}
          </span>
          <span className="featuredDestination__rating">
            ({destination.review} reviews)
          </span>
        </div>

        <div className="featuredDestination__price">
          <span className="priceText">Start From: </span>
          <span className="price">${destination.price}</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
