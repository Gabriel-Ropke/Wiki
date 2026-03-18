import "./navbar.css";
export function Navbar({ isOpen }) {
  return (
    <nav className={isOpen ? "nav-menu" : "nav-menu closed"}>
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
