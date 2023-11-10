import React from "react";
import "./homeWhyUs.scss";

// components
import Wrapper from "../../wrapper/Wrapper";
import SectionHeader from "../../sectionHeader/SectionHeader";

// data
import categoryData from "../../../data/categoryData";

const HomeWhyUs = () => {
  return (
    <Wrapper bg={"#dffbf9"}>
      <di className="whyUs">
        <SectionHeader subText="Why Us" mainText="What We Offer" />

        <div className="whyUsContainer">
          <div className="whyUs__left">
            <img
              src="https://images.pexels.com/photos/18684565/pexels-photo-18684565/free-photo-of-old-tenements-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              loading="lazy"
            />
          </div>

          <div className="whyUs__right">
            <h3 className="aboutUsdetails__nameTitle">About Us</h3>
            <h2 className="aboutUsdetails__title">
              Why Select Us for vacation
            </h2>

            <span className="aboutUsdetails__subText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quidem voluptate, officiis, quas voluptas dolorum
              voluptatum quia consequatur ipsam nesciunt. Quisquam voluptatem,
              quidem voluptate, officiis, quas voluptas dolorum voluptatum quia
              consequatur ipsam nesciunt.
            </span>
            <span className="aboutUsdetails__subText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quidem voluptate, officiis, quas voluptas dolorum.d
            </span>

            <button>Contact Us</button>
          </div>
        </div>

        <div className="categories">
          {categoryData.map((category) => (
            <div className="category" key={category.id}>
              {category.icon}

              <div className="category__content">
                <span className="category__title">{category.name}</span>
                <span className="category__titleSub">{category.achived}</span>
              </div>
            </div>
          ))}
        </div>
      </di>
    </Wrapper>
  );
};

export default HomeWhyUs;
