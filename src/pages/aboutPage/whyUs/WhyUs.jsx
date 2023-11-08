import React from "react";
import "./whyUs.scss";

// components
import Wrapper from "../../../components/wrapper/Wrapper";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

// static files
import whyUsData from "./whyUsData";

const WhyUs = () => {
  return (
    <Wrapper bg={"#dffbf9"}>
      <div className="whyUs">
        <SectionHeader subText="Features" mainText="Why Choose Us" />

        <div className="whyUs__container">
          {whyUsData.map(({ id, icon, title, text }) => (
            <div className="whyUs__card" key={id}>
              <div className="whyUs__cardIcon">{icon}</div>
              <h3 className="whyUs__cardTitle">{title}</h3>
              <p className="whyUs__cardText">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default WhyUs;
