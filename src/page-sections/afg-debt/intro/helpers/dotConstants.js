import { chartWidth } from "./widthManager";

export const dotConstants = {
    offset: {
        x: 5,
        y: 6
    },
    radius: 2
};

export let dotsPerRow;

export function setDotsPerRow() {
    let chartWidth = chartWidth;
    if(typeof window != 'undefined' && window.innerWidth <= 959) {
        chartWidth = chartWidth * .645;
    }

    const workingWidth = chartWidth - dotConstants.radius;

    dotsPerRow = Math.floor(workingWidth / dotConstants.offset.x);
}