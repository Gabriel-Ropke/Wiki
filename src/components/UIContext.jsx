import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export function UIProvider({ children }) {
  const [searching, setSearching] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeSearching = () => setSearching(true);
  const closeSearching = () => setSearching(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Tudo que estiver aqui dentro será acessível globalmente
  const value = {
    searching,
    activeSearching,
    closeSearching,
    isMenuOpen,
    toggleMenu,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

// Hook customizado para facilitar o uso
export const useUI = () => useContext(UIContext);
