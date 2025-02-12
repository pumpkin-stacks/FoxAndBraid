import React from "react";
import { Link } from "react-router-dom";

import "../FoxAndBraid.css";
import Logo from "./Photos/LogoMain.jpeg";

const Footer = () => {
  return (
    <footer className="footer mainColor fontPrimary">
      <div className="footerLinks">
        <Link to="/contact" className="navButton">
          Contact
        </Link>
        <Link to="/Services" className="navButton">
          Services
        </Link>
        <Link to="/portfolio" className="navButton">
          Portfolio
        </Link>
      </div>
      <img src={Logo} className="footerLogo" alt="Fox&BraidLogo" />
    </footer>
  );
};

export default Footer;
