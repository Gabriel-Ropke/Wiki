import { useLocation, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./AnimatedRoutes.css";

export function AnimatedRoutes({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("idle");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
    } else if (transitionStage === "fadeIn") {
      setTransitionStage("idle");
    }
  };

  return (
    <>
      {transitionStage !== "idle" && (
        <div
          className={`page-transition-overlay ${transitionStage}`}
          onAnimationEnd={handleAnimationEnd}
        ></div>
      )}
      <Routes location={displayLocation}>
        {children}
      </Routes>
    </>
  );
}
