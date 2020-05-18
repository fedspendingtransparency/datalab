// threshold is an estimated percentage of the bar
const threshold = {
  outlayLabelOffset: 1,
  outlayLabelWidth: 7,
  padding: 12,
  obligatedLabelWidth: 7,
  unobligatedLabelOffset: 80,
  rightOffset: 90,
}

threshold['obligatedLabelOffset'] = Number.parseFloat(threshold.outlayLabelOffset + threshold.outlayLabelWidth + threshold.padding);


export default threshold;