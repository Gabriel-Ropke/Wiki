export const grassConfig = {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 30,
      density: { enable: true, area: 800 },
    },
    color: {
      value: ["#3e8e41", "#5cb85c", "#a0d468"], // Tons de verde orgânico
    },
    shape: {
      type: "polygon", // Usar polígono para dar uma forma menos circular
      options: {
        polygon: {
          sides: 5, // Forma de pentágono irregular
        },
      },
    },
    opacity: {
      value: { min: 0.3, max: 0.8 },
    },
    size: {
      value: { min: 2, max: 8 },
    },
    move: {
      enable: true,
      speed: 1.5, // Velocidade de queda lenta
      direction: "bottom", // Caem
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
      // Adiciona o movimento de oscilação lateral (wobble)
      wobble: {
        enable: true,
        distance: 10,
        speed: 5,
      },
    },
    // Adiciona rotação para as folhas girarem enquanto caem
    rotate: {
      value: { min: 0, max: 360 },
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
    },
  },
  interactivity: {
    events: {
      resize: true,
    },
  },
  retina_detect: true,
};
