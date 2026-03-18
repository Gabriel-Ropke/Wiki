import("./header.css");
import logo from "../../assets/Logo.png";

export function Header({ isOpen, toggleMenu, searching, closeSearching }) {
  return (
    <>
      <button
        className="menu-btn"
        onClick={searching ? closeSearching : toggleMenu}
      >
        <span
          className={`${isOpen ? "open" : ""} ${searching ? "searching" : ""}`}
        ></span>
      </button>
      <header className={isOpen ? "" : "open"}>
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
    </>
  );
}
