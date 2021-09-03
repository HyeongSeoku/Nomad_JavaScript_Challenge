export function ClockTemplate(timeObj) {
  const { hours, minutes, seconds } = timeObj;

  return `<h1 class="nowTime">${String(hours).padStart(2, "0")}시${String(
    minutes
  ).padStart(2, "0")}분${String(seconds).padStart(2, "0")}초</h1>`;
}
