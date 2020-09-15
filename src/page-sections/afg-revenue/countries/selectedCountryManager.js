const selected = [],
    lastUpdate = {};

function set(arr) {
    selected.length = 0;
    
    arr.forEach(c => {
        selected.push(c)
    });
    
    selected.sort(function(a,b){
        return a.display > b.display;
    });
}

function remove(country) {
    const i = selected.indexOf(country);

    selected.splice(i, 1);

    lastUpdate.country = country;
    lastUpdate.action = 'remove';
}

function add(country) {
    selected.push(country)
    selected.sort();

    lastUpdate.country = country;
    lastUpdate.action = 'add';
}

export const selectedCountries = {
    set: set,
    remove: remove,
    add: add,
    list: selected,
    lastUpdate: lastUpdate
}