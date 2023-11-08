import React from "react";
import "./testimonials.scss";

// components
import Wrapper from "../../../components/wrapper/Wrapper";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

// static files
import testimonialData from "./testimonialData";

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

          <div className="testimonials__container">
            {testimonialData.map((testimonial) => (
              <div className="testimonials__card" key={testimonial.id}>
                <span>""</span>
                <p className="testimonials__cardText">{testimonial?.review}</p>
                <span className="testimonials__cardPosition">
                  -By {testimonial.name}, {testimonial.position}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;
