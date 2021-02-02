import CategoryData from '../../../../../static/americas-finance-guide/data/federal_revenue_trends.csv';

export function trendData() {
	const indexed = {};

	CategoryData.forEach(r => {
		if (isNaN(r.federal_revenue_adjusted)) {
			return;
		}

		indexed[r.parent_plain] = indexed[r.parent_plain] || {
			name: r.parent_plain,
			officialName: r.parent_plain,
			values: [],
			subcategories: {},
		};

		if (r.child) {
			indexed[r.parent_plain].subcategories[r.child_plain] = indexed[
				r.parent_plain
			].subcategories[r.child_plain] || {
				name: r.child_plain,
				officialName: r.child,
				values: [],
			};

			indexed[r.parent_plain].subcategories[r.child_plain].values.push({
				year: r.fiscal_year,
				amount: parseFloat(r.federal_revenue_adjusted),
			});
		} else {
			indexed[r.parent_plain].values.push({
				year: r.fiscal_year,
				amount: parseFloat(r.federal_revenue_adjusted),
			});
		}
	});

	return Object.keys(indexed).map(c => {
		indexed[c].subcategories = Object.keys(indexed[c].subcategories).map(
			s => indexed[c].subcategories[s]
		);

		return indexed[c];
	});
}
