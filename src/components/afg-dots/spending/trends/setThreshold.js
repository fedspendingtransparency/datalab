import {extent, min} from 'd3-array';

const d3 = {extent, min},
    ratio = 0.2,
    overlaps = [],
    maxIterator = 10;

export let dataRange;

function establishRange(data){
    /*
     * The following flattens the data by performing a reduceRight on the array of objects (data). ReduceRight takes
     * two parameters, the first is a function, and the second is the array we want to populate (empty array in this case).
     * The function on the inside takes the empty array and populates it (concat) with the mapped amounts from the values array
     * of each object within data.
     */
    const reduced = data.reduceRight((a,b) => {
        return a.concat(b.values.map(r => r.amount))
    },[]);
    const extent = d3.extent(reduced);

    dataRange = [extent[0], extent[1]];

    extent[0] = d3.min([0,extent[0]]);
    return extent;
}

function findThreshold(extentedData, data){
    let threshold = extentedData[0] + (extentedData[1] - extentedData[0])*ratio;
    return lookForOverlaps(data, threshold);
}

function lookForOverlaps(data, threshold){
    let overlapExtent;
    data.forEach(d => {
        const extent = d3.extent(d.values.map(r => r.amount));
        if(extent[0] <= threshold && extent[1] >= threshold){
            overlaps.push(extent[0],extent[1]);
        }
    });
    if(overlaps.length){
        overlapExtent = d3.extent(overlaps);
        return overlapExtent[1];
    }

    return threshold;
}

export function setThreshold(data){
    const extent = establishRange(data),
     threshold =  findThreshold(extent, data);
    return threshold;
}