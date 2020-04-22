import * as d3 from 'd3v3';

export default function formatNumber(type, number) {
  const formatPercent = d3.format(',.0%');
  const formatActions = d3.format(',');
  const formatDollars = d3.format('$,');
  const formatDollarsText = d3.format('.2s');

  if (isNaN(number)) {
    return 'NA'
  };

  switch (type) {
    case 'percent':
      return formatPercent(number);
    case 'actions':
    case 'number':
      return formatActions(number);
    case 'dollars':
      return formatDollars(Math.round(number));
    case 'dollars text':
      return (
        '$' + formatDollarsText(Math.round(number))
          .replace('k', ' thousand')
          .replace('M', ' million')
          .replace('G', ' billion')
          .replace('T', ' trillion')
      );
    case 'dollars suffix':
      return (
        '$' + formatDollarsText(Math.round(number))
          .replace('k', ' T')
          .replace('G', ' B')
      );
    default:
      return '';
  }
}
