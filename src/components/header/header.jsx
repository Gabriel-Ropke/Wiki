import("./header.css");
import { useState } from "react";
import logo from "../../assets/Logo.png";
import { Navbar } from "../navbar/navbar";

export function Header({}) {
  /* Search Function */
  const [searching, setSearching] = useState(false);
  function activeSearching() {
    setSearching(true);
  }
  function closeSearching() {
    setSearching(false);
  }
  /* Navbar Function */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }
  return (
    <>
      <button
        className={`menu-btn ${isMenuOpen ? "open" : ""}`}
        onClick={searching ? closeSearching : toggleMenu}
      >
        <span
          className={`${isMenuOpen ? "open" : ""} ${searching ? "searching" : ""}`}
        ></span>
      </button>
      <header className={isMenuOpen ? "" : "open"}>
        <div></div>
        <div className="logo-container">
          <a href="#home">
            <img src={logo} alt="" />
          </a>
        </div>

        <ul className="login-header-area">
          <li>
            <a href="#login">Log In</a>
          </li>
          <li>
            <a href="#register">Register</a>
          </li>
        </ul>
      </header>
      <Navbar
        activeSearching={activeSearching}
        isOpen={isMenuOpen}
        searching={searching}
      />
    </>
  );
}
