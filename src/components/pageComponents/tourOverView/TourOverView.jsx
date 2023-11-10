import React from "react";
import "./tourOverView.scss";

// components
import Wrapper from "../../../components/wrapper/Wrapper";

const TourOverView = () => {
  return (
    <Wrapper>
      <div className="tourOverView">
        <div className="tourOverView__left">
          <div className="tourAbout">
            <h3 className="tourHeader">About</h3>
            <p className="tourAbout__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quas doloribus, voluptatem voluptate quibusdam
              quia ipsa quos voluptatibus fugiat. Quisquam quod, voluptatum,
              quas doloribus, voluptatem voluptate quibusdam quia ipsa quos
              voluptatibus fugiat. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam quod, voluptatum, quas doloribus,
              voluptatem voluptate quibusdam quia ipsa quos voluptatibus fugiat.
              <br />
              <br />
              Quisquam quod, voluptatum, quas doloribus, voluptatem voluptate
              quibusdam quia ipsa quos voluptatibus fugiat. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quisquam quod, voluptatum,
              quas doloribus, voluptatem voluptate quibusdam quia ipsa quos
              voluptatibus fugiat. Quisquam quod, voluptatum, quas doloribus,
              voluptatem voluptate quibusdam quia ipsa quos voluptatibus fugiat.
            </p>
          </div>
        </div>

        <div className="tourOverView__right">
          <div className="tourMap">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1103.674684561455!2d2.293580083983908!3d48.858294769295306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sbd!4v1699547269632!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              //   style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TourOverView;
