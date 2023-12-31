import React from "react";
import "./subHero.scss";

// images
import subHeroImg from "../../../assets/heroImages/subHero-1.jpeg";

const SubHero = ({ bgImg, mainText, subLocation, locationPath }) => {
  return (
    <div className="subHero">
      <div className="subHeroImg">
        <img
          // src="https://images.pexels.com/photos/4633842/pexels-photo-4633842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src={bgImg}
          alt=""
        />
      </div>

      <div className="subHero__content">
        <h3 className="subHero__title">{mainText}</h3>
        <span className="subHero__subText">
          {subLocation} <span>/ {locationPath}</span>
        </span>
      </div>
    </div>
  );
};

export default SubHero;
