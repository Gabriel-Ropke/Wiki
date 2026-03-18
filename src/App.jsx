import { useState, useMemo } from "react";
import "./index.css";
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const primaryColor = useMemo(() => {
    const colors = ["--water", "--fire", "--poison", "--grass", "--fighting"];
    return `rgba(var(${colors[Math.floor(Math.random() * colors.length)]}))`;
  }, []);
  return (
    <div style={{ "--primary-color": primaryColor }} className="container-app">
      <Header
        isOpen={isMenuOpen}
        toggleMenu={() =>
          isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
        }
      />
      <Navbar isOpen={isMenuOpen} />
    </div>
  );
}

export default App;
