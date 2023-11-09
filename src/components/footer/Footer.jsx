import React from "react";
import "./footer.scss";
import Wrapper from "../wrapper/Wrapper";

const footer = () => {
  return (
    <Wrapper bg={"#14161C"}>
      <div className="footer">
        <div className="footer__info">
          <h3 className="footer__headerLogo">
            Tris<span>go.</span>
          </h3>

          <span className="footer__desc">
            Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm tempor
            in cididunt ut labore dolore magna aliqua enim.
          </span>

          <div className="footer__infoSocial">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>

        <div className="footer__services">
          <h3 className="footer__header">Services</h3>

          <div className="footer__servicesContainer">
            <span>Home</span>
            <span>Abount</span>
            <span>Tours</span>
            <span>Destinations</span>
            <span>Blog</span>
            <span>Pages</span>
            <span>Contact</span>
          </div>
        </div>

        <div className="footer__contact">
          <h3 className="footer__header">Contact</h3>

          <div className="footer__contactContainer">
            <div className="footer__contactItem">
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Street, New York, USA</span>
            </div>

            <div className="footer__contactItem">
              <i className="fas fa-phone-alt"></i>
              <span>+012 345 6789</span>
            </div>

            <div className="footer__contactItem">
              <i className="fas fa-envelope"></i>
              <span> info@gmail.com</span>
            </div>

            <div className="footer__contactItem">
              <i className="fas fa-clock"></i>
              <span>Mon - Sat 8:00 - 17:00</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default footer;
