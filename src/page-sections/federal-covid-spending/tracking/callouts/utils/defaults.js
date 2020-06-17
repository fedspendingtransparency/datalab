const defaults = {
	starterHeight: 34,
	endingHeight: 4,
	lineStroke: 1,
	lineHeight: 14,
	lineColor: '#666',
	textPosition: null,
	fontSize: '14px',
	fontColor: '#555',
	mdFontSize: '12px',
	smFontSize: '10px',
};

defaults.textPosition = parseFloat(defaults.starterHeight + defaults.lineStroke + defaults.endingHeight + defaults.lineHeight);

export default defaults;