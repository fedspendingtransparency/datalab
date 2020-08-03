const defaults = {
	starterHeight: 34,
	endingHeight: 4,
	lineStroke: 1,
	lineHeight: 14,
	lineColor: '#666',
	textPosition: null,
	fontSize: '0.875rem',
	fontColor: '#555',
	mdFontSize: '0.875rem',
	smFontSize: '0.75rem',
};

defaults.textPosition = parseFloat(defaults.starterHeight + defaults.lineStroke + defaults.endingHeight + defaults.lineHeight);

export default defaults;