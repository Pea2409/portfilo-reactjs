import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import "./navbar.css";
import contactImg from "../../assets/contact.png";
import menuBar from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {
            document
              .getElementById("intro")
              .scrollIntoView({ behavior: "smooth" });
          }}
          src={logo}
          alt="Logo"
          className="logo"
        />
        <div className="desktopMenu">
          <Link
            className="desktopMenuListItem"
            to="intro"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="desktopMenuListItem"
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
          <Link
            className="desktopMenuListItem"
            to="profile"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Profile
          </Link>
          <Link
            className="desktopMenuListItem"
            to="client"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Clients
          </Link>
        </div>
        <button
          className="desktopMenuBtn"
          style={{ cursor: "pointer" }}
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contactImg} alt="" className="desktopMenuImg" />
          Contact me
        </button>
      </nav>
    </div>
  );
};
export default Navbar;
