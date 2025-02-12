import React from "react";
import "./MainPage.css";
import "../FoxAndBraid.css";

const Services = () => {
  return (
    <div className="servicesPageDiv fontPrimary">
      <div id="servicesDiv">
        <h1>Services</h1>
        <ul id="servicesList">
          <li className="servicesListItem">
            <span>Consultations</span>
            <span></span>
          </li>
          <li className="servicesListItem">
            <span>Blowouts</span>
            <span>$100</span>
          </li>
          <li className="servicesListItem">
            <span>Coloring</span>
            <span></span>
          </li>
          <li className="servicesListItem">
            <span>Haircuts</span>
            <span></span>
          </li>
          <li className="servicesListItem">
            <span>Textured hair styling</span>
            <span></span>
          </li>
          <li className="servicesListItem">
            <span>Updos</span>
            <span>$300</span>
          </li>
          <li className="servicesListItem">
            <span>Hair trial</span>
            <span>$150</span>
          </li>
          <li className="servicesListItem">
            <span>On-site hair services</span>
            <span></span>
          </li>
          <li className="servicesListItem">
            <span>Airbrush makeup</span>
            <span>$300</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
