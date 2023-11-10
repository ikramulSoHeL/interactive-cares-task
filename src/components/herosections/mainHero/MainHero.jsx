import React from "react";
import "./mainHero.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import { CiLocationOn } from "react-icons/ci";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FiType } from "react-icons/fi";

import mainHeroData from "../../../data/mainHeroData";

const MainHero = () => {
  return (
    <div className="mainHero">
      <Swiper
        className="mainHero__content1"
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {mainHeroData.map((data) => (
          <SwiperSlide key={data.id}>
            <div
              className="mainHero__content"
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="mainHero__title">{data.title}</h1>
              <p className="mainHero__subtitle">{data.subTitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="destinationSearch">
        <form action="" className="dSearch__form">
          <div className="formFroup">
            <span>Destination</span>
            <div className="input__group">
              <CiLocationOn />
              <input type="text" placeholder="Where are you going?" />
            </div>
          </div>
          <div className="formFroup">
            <span>Type</span>
            <div className="input__group">
              <FiType />
              <input type="text" placeholder="Type" />
            </div>
          </div>
          <div className="formFroup">
            <span>When?</span>
            <div className="input__group">
              <BsCalendar2DateFill />
              <input type="date" placeholder="Where are you going?" />
            </div>
          </div>
          <div className="formFroup">
            <span>Guests</span>
            <div className="input__group">
              <BsFillPeopleFill />
              <input type="text" placeholder="Person" />
            </div>
          </div>

          <div className="formFroup">
            <button>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainHero;
