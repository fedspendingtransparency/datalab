// threshold is an estimated percentage of the bar
const threshold = {
  outlayLabelOffset: 1,
  outlayLabelWidth: 10,
  padding: 5,
  tabletPadding: 15,
  mobilePadding: 20,
  obligatedLabelWidth: 10,
  unobligatedLabelOffset: 80,
  mobileUnobligatedLabelOffset: 65,
  tabletUnobligatedLabelOffset: 70,
  modalUnobligatedLabelOffset: 75,
  rightOffset: 90,
}

threshold['obligatedLabelOffset'] = parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding);

export default threshold;