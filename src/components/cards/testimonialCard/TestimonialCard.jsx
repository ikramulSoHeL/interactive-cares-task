import React from "react";
import "./testimonialCard.scss";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonials__card">
      <span className="testimonials__cardComa">""</span>
      <p className="testimonials__cardText">{testimonial.review}</p>
      <span className="testimonials__cardPosition">
        -By {testimonial.name}, {testimonial.position}
      </span>
    </div>
  );
};

export default TestimonialCard;
