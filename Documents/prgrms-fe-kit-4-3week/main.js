import App from "./src/Components/App.js";

const app = document.querySelector("#App");

new App({
  $target: app,
  tagName: "main",
  className: "App",
  initialState: [
    {
      node: [],
    },
  ],
});
