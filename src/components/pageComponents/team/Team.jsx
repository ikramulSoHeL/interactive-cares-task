import React from "react";
import "./team.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// components
import Wrapper from "../../wrapper/Wrapper";
import SectionHeader from "../../sectionHeader/SectionHeader";

// static files
import teamData from "./teamData";
import TeamCard from "../../cards/teamCard/TeamCard";

const Team = () => {
  return (
    <Wrapper>
      <div className="team">
        <SectionHeader subText="Our Team" mainText="Meet Our Dedicated Team" />

        <Swiper
          className="teamContainer"
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1124: {
              slidesPerView: 4,
            },
          }}
        >
          {teamData.map(({ id, name, position, img }) => (
            <SwiperSlide key={id}>
              <TeamCard key={id} img={img} name={name} position={position} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Team;
