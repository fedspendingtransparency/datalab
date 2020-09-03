export let chartWidth;

export function setChartWidth() {
    if (typeof document !== "undefined") {
      chartWidth = document.getElementById('viz')
        .getBoundingClientRect().width - 10;
    }
}