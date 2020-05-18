const defaults = {
  starterHeight: 30,
  endingHeight: 5,
  lineStroke: 1,
  lineHeight: 14,
  lineColor: '#ddd',
  textPosition: null,
  fontSize: '12px',
  fontColor: '#666'
}

defaults['textPosition'] = parseFloat(defaults.starterHeight + defaults.lineStroke + defaults.endingHeight + defaults.lineHeight);


export default defaults;