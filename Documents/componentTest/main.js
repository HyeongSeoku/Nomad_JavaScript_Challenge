import App from "./components/app.js";
import Header from "./components/header.js";

const app = document.querySelector("#App");

new Header({
  $target: app,
  tagName: "header",
  className: "header-container",
  initialState: {
    isDarkMode: false,
  },
});

new App({
  $target: app,
  tagName: "section",
  className: "main-app",
  initialState: {
    data: [
      { text: "Hi", time: new Date(), isCompleted: false },
      { text: "Bye", time: new Date(), isCompleted: true },
    ],
  },
});
