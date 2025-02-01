import React, { useState } from "react";
import HighlightCarousel from "./MainPageComponents/HighlightCarousel";
import ReviewsCarousel from "./MainPageComponents/ReviewsCarousel";
import Logo from "./Photos/LogoMain.jpeg";

import "./MainPage.css";

const MainPage = (props) => {
  return (
    <div
      id="pageDiv"
      style={{
        height: "100vh",
        width: "100vw",
      }}>
      <div id="introContainer">
        <div id="logoMenu">
          <img src={Logo} alt="Fox&BraidLogo" id="logoImage" />
          <div id="socialsContainer"></div>
        </div>
        <div id="aboutMeBlurb">
          <p>
            Fox&Braid is a licensed cosmetologist with an emphasis on the bridal
            industry. Victoria provides stunning hair styling services as well
            as beautiful makeup to couples to help them look their absolute best
            on their big day. Victoria specializes in soft and elegant updos and
            timeless makeup- leaving her clients with the perfect look on their
            romantic celebration. She also provides her exceptional services
            on-site in order to reduce the last minute wedding day stress of her
            clients. Accomodations can be made for assistance in case of larger
            bridal parties.
          </p>
        </div>
      </div>
      <HighlightCarousel />
      <ReviewsCarousel />
    </div>
  );
};

export default MainPage;
