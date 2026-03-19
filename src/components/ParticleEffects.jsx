import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// Importaremos as configurações que vamos criar a seguir
import { fireConfig } from "./configs/fireParticleConfig";
import { waterConfig } from "./configs/waterParticleConfig";
import { grassConfig } from "./configs/grassParticleConfig";

const ParticleEffect = ({ type }) => {
  // Função obrigatória para inicializar o motor de partículas
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Seleciona a configuração baseada no tipo recebido via props
  let config;
  switch (type) {
    case "fire":
      config = fireConfig;
      break;
    case "water":
      config = waterConfig;
      break;
    case "grass":
      config = grassConfig;
      break;
    case "fighting":
      config = fireConfig;
      break;
    default:
      config = {}; // Configuração vazia se o tipo não for reconhecido
  }

  return (
    <Particles
      id={`particles-${type}`} // ID único para evitar conflitos
      init={particlesInit}
      options={config}
      // Estilização para garantir que as partículas fiquem atrás do conteúdo, se necessário
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1, // Coloca atrás de outros elementos
      }}
    />
  );
};

export default ParticleEffect;
