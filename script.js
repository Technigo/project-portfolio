var granimInstance = new Granim({
  element: "#gradient-header",
  direction: "top-bottom",
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ["#ff5e00", "#eba1d3"],
        ["#00c8ff", "#e6a1d5"],
        ["#5bff00", "#e816e7"],
      ],
    },
  },
});
