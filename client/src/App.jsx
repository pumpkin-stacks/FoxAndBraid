import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FnbMain from "../components/pageSection/FnBLandingPage/fnbMain";
import AboutMe from "../components/pageSection/aboutMePage/aboutMe";
import Portfolio from "../components/pageSection/portfolioPage/portfolio";
import Contact from "../components/pageSection/contactPage/contact";
import NavigationBar from "../components/navbarSection/navigationBar";
// import Footer from "../components/footerSection/footer";
// import SiteControl from "../components/store/siteControl";

import "./FoxAndBraid.css";
import "./App.css";

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
        {/* <siteControl> */}
          <NavigationBar />
          <div style={{ marginBottom: "20px" }}>
            <Routes>
              <Route path="/" element={<FnbMain />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        {/* </siteControl> */}
    </div>
  );
}

export default App;
