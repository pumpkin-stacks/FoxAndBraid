import React from "react";
import { Link } from "react-router-dom";

import "../FoxAndBraid.css";
import Logo from "./Photos/LogoMain.jpeg";

const Footer = (props) => {
  return (
    <div style={{ maxHeight: "15%" }}>
      <footerContainer class="mainColor flexboxCenter">
        <Link to="/contact">
          <button>Contact</button>
        </Link>
        <Link to="/aboutMe">
          <button>About Me</button>
        </Link>
        <Link to="/portfolio">
          <button>Portfolio</button>
        </Link>
        <img src={Logo} style={{ maxHeight: "10%", maxWidth: "10%" }} />
      </footerContainer>
    </div>
  );
};

export default Footer;
