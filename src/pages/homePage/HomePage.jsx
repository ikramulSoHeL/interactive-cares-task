import React, { useState } from "react";
import "./homePage.scss";

// import components
import Layout from "../../components/layout/Layout";
import MainHero from "../../components/herosections/mainHero/MainHero";
import Wrapper from "../../components/wrapper/Wrapper";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

// data import
import categoryData from "../../data/categoryData";
import topDestinationsData from "../../data/topDestibationsData";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const destinationLoad = localStorage.getItem("destination");
  const user = localStorage.getItem("user");

  const [searchInputs, setSearchInputs] = useState({
    destination: destinationLoad ? JSON.parse(destinationLoad).destination : "",
    date: destinationLoad ? JSON.parse(destinationLoad).date : "",
    username: destinationLoad ? JSON.parse(destinationLoad).username : "",
    email: destinationLoad ? JSON.parse(destinationLoad).email : "",
    phone: destinationLoad ? JSON.parse(destinationLoad).phone : "",
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const { destination, date, username, email, phone } = searchInputs;
    const newBooking = {
      destination,
      date,
      username,
      email,
      phone,
    };
    localStorage.setItem("destination", JSON.stringify(newBooking));

    if (!user) {
      navigate("/login");
      return;
    }
  };

  return (
    <Layout title="Home Page">
      <div className="homePage__container">
        <MainHero />

        <Wrapper>
          <SectionHeader
            subText="Search & Book Your Trip"
            mainText="Top Destinations to Visit in 2023"
          />

          <div className="category__Search">
            {/* <div className="categories">
              {categoryData.map((category, index) => (
                <div className="category" key={index}>
                  <div className="category__image">{category.icon}</div>
                  <div className="category__content">
                    <h3 className="category__title">{category.name}</h3>
                    <p className="category__text">{category.achived}</p>
                  </div>
                </div>
              ))}
            </div> */}

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
                onSubmit={handleBookingSubmit}
              >
                <h3>Search YOur Destination</h3>

                <div className="searchInputs">
                  <div className="searchInputGroup">
                    <label htmlFor="">Destination</label>
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      value={searchInputs.destination}
                      onChange={(e) =>
                        setSearchInputs({
                          ...searchInputs,
                          destination: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="searchInputGroup">
                    <label htmlFor="">Date</label>
                    <input
                      type="text"
                      placeholder="Date"
                      value={searchInputs.date}
                      onChange={(e) =>
                        setSearchInputs({
                          ...searchInputs,
                          date: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="searchInputGroup">
                    <label htmlFor="">Username</label>
                    <input
                      type="text"
                      placeholder="Username"
                      value={searchInputs.username}
                      onChange={(e) =>
                        setSearchInputs({
                          ...searchInputs,
                          username: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="searchInputGroup">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      placeholder="email"
                      value={searchInputs.email}
                      onChange={(e) =>
                        setSearchInputs({
                          ...searchInputs,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="searchInputGroup">
                    <label htmlFor="">Phone</label>
                    <input
                      type="number"
                      placeholder="Where are you going?"
                      value={searchInputs.phone}
                      onChange={(e) =>
                        setSearchInputs({
                          ...searchInputs,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="searchBtn">
                    <button type="submit">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default HomePage;
