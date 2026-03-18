import "./navbar.css";
import { Search } from "lucide-react";
export function Navbar({ isOpen, searching, activeSearching }) {
  return (
    <nav
      className={`nav-menu ${isOpen ? "" : "closed"} ${searching ? "searching" : ""}`}
    >
      <div id="searchInputContainer">
        <input
          type="text"
          id="searchInput"
          placeholder="Pesquise aqui.."
          onClick={activeSearching}
        />
        <label htmlFor="searchInput">
          <Search size={24} />
        </label>
      </div>
      <ul>
        <li>
          <a href="#Pokémon">Pokémon</a>
        </li>
        <li>Quests</li>
        <li>NPC</li>
      </ul>
    </nav>
  );
}
