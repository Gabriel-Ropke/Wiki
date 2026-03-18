import("./header.css");
import logo from "../../assets/Logo.png";

export function Header({ isOpen, toggleMenu }) {
  return (
    <header className={isOpen ? "" : "open"}>
      <button className="menu-btn" onClick={toggleMenu}>
        <span className={isOpen ? "open" : ""}></span>
      </button>

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
  );
}
