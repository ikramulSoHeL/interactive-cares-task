import React from "react";
import "./tourDetails.scss";
import Wrapper from "../../../components/wrapper/Wrapper";

const TourDetails = () => {
  return (
    <Wrapper>
      <div className="tourDetails">
        <div className="tourAbout">
          <div className="tourHeader__rating">
            <h3>Molokini and Turtle Arches Snorkeling Trip</h3>
            <span>Ratting</span>
          </div>

          <div className="tour__sortInfos">
            <div className="tour__sortInfo">
              <i className="fas fa-map-marker-alt"></i>
              <span>4 Hours</span>
            </div>

            <div className="tour__sortInfo">
              <i className="fas fa-map-marker-alt"></i>
              <span>4 Hours</span>
            </div>

            <div className="tour__sortInfo">
              <i className="fas fa-map-marker-alt"></i>
              <span>4 Hours</span>
            </div>

            <div className="tour__sortInfo">
              <i className="fas fa-map-marker-alt"></i>
              <span>4 Hours</span>
            </div>

            <div className="tour__sortInfo">
              <i className="fas fa-map-marker-alt"></i>
              <span>4 Hours</span>
            </div>

            <div className="tour__sortInfo">
              <i className="fas fa-map-marker-alt"></i>
              <span>4 Hours</span>
            </div>
          </div>

          <div className="tour__text">
            <span>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents.
            </span>

            <span>
              Lorem Ipsum decided to leave for the far World of Grammar. The Big
              Oxmox advised her not to do so, because there were thousands of
              bad Comma wild Question Marks and devious Semikoli, but the Little
              Blind Text didn’t listen. She packed her seven versalia, put her
              initial into the belt and made herself on the way. When she
              reached the first hills of the Italic Mountains, she had a last.
            </span>
          </div>
        </div>

        <div className="tourBooking"></div>
      </div>
    </Wrapper>
  );
};

export default TourDetails;
