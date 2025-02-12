import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../FoxAndBraid.css";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navBar mainColor fontPrimary">
      <button className="menuToggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <div className={`navLinks ${isOpen ? "open" : ""}`}>
        <Link to="/" className="navButton" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link
          to="/Services"
          className="navButton"
          onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <Link
          to="/portfolio"
          className="navButton"
          onClick={() => setIsOpen(false)}>
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="navButton"
          onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        <Link
          to="/booking"
          className="navButton"
          onClick={() => setIsOpen(false)}>
          Booking
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
