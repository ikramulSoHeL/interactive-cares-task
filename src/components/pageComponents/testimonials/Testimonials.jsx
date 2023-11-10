import React from "react";
import "./testimonials.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// components
import Wrapper from "../../wrapper/Wrapper";
import SectionHeader from "../../sectionHeader/SectionHeader";
import TestimonialCard from "../../cards/testimonialCard/TestimonialCard";

// static files
import testimonialData from "../../../data/testimonialData";

const Testimonials = () => {
  return (
    <Wrapper bg={"#dffbf9"}>
      <div className="testimonials">
        <div className="testimonials__imgs">
          <img
            src="https://images.pexels.com/photos/18978808/pexels-photo-18978808/free-photo-of-red-haired-woman-posing-in-green-tank-top-and-sunglasses.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="testimonials__img1"
          />
          <img
            src="https://images.pexels.com/photos/3884482/pexels-photo-3884482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="testimonials__img2"
          />
          <img
            src="https://images.pexels.com/photos/5215033/pexels-photo-5215033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="testimonials__img3"
          />
        </div>

        <div className="testimonials__details">
          <SectionHeader
            subText="Testimonials"
            mainText="What Travellers Say"
          />

          <Swiper
            className="testimonials__container"
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;
