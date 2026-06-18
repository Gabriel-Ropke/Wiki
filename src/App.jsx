import { BrowserRouter, Route } from "react-router-dom";
import { useMemo } from "react";
import "./index.css";
import { Home } from "./pages/Home/Home";
import { UIProvider } from "./contexts/UIContext";
import { Login } from "./pages/Login/Login";
import { AnimatedRoutes } from "./components/AnimatedRoutes/AnimatedRoutes";

import { Pokedex } from "./pages/Pokedex/Pokedex";
import { Daily } from "./pages/Daily/Daily";
import { Pokedle } from "./pages/Pokedle/Pokedle";
import { Minigames } from "./pages/Minigames/Minigames";
import { Hackrom } from "./pages/Hackrom/Hackrom";

function App() {
  /* Primary Color Function */
  const colors = ["--fire", "--grass", "--water", "--fighting"];
  const primaryColor = useMemo(() => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    const baseName = colors[randomNumber];
    return {
      main: `rgba(var(${baseName}))`,
      light: `rgba(var(${baseName}-light))`,
      dark: `rgba(var(${baseName}-dark))`,
      name: baseName,
    };
  }, []);
  return (
    <UIProvider>
      <div
        style={{ 
          "--primary-color": primaryColor.main,
          "--primary-color-light": primaryColor.light,
          "--primary-color-dark": primaryColor.dark
        }}
        className="container-app"
      >
        <BrowserRouter>
          <AnimatedRoutes>
            <Route path="/" element={<Home elementId={primaryColor.name} />} />
            <Route path="/login" element={<Login elementId={primaryColor.name} />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/pokedle" element={<Pokedle />} />
            <Route path="/minigames" element={<Minigames />} />
            <Route path="/hackrom" element={<Hackrom />} />
          </AnimatedRoutes>
        </BrowserRouter>
      </div>
    </UIProvider>
  );
}

export default App;
