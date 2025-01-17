import React, { useState } from "react";
import HighlightCarousel from "./MainPageComponents/HighlightCarousel";
import ReviewsCarousel from "./MainPageComponents/ReviewsCarousel";
import Logo from "./Photos/LogoMain.jpeg";
import backgroundVictoriaImage from "./Photos/FoxAndBraid_Assets/3R4A5608.jpeg";

const MainPage = (props) => {
  return (
    <div id="pageDiv" style={{ height: "100vh", width: "100vw" }}>
      <div
        id="introContainer"
        style={{
          backgroundImage: `url(${backgroundVictoriaImage})`,
          maxHeight: "100%",
          maxWidth: "100%",
        }}>
        <img
          src={Logo}
          alt="Fox&BraidLogo"
          style={{ maxHeight: "10%", maxWidth: "10%" }}
        />
        <div id="socialsContainer"></div>
        <div id="aboutMeBlurb"></div>
      </div>
      <HighlightCarousel />
      <ReviewsCarousel />
    </div>
  );
};

export default MainPage;
