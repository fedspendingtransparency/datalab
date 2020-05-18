const defaults = {
  starterHeight: 30,
  endingHeight: 5,
  lineStroke: 1,
  lineHeight: 14,
  lineColor: '#ddd',
  textPosition: null,
  fontSize: '12px'
}

defaults['textPosition'] = Number.parseFloat(defaults.starterHeight + defaults.lineStroke + defaults.endingHeight + defaults.lineHeight).toFixed(2);


export default defaults;