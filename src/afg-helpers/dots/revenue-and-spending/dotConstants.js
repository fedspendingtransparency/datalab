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
    let width = chartWidth;
    if(typeof window != 'undefined' && window.innerWidth <= 959) {
        width = width * .645;
    }
    const workingWidth = width - dotConstants.radius;
    dotsPerRow = Math.floor(workingWidth / dotConstants.offset.x);
}
