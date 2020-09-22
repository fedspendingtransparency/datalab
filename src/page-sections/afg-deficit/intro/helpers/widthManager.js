export let chartWidth;

export function setChartWidth() {
    if (typeof document !== "undefined") {
        if (window.innerWidth < 960) {
            const newWidth = document.getElementById('viz')
                .getBoundingClientRect().width * .7;
            const minWidth = 224;
            chartWidth = newWidth < minWidth ? minWidth : newWidth
        } else {
            chartWidth = document.getElementById('viz')
                .getBoundingClientRect().width - 10;
        }
    }
}