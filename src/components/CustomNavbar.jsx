import { useState } from "react";
import "./CustomNavbar.css";
import lines from "./images/lines.png";
import logo from "./images/google.png";
import { Divider } from "@mui/material";
import Pill from "./Pill";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-button">
            <button
              className="hamburger"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <img src={lines} alt="icon" />
            </button>
            <span className="logo">
              <img src={logo} alt="Google" />
            </span>
          </div>
          <div className="pills">
            <Pill
              icon="fa-solid fa-suitcase-rolling"
              content="Travel"
              path="/"
            />
            <Pill
              icon="fa-solid fa-earth-europe"
              content="Explore"
              path="/explore"
            />
            <Pill
              icon="fa-solid fa-plane-up"
              content="Flights"
              path="/flights"
            />
            <Pill icon="fa-solid fa-bed" content="Hotels" path="/hotels" />
            <Pill
              icon="fa-solid fa-house-chimney"
              content="Holiday Rentals"
              path="/holiday-rentals"
            />
          </div>
        </div>
      </nav>
      <Divider />

      {/* Side Navigation Menu */}
      <div className={`side-menu ${isSidebarOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => setIsSidebarOpen(false)}
        >
          <i className="fa-solid fa-suitcase-rolling"></i>
          <span>Travel</span>
        </Link>
        <Link
          to="/explore"
          className={location.pathname === "/explore" ? "active" : ""}
          onClick={() => setIsSidebarOpen(false)}
        >
          <i className="fa-solid fa-earth-europe"></i>
          <span>Explore</span>
        </Link>
        <Link
          to="/flights"
          className={location.pathname === "/flights" ? "active" : ""}
          onClick={() => setIsSidebarOpen(false)}
        >
          <i className="fa-solid fa-plane-up"></i>
          <span>Flights</span>
        </Link>
        <Link
          to="/hotels"
          className={location.pathname === "/hotels" ? "active" : ""}
          onClick={() => setIsSidebarOpen(false)}
        >
          <i className="fa-solid fa-bed"></i>
          <span>Hotels</span>
        </Link>
        <Link
          to="/holiday-rentals"
          className={location.pathname === "/holiday-rentals" ? "active" : ""}
          onClick={() => setIsSidebarOpen(false)}
        >
          <i className="fa-solid fa-house-chimney"></i>
          <span>Holiday Rentals</span>
        </Link>
      </div>
    </>
  );
};

export default CustomNavbar;
