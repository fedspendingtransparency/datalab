import * as d3 from 'd3v3';

export default function formatNumber(type, number, sig = 2) {
	const formatPercent = d3.format(',.0%');
	const formatActions = d3.format(',');
	const formatDollars = d3.format('$,');
	const formatDollarsText = d3.format(`.${sig}s`);
	let displayValue;

	function additionalRounding(num) {
		// check if trillions

		if (formatDollarsText(num).indexOf('T') > -1) {
			const value = formatDollarsText(Math.round(num)).replace('T', '');
			return parseFloat(value).toFixed(2).;
		}

		const value = formatDollarsText(Math.round(num)).replace('T', '');
		return parseInt(value);
	}

	if (isNaN(number)) {
		return 'NA';
	}

	switch (type) {
	case 'percent':
		return formatPercent(number);
	case 'actions':
	case 'number':
		return formatActions(number);
	case 'dollars':
		return formatDollars(Math.round(number));
	case 'dollars text':
		displayValue = additionalRounding(number);
		return (
			`$${formatDollarsText(displayValue)
				.replace('k', ' thousand')
				.replace('M', ' million')
				.replace('G', ' billion')
				.replace('T', ' trillion')}`
		);
	case 'dollars suffix':
		displayValue = additionalRounding(number);
		return (
			`$${formatDollarsText(displayValue)
				.replace('G', ' B')
				.replace('M', ' M')
				.replace('k', ' k')
				.replace('T', ' T')}`

		);
	default:
		return '';
	}
}
