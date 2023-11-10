import React, { useState } from "react";
import "./homePage.scss";

// import components
import Layout from "../../components/layout/Layout";
import MainHero from "../../components/herosections/mainHero/MainHero";
import Wrapper from "../../components/wrapper/Wrapper";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import FeaturedDestination from "../../components/pageComponents/featuredDestination/FeaturedDestination";
import Testimonials from "../../components/pageComponents/testimonials/Testimonials";
import HomeWhyUs from "../../components/pageComponents/homeWhyUs/HomeWhyUs";

// data import
import destinationData from "../../data/destinationData";
import topDestinationsData from "../../data/topDestibationsData";
import { useNavigate } from "react-router-dom";
import {
  delStorage,
  saveStorage,
  loadStorage,
} from "../../utils/persistLocalStorage";

import Toast from "../../components/toast/Toast";
import { createToastMessage } from "../../utils/toastUtil";

const HomePage = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const localDestination = loadStorage("destination");

  const [position] = useState("top-right1");
  const [toastList, setToastList] = useState([]);

  const [searchInputs, setSearchInputs] = useState({
    destination: localDestination ? localDestination?.destination : "",
    date: localDestination ? localDestination?.date : "",
    username: localDestination ? localDestination?.username : "",
    email: localDestination ? localDestination?.email : "",
    phone: localDestination ? localDestination?.phone : "",
  });

  const handleOnChange = (e) => {
    setSearchInputs({
      ...searchInputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    saveStorage("destination", searchInputs);

    if (!user) {
      navigate("/login");
    } else {
      if (
        !searchInputs.destination ||
        !searchInputs.date ||
        !searchInputs.username ||
        !searchInputs.email ||
        !searchInputs.phone
      ) {
        createToastMessage(
          "error",
          "Error",
          "Please Fill All Fields",
          toastList,
          setToastList
        );
        return;
      }

      // complete booking
      createToastMessage(
        "success",
        "Success",
        "Booking Saved",
        toastList,
        setToastList
      );

      // clear search inputs
      setSearchInputs({
        destination: "",
        date: "",
        username: "",
        email: "",
        phone: "",
      });
      // clear local storage
      delStorage("destination");
    }
  };

  return (
    <Layout title="Home Page">
      <div className="homePage__container">
        <MainHero />
        <>
          <Wrapper>
            <SectionHeader
              subText="Search & Book Your Trip"
              mainText="Top Destinations to Visit in 2023"
            />

            <div className="dest__Search">
              <div className="topDestinations">
                {topDestinationsData.map((destination, index) => (
                  <div className="destination" key={index}>
                    <img src={destination.image} alt="" />
                    <h3 className="destination__title">{destination.name}</h3>
                  </div>
                ))}
              </div>

              <div className="search">
                <form
                  action=""
                  className="searchContainer"
                  onSubmit={(e) => handleBookingSubmit(e)}
                >
                  <h3>Search Your Destination</h3>

                  {localDestination?.destination && (
                    <span className="tripSearchText">
                      Your Last Search:{" "}
                      <span>{localDestination.destination} </span>
                      fill the form to book your trip
                    </span>
                  )}

                  <div className="searchInputs">
                    <div className="searchInputGroup">
                      <label htmlFor="">Destination</label>
                      <select
                        value={searchInputs.destination}
                        name="destination"
                        onChange={(e) => handleOnChange(e)}
                      >
                        <option value="">Select Destination</option>
                        {destinationData.map((destination, index) => (
                          <option key={index} value={destination?.name}>
                            {destination?.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="searchInputGroup">
                      <label htmlFor="">Available Dates</label>
                      <select
                        value={searchInputs.date}
                        name="date"
                        onChange={(e) => handleOnChange(e)}
                      >
                        {searchInputs.destination === "" ? (
                          <option value="">Select Destination First</option>
                        ) : (
                          <option value="">Select Date</option>
                        )}

                        {searchInputs.destination &&
                          destinationData
                            .find(
                              (destination) =>
                                destination.name === searchInputs.destination
                            )
                            .availableDates.map((d) => (
                              <option key={d.id} value={d.date}>
                                {d.date}
                              </option>
                            ))}
                      </select>
                    </div>

                    {searchInputs.destination && searchInputs.date && (
                      <>
                        <div className="searchInputGroup">
                          <label htmlFor="">Username</label>
                          <input
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            value={searchInputs.username}
                            onChange={(e) => handleOnChange(e)}
                          />
                        </div>

                        <div className="searchInputGroup">
                          <label htmlFor="">Email</label>
                          <input
                            type="email"
                            placeholder="Enter Email Address"
                            name="email"
                            value={searchInputs.email}
                            onChange={(e) => handleOnChange(e)}
                          />
                        </div>

                        <div className="searchInputGroup">
                          <label htmlFor="">Phone</label>
                          <input
                            type="number"
                            placeholder="Enter Phone Number"
                            name="phone"
                            value={searchInputs.phone}
                            onChange={(e) => handleOnChange(e)}
                          />
                        </div>
                      </>
                    )}

                    <div className="searchBtn">
                      <button type="submit">Book Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Wrapper>
          <Toast
            toastList={toastList}
            position={position}
            autoDelete={true}
            autoDeleteTime={2000}
          />
        </>
        <HomeWhyUs />
        <FeaturedDestination />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default HomePage;
