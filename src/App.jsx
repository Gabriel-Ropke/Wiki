import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import "./index.css";
import { Home } from "./pages/home/home";
import { UIProvider } from "./components/UIContext";

function App() {
  /* Primary Color Function */
  const colors = ["--water", "--fire", "--grass", "--fighting"];
  const primaryColor = useMemo(() => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    return [
      `rgba(var(${colors[Math.floor(randomNumber)]}))`,
      colors[randomNumber],
    ];
  }, []);
  return (
    <UIProvider>
      <div
        style={{ "--primary-color": primaryColor[0] }}
        className="container-app"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/Wiki" element={<Home imageId={primaryColor[1]} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UIProvider>
  );
}

export default App;
