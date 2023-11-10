import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

// icons from react-icons
import { LuSearch } from "react-icons/lu";
import { SlUser } from "react-icons/sl";
// react icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiCrossMark } from "react-icons/gi";

// components
import { loadStorage } from "../../utils/persistLocalStorage";

// constant data
import navbarData from "./data";

const Navbar = () => {
  const user = loadStorage("user");
  const [activeUserMenu, setActiveUserMenu] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const pathName = window.location.pathname;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };

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

          {user?.username ? (
            <div
              className="navbar__auth"
              onClick={() => setActiveUserMenu(!activeUserMenu)}
            >
              <SlUser className="navbar__auth--userIcon" />
              <span className="navbar__auth--loginText">{user.username}</span>

              {activeUserMenu ? (
                <div
                  className={
                    activeUserMenu
                      ? "navbar__auth__userMenu active__userMenu"
                      : "navbar__auth__userMenu"
                  }
                >
                  <span
                    className="navbar__auth__userMenu--item"
                    onClick={handleLogout}
                  >
                    Logout
                  </span>
                </div>
              ) : null}
            </div>
          ) : (
            <Link to="/login" className="navbar__auth">
              <SlUser className="navbar__auth--userIcon" />
              <span className="navbar__auth--loginText">Login / Register</span>
            </Link>
          )}

          <div className="mobile__menu">
            <div
              className="mobile__menuIcon"
              onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            >
              {activeMobileMenu ? <GiCrossMark /> : <HiOutlineMenuAlt3 />}
            </div>

            {activeMobileMenu && (
              <div className="mobile__menuContent">
                <div className="mobile__menuList">
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
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
