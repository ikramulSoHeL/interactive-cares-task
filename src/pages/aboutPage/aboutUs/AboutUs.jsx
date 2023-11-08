import React from "react";
import "./aboutUs.scss";

// components
import Wrapper from "../../../components/wrapper/Wrapper";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <Wrapper>
        <div className="aboutUs__contsiner">
          <div className="aboutUs__imgs">
            <img
              className="aboutUs__img1"
              src="https://images.pexels.com/photos/4530039/pexels-photo-4530039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />

            <img
              className="aboutUs__img2"
              src="https://images.pexels.com/photos/4530039/pexels-photo-4530039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>

          <div className="aboutUs__details">
            <h3 className="aboutUsdetails__nameTitle">About Us</h3>
            <h2 className="aboutUsdetails__title">
              Why Select Us for vacation
            </h2>

            <span className="aboutUsdetails__subText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quidem voluptate, officiis, quas voluptas dolorum
              voluptatum quia consequatur ipsam nesciunt. Quisquam voluptatem,
              quidem voluptate, officiis, quas voluptas dolorum voluptatum quia
              consequatur ipsam nesciunt.
            </span>
            <br />
            <span className="aboutUsdetails__subText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quidem voluptate, officiis, quas voluptas dolorum.d
            </span>
            <br />
            <span className="aboutUsdetails__subText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quidem voluptate.
            </span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutUs;
