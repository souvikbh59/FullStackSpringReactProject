import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  //handle hamburger menu toggle
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  //handle hamburger menu toggle : end

  //handle navbar color change while scrolling down
  const [color, setColor] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  //handle navbar color change while scrolling down:end

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Travel With Souvik</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Destinations">Destinations</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div
        className="hamburger"
        size={20}
        style={{ color: "white" }}
        onClick={handleClick}
      >
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
