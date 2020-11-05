export default function drawBracket(svg, xPosition, height, rightSide) {
  const bracket = svg.append('g')
    .classed('bracket', true)
    .attr('transform', `translate(${xPosition},35)`);

  let x1 = -7;
  let x2 = -7;

  if (rightSide) {
    x1 = rightSide + 2;
    x2 = rightSide + 8;
  }

  bracket.append('rect')
    .attr('fill', '#b4b4b4')
    .attr('width', '6')
    .attr('height', '1')
    .attr('x', x1);

  bracket.append('rect')
    .attr('fill', '#b4b4b4')
    .attr('width', '1')
    .attr('height', height)
    .attr('x', x2);

  bracket.append('rect')
    .attr('fill', '#b4b4b4')
    .attr('width', '6')
    .attr('height', '1')
    .attr('x', x1)
    .attr('y', height - 1);
}
