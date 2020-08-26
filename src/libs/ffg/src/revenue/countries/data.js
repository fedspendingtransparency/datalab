import { selectedCountries } from './selectedCountryManager';

const masterData = {
    indexed: {},
    countryList: [],
    uniqueSources: {}
};

let config,
    sourceData,
    activeSortFn,
    activeSortField,
    activeSortDirection = 'desc';

function flipSortDirection() {
    activeSortDirection = (activeSortDirection === 'desc') ? 'asc' : 'desc';
}

function captureSources(r) {
    config.sourceFields.forEach(f => {
        if (!masterData.uniqueSources[r[f]] && r[f]) {
            masterData.uniqueSources[r[f]] = {
                name: r[f],
                url: r[f + '_url']
            }
        }
    })
}

function setSort(sortField) {
    if (sortField === activeSortField) {
        flipSortDirection();
    } else {
        activeSortField = sortField || activeSortField;
        activeSortDirection = 'desc';
    }

    if (activeSortDirection === 'asc') {
        activeSortFn = function (a, b) {
            return a[activeSortField] - b[activeSortField];
        }
    } else {
        activeSortFn = function (a, b) {
            return b[activeSortField] - a[activeSortField];
        }
    }
}

function handleSpecialCharacterCountries(countryName) {
    let curCountry = countryName;
    if (curCountry) {
        //Currently we only have one country with any special characters, but in any chance we run across more countries
        //with special characters, we should have a place to put them.
        switch (curCountry.toLowerCase()) {
            case 'côte d\'ivoire':
                curCountry = 'Cote d\'Ivoire'; //Plain language for typing purposes.
                break;
        }
    }

    return curCountry;
}

export function getCountryList() {
    return masterData.countryList;
}

export function getSources() {
    return Object.keys(masterData.uniqueSources).sort().map(k => masterData.uniqueSources[k]);
}

export function prepareData(_config) {
    config = _config;

    activeSortField = config.amountField;

    sourceData.forEach(r => {
        let curCountry = handleSpecialCharacterCountries(r.country);

        masterData.countryList.push({
            display: r.country,
            plainName: curCountry
        });

        masterData.indexed[r.country] = r;

        if (config.amountInverse) {
            masterData.indexed[r.country][activeSortField] = 0 - masterData.indexed[r.country][activeSortField];
            masterData.indexed[r.country][config.gdpField] = 0 - masterData.indexed[r.country][config.gdpField];
        }

        captureSources(r);
    });

    return setData();
}

export function setData(sortField, countriesUpdated) {
    if (!countriesUpdated) {
        setSort(sortField);
    }

    return selectedCountries.list.map(c => {
        if (masterData.indexed[c.display]) {
            return masterData.indexed[c.display];
        } else {
            console.warn('no data for ' + c);
        }
    }).sort(activeSortFn);
};

export function getActiveSort() {
    return {
        activeSortField: activeSortField,
        activeSortDirection: activeSortDirection
    }
}

export function loadSourceData(d) {
    sourceData = d;
}