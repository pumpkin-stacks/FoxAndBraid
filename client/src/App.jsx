import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import MainPage from "./components/MainPage";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";

import "./FoxAndBraid.css";
import "./App.css";

function App() {
  return (
    <div
      className="flexboxCenterColumn"
      style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <NavigationBar className="navBar" />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
