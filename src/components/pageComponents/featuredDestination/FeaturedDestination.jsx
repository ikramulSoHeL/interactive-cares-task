import React from "react";
import "./featuredDestination.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// components
import Wrapper from "../../../components/wrapper/Wrapper";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

// data
import destinationData from "../../../data/destinationData";
import DestinationCard from "../../../components/cards/destinationCard/DestinationCard";

const FeaturedDestination = () => {
  return (
    <Wrapper>
      <div className="featuredDestination">
        <SectionHeader
          subText="Featured Places"
          mainText="Our Top Featured Tours"
        />

        <Swiper
          className="featuredDestination__container"
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
          {destinationData.map((destination) => (
            <SwiperSlide key={destination.id}>
              <DestinationCard destination={destination} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default FeaturedDestination;
