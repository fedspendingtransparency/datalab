// threshold is an estimated percentage of the bar
const threshold = {
	outlayLabelOffset: 2,
	outlayLabelWidth: 10,
	padding: 15,
	tabletPadding: 15,
	mobilePadding: 25,
	obligatedLabelWidth: 10,
	unobligatedLabelOffset: 80,
	mobileUnobligatedLabelOffset: 65,
	tabletUnobligatedLabelOffset: 70,
	modalUnobligatedLabelOffset: 73,
	rightOffset: 90,
};

threshold.obligatedLabelOffset = parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding);

export default threshold;