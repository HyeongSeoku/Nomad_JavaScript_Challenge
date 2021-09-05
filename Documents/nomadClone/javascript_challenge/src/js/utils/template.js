export function ClockTemplate(timeObj) {
  const { hours, minutes } = timeObj;

  return `<h1 class="nowTime">${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}</h1>`;
}
