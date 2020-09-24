export let chartWidth;

export function setChartWidth() {
    chartWidth = document.getElementById('viz').getBoundingClientRect().width - 10;
}