import { useState, useMemo } from "react";
import "./index.css";
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";

function App() {
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

  /* Primary Color Function */
  const primaryColor = useMemo(() => {
    const colors = ["--water", "--fire", "--poison", "--grass", "--fighting"];
    return `rgba(var(${colors[Math.floor(Math.random() * colors.length)]}))`;
  }, []);
  return (
    <div style={{ "--primary-color": primaryColor }} className="container-app">
      <Header
        isOpen={isMenuOpen}
        searching={searching}
        toggleMenu={toggleMenu}
        closeSearching={closeSearching}
      />
      <Navbar
        isOpen={isMenuOpen}
        activeSearching={activeSearching}
        searching={searching}
      />
    </div>
  );
}

export default App;
