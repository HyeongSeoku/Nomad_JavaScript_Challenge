import { BACKGROUND_IMAGES } from "../constants/constant.js";

export default class Background {
  constructor($target, tagName) {
    this.$target = $target;
    this.$element = document.createElement(tagName);
  }
  paintBackground() {
    console.log(this.$element);
    const chosenImage =
      BACKGROUND_IMAGES[Math.floor(Math.random() * BACKGROUND_IMAGES.length)];
    this.$element.src = `src/img/${chosenImage}`;
    document.body.style.backgroundImage = `url(${this.$element.src})`;
    document.body.style.backgroundSize = "100% 100%"; // 배경 이미지 꽉차게
    document.body.style.backgroundRepeat = "no-repeat";
  }
}
