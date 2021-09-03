export function ClockTemplate(timeObj) {
  const { hours, minutes, seconds } = timeObj;

  return `<h1 class="nowTime">${hours}시${minutes}분${seconds}초</h1>`;
}
