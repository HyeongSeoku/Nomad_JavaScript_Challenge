import Clock from "../views/clock.js";
import { CLOCK_VALUE } from "../constants/constant.js";

export default class ClockController {
  constructor($target) {
    this.$target = $target;
    this.ClockView = new Clock(this.$target, "div");
  }
  init() {
    //TODO 가입시 입력한 위치에 따라 CLOCK_VALUE 설정

    this.ClockView.clockWorking(CLOCK_VALUE.USA);
  }
}
