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
        <SubHero />
        <AboutUs />
        <WhyUs />
        <Team />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default AboutPage;
