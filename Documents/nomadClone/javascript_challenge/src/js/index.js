import ClockController from "./controllers/ClockController.js";

const App = () => {
  const clockTarget = document.querySelector(".clock");

  const clockController = new ClockController(clockTarget);
  clockController.init();
};

window.addEventListener("DOMContentLoaded", App);
