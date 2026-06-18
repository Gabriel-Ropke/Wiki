export const fireConfig = {
  fullScreen: { enable: false }, // Não queremos que ocupe a tela inteira, apenas o container pai
  particles: {
    number: {
      value: 80, // Quantidade de partículas
      density: { enable: true, area: 800 },
    },
    color: {
      value: ["#ff9100", "#ff3c00", "#ff0000"], // Gradiente de cores do fogo
    },
    shape: {
      type: "circle", // Forma simples, a mágica está no movimento e cor
    },
    opacity: {
      value: { min: 0.1, max: 0.8 }, // Opacidade variável
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 6 }, // Tamanhos variados
      animation: {
        enable: true,
        speed: 4,
        minimumValue: 0.1, // Diminuem até sumir
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 3, // Velocidade de subida
      direction: "top", // Sobem
      random: true, // Movimento um pouco aleatório
      straight: false, // Não sobem em linha reta perfeita
      outModes: {
        default: "out", // Somem ao sair da área
      },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true,
    },
  },
  retina_detect: true,
};
