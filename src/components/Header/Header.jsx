import("./Header.css");
import { useState, useEffect } from "react";
import logo from "../../assets/Logo.png";
import { Navbar } from "../Navbar/Navbar";
import { useUI } from "../../contexts/UIContext";
import { Link, useLocation } from "react-router-dom";

export function Header({ }) {
  const { closeSearching, activeSearching, searching, isMenuOpen, toggleMenu, closeMenu } = useUI();
  const location = useLocation();

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);
  return (
    <>
      <header className={isMenuOpen ? "" : "open"}>
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <ul className="login-header-area">
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <a href="#register">Register</a>
          </li>
        </ul>
      </header>
      <button
        className={`menu-btn ${isMenuOpen ? "open" : ""}`}
        onClick={searching ? closeSearching : toggleMenu}
      >
        <span
          className={`${isMenuOpen ? "open" : ""} ${searching ? "searching" : ""}`}
        ></span>
      </button>
      <Navbar
        activeSearching={activeSearching}
        isOpen={isMenuOpen}
        searching={searching}
      />
    </>
  );
}
