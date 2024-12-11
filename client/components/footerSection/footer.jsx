import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import ".../src/assets/FoxAndBraid.css";

const Footer = (props) => {
  return (
    <>
      <footerContainer className="mainColor font-primary footerContainer">
        <NavLink to="/contact" style={{}}>
          Contact
        </NavLink>
        <NavLink to="/aboutMe" style={{}}>
          About Me
        </NavLink>
        <NavLink to="/portfolio" style={{}}>
          Portfolio
        </NavLink>
        <image src="FoxAndBraid Assets\IMG_5907.jpeg"></image>
      </footerContainer>
    </>
  );
};

export default Footer;
