export let chartWidth;

export function setChartWidth(multiplier, element) {
    if (typeof document !== "undefined") {
        if (window.innerWidth < 960) {
            const m = multiplier || 1
            const e = element || 'viz'
            const newWidth = document.getElementById(e)
                .getBoundingClientRect().width * m;
            const minWidth = 224;
            chartWidth = newWidth < minWidth ? minWidth : newWidth
        } else {
            chartWidth = document.getElementById('viz')
                .getBoundingClientRect().width - 10;
        }
    }
}