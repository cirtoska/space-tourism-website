import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="space tourism logo" className="logo" />
        </div>
        {/* <button
          className="close-btn"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <GrClose className="close-icon" />
        </button> */}
        <button
          className="hamburger-btn"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {isNavExpanded ? (
            <IoClose className="close-icon" />
          ) : (
            <GiHamburgerMenu className="hamburger-icon" />
          )}
        </button>
        <ul className={isNavExpanded ? "nav-links expanded" : "nav-links"}>
          <li className="nav-link">
            <NavLink to="/">
              <span className="nav-num">00</span>Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/destination">
              <span className="nav-num">01</span>Destination
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/crew">
              <span className="nav-num">02</span>Crew
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/technology">
              <span className="nav-num">03</span>Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
