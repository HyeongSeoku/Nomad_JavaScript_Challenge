import App from "./src/Components/App.js";

const app = document.querySelector("#Main");

new App({
  $target: app,
  tagName: "main",
  initialState: {
    isLoading: false,
    isRoot: false,
    node: [],
    depth: [],
    selectedFile: [],
  },
});
