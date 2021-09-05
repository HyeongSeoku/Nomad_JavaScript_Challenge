import ClockController from "./controllers/ClockController.js";
import BackgroundController from "./controllers/BackgroundController.js";

const App = () => {
  const app = document.querySelector("#App");
  const clockTarget = document.querySelector(".clock");

  const backgroundController = new BackgroundController(app);
  const clockController = new ClockController(clockTarget);

  clockController.init();
  backgroundController.init();
};

window.addEventListener("DOMContentLoaded", App);
