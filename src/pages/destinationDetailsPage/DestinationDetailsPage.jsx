import React from "react";
import "./destinationDetailsPage.scss";
import Layout from "../../components/layout/Layout";
import SubHero from "../../components/herosections/subHero/SubHero";
import DestinationGalleryInfo from "./destinationGalleryInfo/DestinationGalleryInfo";
import TourDetails from "./tourDetails/TourDetails";

const DestinationDetailsPage = () => {
  return (
    <Layout title="Destination Details">
      <SubHero
        bgImg={
          "https://images.pexels.com/photos/4633842/pexels-photo-4633842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        mainText={"Destination Details"}
        subLocation={"Home / Destination"}
        locationPath={"Urope"}
      />

      <DestinationGalleryInfo />
      <TourDetails />
    </Layout>
  );
};

export default DestinationDetailsPage;
