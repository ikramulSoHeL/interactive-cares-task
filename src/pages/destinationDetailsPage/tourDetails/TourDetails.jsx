import React from "react";
import "./tourDetails.scss";

// react icons
import { BiTimeFive } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { BsCalendar2DateFill, BsTelephone } from "react-icons/bs";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

import Wrapper from "../../../components/wrapper/Wrapper";

const TourDetails = () => {
  return (
    <Wrapper>
      <div className="tourDetails">
        <div className="tourAbout">
          <div className="tourHeader__rating">
            <h3 className="tourHeader">
              Molokini and Turtle Arches Snorkeling Trip
            </h3>
            <span className="tourRating">
              <i className="fas fa-star"></i>
              4.9 (30+ Ratting)
            </span>
          </div>

          <div className="tour__sortInfos">
            <div className="tour__sortInfo">
              <BiTimeFive className="tour__sortInfoIcon" />
              <span>4 Hours</span>
            </div>

            <div className="tour__sortInfo">
              <IoIosPeople className="tour__sortInfoIcon" />
              <span>Max People: 30</span>
            </div>

            <div className="tour__sortInfo">
              <FaWifi className="tour__sortInfoIcon" />
              <span>Available</span>
            </div>

            <div className="tour__sortInfo">
              <BsCalendar2DateFill className="tour__sortInfoIcon" />
              <span>18 Jsn - 28Jan</span>
            </div>

            <div className="tour__sortInfo">
              <AiOutlineUserSwitch className="tour__sortInfoIcon" />
              <span>Min Age: 12</span>
            </div>

            <div className="tour__sortInfo">
              <GoLocation className="tour__sortInfoIcon" />
              <span>Airport</span>
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

        <div className="tourBooking">
          <form action="" className="bookingForm">
            <div className="pricing">
              <span className="priceText">Price</span>
              <span className="price">$ 700</span>
            </div>

            <div className="pricingForm__inputs">
              <div className="pricingForm__inputGroup">
                <BsCalendar2Date />
                <input type="date" />
              </div>

              <div className="pricingForm__inputGroup">
                <IoIosPeople />
                <input type="number" placeholder="Total Person" />
              </div>

              <div className="pricingForm__inputGroup">
                <AiOutlineUserSwitch />
                <input type="text" placeholder="Username" />
              </div>

              <div className="pricingForm__inputGroup">
                <MdOutlineEmail />
                <input type="text" placeholder="Email" />
              </div>

              <div className="pricingForm__inputGroup">
                <BsTelephone />
                <input type="number" placeholder="Phone" />
              </div>

              <div className="bookingFrom__btn">
                <button>Proceed Booking</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default TourDetails;
