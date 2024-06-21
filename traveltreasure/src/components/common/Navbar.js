import React from "react";
import { Link } from "react-router-dom";
import "../../styles/homePage/navbar.css";

function Navbar() {
  return (
    <header className="header">
      <nav className="NavBar">
        <div className="navUpperPart">
          <Link to="/home" className="logoContainer">
            <h1 className="logo">
              <span className="logoLeft">Travel</span>
              <span className="logoRight">Treasure</span>
            </h1>
          </Link>
          <ul className="linksContainer">
            <li>
              <Link to="/home">
                <i className="fa-solid fa-house navLinkIcon"></i>Home
              </Link>
            </li>
            <li>
              <Link to="/packages">
                <i className="fa-solid fa-person-walking-luggage navLinkIcon"></i>
                Packages
              </Link>
            </li>
            <li>
              <Link to="/Flights">
                <i className="fa-solid fa-plane-departure navLinkIcon"></i>
                Flights
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa-solid fa-hotel navLinkIcon"></i>Hotels
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa-solid fa-pencil navLinkIcon"></i>Blog
              </Link>
            </li>
            <li>
              <Link to="/myTrips">
                <i class="fa-solid fa-suitcase navLinkIcon"></i>My Trips
              </Link>
            </li>
          </ul>
          <div className="logOut">
            <button>
              <span className="logOutIcon">
                <i className="fa-solid fa-right-from-bracket"></i>
              </span>
              <span className="logOutText">Logout</span>
            </button>
          </div>
          <div className="bars">
            <button>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
