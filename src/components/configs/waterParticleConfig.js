export const waterConfig = {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 40,
      density: { enable: true, area: 800 },
    },
    color: {
      value: "#ffffff", // Cor branca para as bolhas
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.1, max: 0.3 }, // Bem transparentes
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: { min: 3, max: 12 }, // Tamanhos maiores e variados
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 1, // Movimento lento e suave
      direction: "top", // Sobem
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble", // Efeito de "atenuar" ao passar o mouse
      },
    },
    modes: {
      bubble: {
        distance: 200,
        size: 20,
        duration: 2,
        opacity: 0.8,
      },
    },
  },
  retina_detect: true,
};
