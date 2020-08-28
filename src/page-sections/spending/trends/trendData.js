import CategoryData from '../../../../libs/assets-OLD/ffg/data/federal_spending_trends.csv';

export function trendData(type){
    const indexed = {},
        filtered = CategoryData.filter(r => r.function === type);

    let arr;

    filtered.forEach(r => {
        if (isNaN(r.federal_spending)) {
            return;
        }

        indexed[r.parent_plain] = indexed[r.parent_plain] || {
            name: r.parent_plain,
            officialName: r.parent,
            values: [],
            subcategories: {}
        };

        if (r.child) {
            indexed[r.parent_plain].subcategories[r.child_plain] = indexed[r.parent_plain].subcategories[r.child_plain] || {
                name: r.child_plain,
                officialName: r.child,
                values: [],
            };

            indexed[r.parent_plain].subcategories[r.child_plain].values.push({
                year: r.fiscal_year,
                amount: r.federal_spending_adjusted
            })
        } else {
            indexed[r.parent_plain].values.push({
                year: r.fiscal_year,
                amount: r.federal_spending_adjusted
            })
        }
    });

    return Object.keys(indexed).map(c => {
        indexed[c].subcategories = Object.keys(indexed[c].subcategories).map(s => indexed[c].subcategories[s]);

        return indexed[c];
    })
}