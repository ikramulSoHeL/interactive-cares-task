import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

// icons from react-icons
import { LuSearch } from "react-icons/lu";
import { SlUser } from "react-icons/sl";

// constant data
import navbarData from "./data";

const Navbar = () => {
  // take the path name from the url
  const pathName = window.location.pathname;

  console.log(pathName);

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <div className="navbar__logoMenu">
          <div className="navbar__logo">
            <img src="" alt="" />
            <h1 className="navbar__logoText">Trisgo</h1>
          </div>

          <ul className="navbar__links">
            {navbarData.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  key={index}
                  className={
                    pathName === item.path
                      ? "navbar__links--item activeNav"
                      : "navbar__links--item"
                  }
                >
                  {item.title}
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="navbar__authSearch">
          <LuSearch className="navbar__searchIcon" />

          <Link to="/login" className="navbar__auth">
            <SlUser className="navbar__auth--userIcon" />
            <span className="navbar__auth--loginText">Login / Register</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
