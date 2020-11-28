import React from "react";
import { NavLink } from "react-router-dom";
import { route_constants } from "../constants/Routes";
import "./_slider.scss";

const Slider = () => {
  return (
    <div className="hero">
      <div className="slider">
        <ul className="slides">
          <li className="lazy-bg">
            <div className="container">
              <h2 className="slide-title">Yahya Kayani</h2>
              <h3 className="slide-subtitle">Software Engineer</h3>
              <p className="slide-desc">
                An individual who has a passion for making <br></br> great
                looking and optimized web apps.
              </p>
              <NavLink to={route_constants.ABOUT} className="button cut-corner">
                About Me
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slider;
