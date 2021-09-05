import { ClockTemplate } from "../utils/template.js";

export default class Clock {
  constructor($target, tagName) {
    this.$target = $target;
    this.$element = document.createElement(tagName);
    this.$target.appendChild(this.$element);
  }

  getCountryTime(selectTime, $element) {
    const curr = new Date();
    const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000; //UTC 시간
    const COUNTRY_TIME_DIFE = selectTime * 60 * 60 * 1000; //선택한 국가의 시간의 UTC시간과의 차이
    const country_crr = new Date(utc + COUNTRY_TIME_DIFE); //나라별 시간 구하는 법
    const country_crrObj = {
      hours: country_crr.getHours(),
      minutes: country_crr.getMinutes(),
    };
    $element.innerHTML = ClockTemplate(country_crrObj);
  }

  clockWorking(selectTime) {
    //오류 해결 this.$element가 전달되지 않는 오류
    setInterval(this.getCountryTime, 1000, selectTime, this.$element);
  }

  paintClock(timeObj) {
    this.$element.innerHTML = ClockTemplate(timeObj);
  }
}
