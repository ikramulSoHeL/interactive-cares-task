import React from "react";
import "./aboutPage.scss";

// components
import Layout from "../../components/layout/Layout";
import SubHero from "../../components/herosections/subHero/SubHero";
import AboutUs from "./aboutUs/AboutUs";
import WhyUs from "./whyUs/WhyUs";
import Team from "./team/Team";
import Testimonials from "./testimonials/Testimonials";

const AboutPage = () => {
  return (
    <Layout title="About Page">
      <div className="aboutPage">
        <SubHero
          bgImg={
            "https://images.pexels.com/photos/4633842/pexels-photo-4633842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          mainText={"About"}
          subLocation={"Home"}
          locationPath={"About"}
        />
        <AboutUs />
        <WhyUs />
        <Team />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default AboutPage;
