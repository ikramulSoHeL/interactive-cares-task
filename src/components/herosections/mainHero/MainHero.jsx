import React from "react";
import "./mainHero.scss";

const MainHero = () => {
  return (
    <div className="mainHero">
      <div
        className="mainHero__content"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/18957568/pexels-photo-18957568/free-photo-of-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}
      >
        <h1 className="mainHero__title">Welcome to the MainHero</h1>
        <p className="mainHero__subtitle">This is the MainHero subtitle</p>
      </div>

      <div className="destinationSearch">
        <form action="" className="dSearch__form">
          <div className="formFroup">
            <span>Destination</span>
            <div className="input__group">
              <i className="fas fa-map-marker-alt"></i>
              <input type="text" placeholder="Where are you going?" />
            </div>
          </div>
          <div className="formFroup">
            <span>Type</span>
            <div className="input__group">
              <i className="fas fa-map-marker-alt"></i>
              <input type="text" placeholder="Where are you going?" />
            </div>
          </div>
          <div className="formFroup">
            <span>When?</span>
            <div className="input__group">
              <i className="fas fa-map-marker-alt"></i>
              <input type="date" placeholder="Where are you going?" />
            </div>
          </div>
          <div className="formFroup">
            <span>Guests</span>
            <div className="input__group">
              <i className="fas fa-map-marker-alt"></i>
              <input type="text" placeholder="Where are you going?" />
            </div>
          </div>

          <div className="formFroup">
            <button>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainHero;
