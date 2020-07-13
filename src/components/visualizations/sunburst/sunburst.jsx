import './sunburst.scss';
import React from 'react';
import * as d3 from 'd3v3';

export default class Sunburst extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: null,
			data: props.items,
		};

		// Default values set from props
		this.title = props.title.categoryLabel;
		this.centerTextHeading = props.title.centerText;
		this.levels = props.levels;
		this.leaf = props.leaf;
		this.wedgeColors = props.wedgeColors;
		this.centerColor = props.centerColor; // transparent to show #center

		// Other variables
		this.formatNumber = d3.format('$,.0f');
		this.centerGroup;
		this.chartData; // ref to current data parent (only for center label)
		this.svg;
		this.hierarchy;
		this.chartArray;
		this.innerRadius;
		this.maxHeight;
		this.width = 900;
		this.height;
		this.arc;
		this.radius;
		this.xScale;
		this.yScale;
		this.partition;

		this.buildDataHierarchy = this.buildDataHierarchy.bind(this);
		this.isMobile = this.isMobile.bind(this);
		this.isTablet = this.isTablet.bind(this);
		this.getWedgeColor = this.getWedgeColor.bind(this);
		this.drawChart = this.drawChart.bind(this);
		this.createChart = this.createChart.bind(this);
		this.refreshData = this.refreshData.bind(this);
		this.click = this.click.bind(this);
		this.updateCenter = this.updateCenter.bind(this);
		this.setCenterTextLines = this.setCenterTextLines.bind(this);
		this.setWrappedCenterTextLines = this.setWrappedCenterTextLines.bind(this);
		this.showDetailsPane = this.showDetailsPane.bind(this);
		this.wordWrap = this.wordWrap.bind(this);
		this.updateSelection = this.updateSelection.bind(this);
	}

	updateSelection(d) {
		this.setState({ selectedItem: d });
	}

	buildDataHierarchy(title, dataArray) {
		const data = { name: title, children: [] };
		let idSerial = 0;

		dataArray.forEach((d) => {
			// Keep this as a reference to the current level
			let depthCursor = data.children;
			// Go down one level at a time
			this.levels.forEach((property, depth) => {
				// Look to see if a branch has already been created
				let index;
				depthCursor.forEach((child, i) => {
					if (d[property] === child.name) {
						index = i;
					}
				});
				// Add a branch if it isn't there
				if (isNaN(index)) {
					if (depth === this.levels.length - 1) {
						depthCursor.push({ id: d.id, name: d[property], children: [] });
					} else {
						depthCursor.push({ id: idSerial++, name: d[property], children: [] });
					}
					index = depthCursor.length - 1;
				}
				// Now reference the new child array as we go deeper into the tree
				depthCursor = depthCursor[index].children;
				// This is a leaf, so add the last element to the specified branch
				if (depth === this.levels.length - 1) {
					depthCursor.push({ name: d[this.leaf.name], id: d.id, size: d[this.leaf.size] });
				}
			});
		});
		return data;
	}

	isMobile() {
		if (typeof document !== 'undefined') {
			const maxThreshold = 768;
			return document.body.clientWidth <= maxThreshold;
		}
		return false;
	}

	isTablet() {
		if (typeof document !== 'undefined') {
			const minThreshold = 769;
			const maxThreshold = 1199;
			return (minThreshold <= document.body.clientWidth && document.body.clientWidth <= maxThreshold);
		}
		return false;
	}

	getWedgeColor(d) {
		if (d.depth === 0) {
			return this.centerColor;
		}
		// fill with colorIndex color (or ancestors')
		while (d.depth > 1) {
			d = d.parent;
		}
		return this.wedgeColors[d.colorIndex];
	}

	drawChart(data) {
		this.createChart();
		this.refreshData(data);
	}

	createChart() {
		d3.select('#sunburst').selectAll('*').remove();

		this.svg = d3.select('#sunburst')
			.append('svg')
			.attr('viewBox', `0 0 ${this.width} ${this.height}`)
			.attr('preserveAspectRatio', 'xMidYMid meet')
			.append('g')
			.attr('transform', `translate(${this.width / 2},${this.height / 2})`);

		const sunburstSvg = d3.select('#sunburst svg')
			.attr('aria-labelledby', 'sunburst_description')
    ;

		sunburstSvg.append('desc')
			.attr('id', 'sunburst_description')
			.html(this.props.altText)
		;
	}

	refreshData(data) {
		this.svg.selectAll('path').remove();
		const paths = this.svg.selectAll('path').data(data);
		paths.enter()
			.append('path')
			.attr('d', this.arc)
			.attr('class', (d) => `depth${d.depth}`)
			.attr('fill', (d) => this.getWedgeColor(d))
		// .on('mouseover', hover)
			.on('click', this.click)
			.append('title')
			.text((d) => d.name.replace(/CFDA/i, '').replace(/PSC/i, '').trim());
		this.click(data[0]); // simulate clicking center to reset zoom
	}

	click(d) {
		this.updateSelection(d);
		const classContext = this;
		this.updateCenter(d);
		this.svg.transition()
			.duration(750)
			.tween('scale', () => {
				// adjust xScale domain values to expand/contract selected sector (no changes to radii (y))
				const i = d3.interpolateArray(classContext.xScale.domain(), [d.x, d.x + d.dx]);
				return (t) => {
					classContext.xScale.domain(i(t));
				};
			})
			.selectAll('path')
			.attrTween('d', (d) => function () {
				return classContext.arc(d);
			})
		;
	}

	clickById(id) {
		// since the data passed to search panel was built from the same source as this.chartArray, there will always be a match here
		this.click(this.chartArray.find((i) => i.id === id));
	}

	updateCenter(d) {
		this.chartData = this.chartArray[0];
		const boundingBox = this.innerRadius * 2 / Math.sqrt(2);

		d3.select('text#tab').remove();

		const labelFontSize = 1;
		const lineHeight = 1.1;
		const doubleSpace = 2;
		const mediumText = 1.25;
		const largeText = 1.75;
		const exLargeText = 2;
		const wordWrapRatio = this.isMobile() ? 5.5 : this.isTablet() ? 3 : 2;
		const smWordWrapRatio = this.isMobile() ? 3 : this.isTablet() ? 2 : 1;

		this.centerGroup = this.svg.append('svg:text').attr('id', 'tab');

		if (d.depth === 0) { // center
			this.setCenterTextLines('center-heading', this.centerTextHeading, mediumText, '0');
			this.setCenterTextLines('center-amount', this.formatNumber(d.value), largeText, lineHeight);
			this.showDetailsPane(null); // hide details panel
		} else if (d.depth === 1) { // category
			this.setCenterTextLines('center-heading', 'Category', labelFontSize, '0');
			this.setWrappedCenterTextLines('center-title', d.name, mediumText, lineHeight, boundingBox * smWordWrapRatio);
			this.setCenterTextLines('center-heading', 'Total FY2018 Funding', labelFontSize, doubleSpace);
			this.setCenterTextLines('center-amount', this.formatNumber(d.value), largeText, lineHeight);
			this.showDetailsPane(null); // hide details panel
		} else {
			this.setCenterTextLines('center-heading', 'Category', mediumText, '0');
			this.setWrappedCenterTextLines('center-title', d.parent.name, largeText, lineHeight, boundingBox * smWordWrapRatio);
			this.setCenterTextLines('center-heading', 'Sub-Category', mediumText, lineHeight * 2);
			this.setWrappedCenterTextLines('center-title', d.name, largeText, lineHeight, this.innerRadius * wordWrapRatio);
			this.setCenterTextLines('center-amount', this.formatNumber(d.value), exLargeText, lineHeight * 2);
			this.showDetailsPane(d); // show details in panel
		}

		/* Scale text to fit */
		const bbox = this.centerGroup.node().getBBox();
		const maxHeight = bbox.height;
		const maxWidth = bbox.width;
		let scale = 1;

		if (maxHeight >= maxWidth) {
			if (maxHeight > boundingBox) {
				scale = boundingBox / maxHeight;
				this.centerGroup.attr('transform', `scale(${scale})`);
			}
		} else if (maxWidth > boundingBox) {
			scale = boundingBox / maxWidth;
			this.centerGroup.attr('transform', `scale(${scale})`);
		}

		const padding = 16 * scale; // 1em = 16px

		this.centerGroup
			.style('cursor', 'pointer')
			.attr('y', -maxHeight / 2 + padding)
			.on('click', () => this.click(this.chartData))
		;
	}

	setCenterTextLines(className, centerTextHeading, textSize, lineHeight) {
		this.centerGroup.append('tspan')
			.attr('x', '0')
			.attr('text-anchor', 'middle')
			.text(centerTextHeading)
			.attr('class', className)
			.style('font-size', () => `${textSize}em`)
			.attr('dy', `${lineHeight}em`)
		;
	}

	setWrappedCenterTextLines(className, centerTextHeading, textSize, lineHeight, boundingBox) {
		this.centerGroup.append('tspan')
			.attr('x', '0')
			.attr('text-anchor', 'middle')
			.text(centerTextHeading)
			.attr('class', className)
			.style('font-size', () => `${textSize}em`)
			.attr('dy', `${lineHeight}em`)
			.call(this.wordWrap, boundingBox)
		;
	}

	showDetailsPane(d) {
		if (!this.isMobile()) {
			this.props.showDetails(d);
		}
	}

	wordWrap(text, maxWidth) {
		const words = text.text().split(/\s+/).reverse();
		let word;
		let line = [];
		const lineHeight = 1.1;
		let tspan;

		tspan = text.text(null)
			.append('tspan')
			.attr('x', 0)
		;
		while (words.length > 0) {
			word = words.pop();
			line.push(word);
			tspan.text(line.join(' '));
			if (tspan.node().getComputedTextLength() >= maxWidth) {
				line.pop();
				tspan.text(line.join(' '));
				line = [word];
				tspan = text.append('tspan')
					.attr('x', 0)
					.attr('dy', `${lineHeight}em`)
					.text(word)
				;
			}
		}
	}

	componentDidMount() {
		this.maxHeight = this.width;
		this.height = this.width;

		this.radius = Math.min(this.width, this.height) / 2;
		this.xScale = d3.scale.linear().range([0, 2 * Math.PI]);
		this.yScale = d3.scale.sqrt().range([0, this.radius]);
		const classContext = this;

		// Initialize d3 visualization
		this.partition = d3.layout.partition().value((d) => d.size);
		this.arc = d3.svg.arc()
			.startAngle((d) => Math.max(0, Math.min(2 * Math.PI, this.xScale(d.x))))
			.endAngle((d) => Math.max(0, Math.min(2 * Math.PI, this.xScale(d.x + d.dx))))
			.innerRadius(function (d) {
				if (d.depth === 1 && (!this.innerRadius || this.innerRadius > 0)) {
					this.innerRadius = Math.max(0, classContext.yScale(d.y));
				}
				return Math.max(0, classContext.yScale(d.y));
			})
			.outerRadius((d) => Math.max(0, classContext.yScale(d.y + d.dy)))
		;

		d3.select(self.frameElement).style('height', `${this.height}px`);

		// Create hierarchy (which sorts by total value), then add colorIndex to 1st level nodes
		this.hierarchy = this.buildDataHierarchy(this.title, this.state.data, this.levels);

		this.chartArray = this.partition.nodes(this.hierarchy).filter((d) => d.depth < 3); // leave off recipients
		this.hierarchy.children.forEach((node, index) => {
			node.colorIndex = index % this.wedgeColors.length;
		});

		// Function calls
		this.drawChart(this.chartArray); // default chart is all grants
	}

	componentDidUpdate(prevProps) {
		if (this.props.items !== prevProps.items) {
			// Default values set from props
			this.state.data = this.props.items;
			this.title = this.props.title.categoryLabel;
			this.centerTextHeading = this.props.title.centerText;
			this.levels = this.props.levels;
			this.leaf = this.props.leaf;
			this.wedgeColors = this.props.wedgeColors;
			this.centerColor = this.props.centerColor;

			this.hierarchy = this.buildDataHierarchy(this.title, this.state.data, this.levels);

			this.chartArray = this.partition.nodes(this.hierarchy)
				.filter((d) => d.depth < 3); // leave off recipients
			this.hierarchy.children.forEach((node, index) => {
				node.colorIndex = index % this.wedgeColors.length;
			});

			this.drawChart(this.chartArray);
		}

		this.updateCenter(this.chartArray[0]); // fill in center in case data set switched while showing table
	}

	render() {
		return (
			<div id="chart-area">
				<div id="chart-container">
					<div id="investment-sunburst">
						<div id="investment-sunburst-viz">
							<div id="sunburst" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
