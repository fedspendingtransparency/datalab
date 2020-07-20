import * as d3 from 'd3v3';

export default function formatNumber(type, number, sig = 2) {
	const formatPercent = d3.format(',.0%');
	const formatActions = d3.format(',');
	const formatDollars = d3.format('$,');
	const formatDollarsText = d3.format(`.${sig}s`);
	let displayValue;

	function customRounding(num) {
		let value = formatDollarsText(Math.round(num));

		// check if trillions
		if (formatDollarsText(Math.round(num)).indexOf('T') > -1) {
			value = value.replace('T', '');
			return value === '0.0' ? '0' : `${value}T`;
		}

		const abbreviation = value[value.length - 1];
		value = value.substring(0, value.length - 1);
		return value === '0.0' ? '0' : parseFloat(value).toFixed(0) + abbreviation;
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
		displayValue = sig === 3 ? customRounding(number) : formatDollarsText(Math.round(number));
		return (
			`$${displayValue
				.replace('k', ' thousand')
				.replace('M', ' million')
				.replace('G', ' billion')
				.replace('T', ' trillion')}`
		);
	case 'dollars suffix':
		displayValue = sig === 3 ? customRounding(number) : formatDollarsText(Math.round(number));
		return (
			`$${displayValue
				.replace('G', ' B')
				.replace('M', ' M')
				.replace('k', ' k')
				.replace('T', ' T')}`

		);
	default:
		return '';
	}
}
