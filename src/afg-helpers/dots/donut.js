import { select } from 'd3-selection';
import { arc, pie } from 'd3-shape';
import { fractionToPercent, translator } from 'src/afg-helpers/utils';
import colors from '../../styles/afg/colors.scss';

const d3 = { select, arc, pie },
      radius = 45,
      arcFn = d3.arc(),
      pieFn = d3.pie()
      .sort(null)
      .value(function (d) { return d; });

function setArcRadius(radius) {
  arcFn.outerRadius(radius)
    .innerRadius((radius) * .8);
}

export function createDonut(container, percent, diameter, fillColor) {
  const absPercent = Math.abs(percent),
        isNegativeVal = percent < 0,
        shadedColorIterator = isNegativeVal ? 1 : 0,
        g = container.append('g')
        .attr('transform', translator(diameter / 2, diameter / 2));

  let data = [absPercent * 100, 100 - absPercent * 100];

  if(isNegativeVal){
    data = data.reverse();
  }

  setArcRadius(diameter / 2);


  const pie = g.selectAll(".arc")
        .data(pieFn(data))
        .enter()
        .append("g")
        .attr("class", "arc");

  const donut = pie.append("path")
        .attr("d", arcFn);

  donut.style("fill", function (d, i) {
    const shadedColor = fillColor || '#dd6666';
    return (i === shadedColorIterator) ? shadedColor : '#dddddd'
  });

  g.append('text')
    .text(Math.round(absPercent * 100) + '%')
    .attr('fill', colors.textColorParagraph)
    .attr('font-size', diameter/4)
    .attr('text-anchor', 'middle')
    .attr('font-weight', 'bold')
    .attr('y', diameter*0.08);

  if (typeof window !== 'undefined' && window.innerWidth <= 959) {
    const text = d3.select('.donut')
      .append('g')
      .attr('transform', translator(diameter / 2, diameter))
      .append('text')
      .attr('fill', colors.textColorParagraph)
      .attr('font-size', diameter/4)
      .attr('text-anchor', 'left')
      .attr('font-weight', 'bold');

    text.append('tspan')
      .attr('x', diameter / 2 + 10)
      .attr('dy', -diameter * .75)
      .text(`Federal debt`);

    text.append('tspan')
      .attr('x', diameter / 2 + 10)
      .attr('dy', diameter/4 + 4)
      .text(`accounted for ${Math.round(absPercent * 100)}%`);

    text.append('tspan')
      .attr('x', diameter / 2 + 10)
      .attr('dy', diameter/4 + 4)
      .text(`of the U.S. economy`);
  }
}
