import SpendingData from '../../../libs/assets-OLD/ffg/data/federal_spending_categories.csv';

import { min } from 'd3-array';

const d3 = { min },
    dataTypes = [
        'agency',
        'category'
    ];

function stackData(series) {
    let tracker;

    series.forEach((r, i) => {
        if (i === 0) {
            tracker = d3.min([0, series.filter(r => r.amount < 0).reduce((a, c) => a += c.amount, 0)]);
        }

        r.stack0 = tracker;
        r.stack1 = tracker + Math.abs(r.amount);

        tracker += Math.abs(r.amount);

        if (r.subcategories) {
            stackData(r.subcategories)
        }

    })
}

function objectToArray(obj) {
    return Object.keys(obj).map(k => obj[k]);
}

function sortDataAsc(a, b) {
    return a.amount - b.amount;
}

function sortDataDesc(a, b) {
    return b.amount - a.amount;
}

function generateArrayByDataType(dataObj, stack) {
    const currentYearData = objectToArray(dataObj),
        sortFn = stack ? sortDataAsc : sortDataDesc;

    currentYearData.sort(sortFn)

    currentYearData.forEach(r => {
        r.subcategories = objectToArray(r.subcategories).sort(sortFn);

        if (stack) {
            stackData(r.subcategories);
        }
    })

    if (stack) {
        stackData(currentYearData);
    }

    return currentYearData;
}

function getByYear(yyyy) {
    const yearNum = Number(yyyy);
    return SpendingData.filter(r => r.fiscal_year === yearNum)
}

export function indexByYear(yyyy) {
    const indexed = {};

    getByYear(yyyy).forEach(r => {
        let tempChildren;

        indexed[r.function] = indexed[r.function] || {};

        if (r.child) {
            // child rows
            indexed[r.function][r.parent] = indexed[r.function][r.parent] || {
                subcategories: {}
            }

            indexed[r.function][r.parent].subcategories[r.child] = {
                activity: r.child_plain,
                amount: r.federal_spending,
                percent_total: r.percent_total
            }
        } else {
            // parent rows
            tempChildren = (indexed[r.function][r.parent]) ? indexed[r.function][r.parent].subcategories : {};

            indexed[r.function][r.parent] = {
                activity: r.parent_plain,
                amount: r.federal_spending,
                percent_total: r.percent_total,
                subcategories: tempChildren
            }
        }
    });

    return indexed;
}

export function byYear(yyyy, stacked) {
    const currentYear = indexByYear(yyyy),
        result = {};

    dataTypes.forEach(t => {
        result[t] = generateArrayByDataType(currentYear[t], stacked);
    });

    return result;
}
