import { selectedCountries } from './selectedCountryManager';

const masterData = {
  indexed: {},
  countryList: [],
  uniqueSources: {},
};

let config;
let sourceData;
let activeSortFn;
let activeSortField;
let activeSortDirection = 'desc';

function flipSortDirection() {
  activeSortDirection = (activeSortDirection === 'desc') ? 'asc' : 'desc';
}

function captureSources(r) {
  config.sourceFields.forEach((f) => {
    if (!masterData.uniqueSources[r[f]] && r[f]) {
      masterData.uniqueSources[r[f]] = {
        name: r[f],
        url: r[`${f}_url`],
      };
    }
  });
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
    };
  } else {
    activeSortFn = function (a, b) {
      return b[activeSortField] - a[activeSortField];
    };
  }
}

export function getCountryList() {
  return masterData.countryList;
}

export function getSources() {
  return Object.keys(masterData.uniqueSources).sort().map((k) => masterData.uniqueSources[k]);
}

export function prepareData(_config, first) {
  config = _config;

  activeSortField = config.amountField;

  sourceData.forEach((r) => {
    let isCountryAdded = false;
    masterData.countryList.forEach((country) => {
      if (country.display === r.country) {
        isCountryAdded = true;
      }
    });

    if (!isCountryAdded) {
      masterData.countryList.push({
        display: r.country,
      });
    }

    masterData.indexed[r.country] = r;

    if (config.amountInverse && first) {
      masterData.indexed[r.country][activeSortField] = 0 - r[activeSortField];
      masterData.indexed[r.country][config.gdpField] = 0 - r[config.gdpField];
    }

    captureSources(r);
  });

  return setData();
}

export function setData(sortField, countriesUpdated) {
  if (!countriesUpdated) {
    setSort(sortField);
  }

  return selectedCountries.list.map((c) => {
    if (masterData.indexed[c.display]) {
      return masterData.indexed[c.display];
    }
    console.warn(`no data for ${c}`);
  }).sort(activeSortFn);
}

export function getActiveSort() {
  return {
    activeSortField,
    activeSortDirection,
  };
}

export function loadSourceData(d) {
  sourceData = d;
}
