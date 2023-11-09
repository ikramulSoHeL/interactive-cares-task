import React from "react";
import "./teamCard.scss";
import { Link } from "react-router-dom";

const TeamCard = ({ img, name, position }) => {
  return (
    <div className="box">
      <div className="image-wrapper">
        <img className="img-fluid" src={img} alt="..." />
      </div>
      <div className="box-desc">
        <h5>J{name}</h5>
        <p>{position}</p>
      </div>

      <ul className="social">
        <li>
          <Link to="" className="socialLink">
            <i className="fab fa-facebook-f" />
          </Link>
        </li>
        <li>
          <Link to="" className="socialLink">
            <i className="fab fa-instagram" />
          </Link>
        </li>
        <li>
          <Link to="" className="socialLink">
            <i className="fab fa-pinterest-p" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard;
