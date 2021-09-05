export default class Weather {
  constructor($target, tagName) {
    this.$target = $target;
    this.$element = document.createElement(tagName);
  }
}
