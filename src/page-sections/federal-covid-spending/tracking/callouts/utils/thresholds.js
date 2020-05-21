// threshold is an estimated percentage of the bar
const threshold = {
  outlayLabelOffset: 1,
  outlayLabelWidth: 7,
  padding: 14,
  obligatedLabelWidth: 7,
  unobligatedLabelOffset: 75,
  rightOffset: 90,
}

threshold['obligatedLabelOffset'] = parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding);

export default threshold;