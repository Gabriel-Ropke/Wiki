import "./Navbar.css";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

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
          <Link to="/daily">Jogos Diários</Link>
        </li>
        <li>
          <Link to="/pokedex">PokeDéx</Link>
        </li>
        <li>
          <Link to="/pokedle">Pokédle</Link>
        </li>
        <li>
          <Link to="/minigames">Minigames</Link>
        </li>
        <li>
          <Link to="/hackrom">Hack ROMs</Link>
        </li>
        <li>
          <Link to="/">Outros</Link>
        </li>
      </ul>
    </nav>
  );
}
