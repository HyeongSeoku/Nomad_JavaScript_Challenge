import Background from "../views/background.js";

export default class BackgroundController {
  constructor($target) {
    this.$target = $target;
    this.background = new Background(this.$target, "img");
  }
  init() {
    this.background.paintBackground();
  }
}
