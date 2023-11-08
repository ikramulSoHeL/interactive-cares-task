import React from "react";
import "./teamCard.scss";

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
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-pinterest-p" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard;
