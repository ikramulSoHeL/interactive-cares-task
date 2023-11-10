import React from "react";
import "./destinationDetailsPage.scss";
import Layout from "../../components/layout/Layout";
import SubHero from "../../components/herosections/subHero/SubHero";
import DestinationGalleryInfo from "../../components/pageComponents/destinationGalleryInfo/DestinationGalleryInfo";
import TourDetails from "../../components/pageComponents/tourDetails/TourDetails";
import TourOverView from "../../components/pageComponents/tourOverView/TourOverView";

const DestinationDetailsPage = () => {
  return (
    <Layout title="Destination Details">
      <SubHero
        bgImg={
          "https://images.pexels.com/photos/6765847/pexels-photo-6765847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        mainText={"Destination Details"}
        subLocation={"Home / Destination"}
        locationPath={"Urope"}
      />

      <TourDetails />
      <DestinationGalleryInfo />
      <TourOverView />
    </Layout>
  );
};

export default DestinationDetailsPage;
