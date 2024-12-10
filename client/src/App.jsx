import { useState } from "react";
import FnbMain from "./components/fnbMain";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import {Routes, Route} from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import Booking from "./components/Booking";
import "./App.css";

function App() {

  return (
    <>
        <NavigationBar />
        <div style={{ marginBottom: "20px" }}> </div>
          <Routes>
            <Route path="/" element={<FnbMain />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/booking' element={<Booking />} />
          </Routes>
    </>
  )
}

export default App;