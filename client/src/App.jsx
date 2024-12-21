import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
import Portfolio from "./components/Portfolio";
// import Footer from "../components/footerSection/footer";
// import SiteControl from "../components/store/siteControl";

import "./FoxAndBraid.css";
import "./App.css";

function App() {
  return (
        <>
          <NavigationBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
        </>
  );
}

export default App;