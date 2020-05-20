const defaults = {
  starterHeight: 34,
  endingHeight: 4,
  lineStroke: 1,
  lineHeight: 14,
  lineColor: '#666',
  textPosition: null,
  fontSize: '14px',
  fontColor: '#666'
}

defaults['textPosition'] = parseFloat(defaults.starterHeight + defaults.lineStroke + defaults.endingHeight + defaults.lineHeight);

export default defaults;