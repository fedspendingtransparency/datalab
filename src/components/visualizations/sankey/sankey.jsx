import React, { useEffect } from 'react';

import * as d3 from 'd3v3';
import './sankey.scss';
import './sankey-brackets.scss';

import Grid from '@material-ui/core/Grid';
import SankeyBrackets from './sankey-brackets';

function Sankey(props) {
	const { data, sPanel, sTitle, descriptions, altText } = props;

	const margin = {
		top: 0,
		right: 0,
		bottom: 10,
		left: 0,
	};

	const width = 548 - margin.left - margin.right;
	const height = 608 - margin.top - margin.bottom;

	const formatNumber = d3.format('$,.0f'); // zero decimal places
	const format = d => formatNumber(d);

	const color = [
		{
			name: 'Social Security',
			color: '#143e64',
		},
		{
			name: 'Medicare',
			color: '#2869a4',
		},
		{
			name: 'Income Security',
			color: '#0086c8',
		},
		{
			name: 'Health',
			color: '#29e0ff',
		},
		{
			name: 'Net Interest',
			color: '#00b5db',
		},
		{
			name: 'National Defense',
			color: '#aae1f4',
		},
		{
			name: 'General Government',
			color: '#143e64',
		},
		{
			name: 'Agriculture',
			color: '#2869a4',
		},
		{
			name: 'Education, Training, Employment, and Social Services',
			color: '#0086c8',
		},
		{
			name: 'Veterans Benefits and Services',
			color: '#29e0ff',
		},
		{
			name: 'Regional Development, Commerce, and Housing',
			color: '#00b5db',
		},
		{
			name: 'Natural Resources and Environment',
			color: '#aae1f4',
		},
		{
			name: 'Administration of Justice',
			color: '#143e64',
		},
		{
			name: 'Transportation',
			color: '#2869a4',
		},
		{
			name: 'International Affairs',
			color: '#0086c8',
		},
		{
			name: 'Energy, Science, Space, and Technology',
			color: '#29e0ff',
		},
		{
			name: 'Insurance Claims and Indemnities',
			color: '#461e45',
		},
		{
			name: 'Grants, Subsidies, and Contributions',
			color: '#783877',
		},
		{
			name: 'Interest and Dividends',
			color: '#b56db4',
		},
		{
			name: 'Personnel Compensation and Benefits',
			color: '#e0b1df',
		},
		{
			name: 'Refunds',
			color: '#f8dbf8',
		},
		{
			name: 'Advisory, R&D, Medical, and Other Contracts',
			color: '#783877',
		},
		{
			name: 'Acquisition of Assets',
			color: '#783877',
		},
		{
			name: 'Printing and Supplies',
			color: '#b56db4',
		},
		{
			name: 'Other',
			color: '#e0b1df',
		},
		{
			name: 'Travel and Transportation',
			color: '#f8dbf8',
		},
		{
			name: 'Rent, Communications, and Utilities',
			color: '#461e45',
		},
	];

	useEffect(() => {
		clearAll();
		makeSankey(data, sPanel, sTitle, descriptions);
		document.getElementById('resetBtn').onclick = () => {
			resetViz();
		};
	});

	function resetViz() {
		clearAll();
		document.getElementById('contactChoice1').checked = true; // fy 19 radio id
		props.resetYear();
		makeSankey(data, sPanel, sTitle, descriptions);
	}

	const clearAll = () => {
		d3.selectAll('#sankey-viz > svg').remove();
		d3.selectAll('#tab').remove();
		d3.selectAll('#tab_2').remove();
		d3.selectAll('#tab_3').remove();
		d3.selectAll('#description').remove();
	};

	d3.sankey = () => {
		const sankey = {};
		let nodeWidth = 30;
		let nodePadding = 8;
		let size = [1, 1];
		let nodes = [];
		let links = [];

		sankey.nodeWidth = function sNodeWidth(nArg) {
			if (nArg == null) {
				return nodeWidth;
			}
			nodeWidth = +nArg;
			return sankey;
		};

		sankey.nodePadding = function sNodePadding(nArg) {
			if (nArg == null) {
				return nodePadding;
			}
			nodePadding = +nArg;
			return sankey;
		};

		sankey.nodes = function sNodes(nArg) {
			if (nArg == null) {
				return nodes;
			}
			nodes = nArg;
			return sankey;
		};

		sankey.links = function sLinks(nArg) {
			if (nArg == null) {
				return links;
			}
			links = nArg;
			return sankey;
		};

		sankey.size = function sSize(nArg) {
			if (nArg == null) {
				return size;
			}
			size = nArg;
			return sankey;
		};

		sankey.link = () => {
			let curvature = 0.5;

			function link(d) {
				const x0 = d.source.x + d.source.dx;
				const x1 = d.target.x;
				const xi = d3.interpolateNumber(x0, x1);
				const x2 = xi(curvature);
				const x3 = xi(1 - curvature);
				const y0 = d.source.y + d.sy + d.dy / 2;
				const y1 = d.target.y + d.ty + d.dy / 2;
				return `M${x0},${y0}C${x2},${y0} ${x3},${y1} ${x1},${y1}`;
			}

			link.curvature = nArg => {
				if (nArg == null) {
					return curvature;
				}
				curvature = +nArg;
				return link;
			};

			return link;
		};

		function center(node) {
			return node.y + node.dy / 2;
		}

		function value(link) {
			return link.value;
		}

		// Populate the sourceLinks and targetLinks for each node.
		// Also, if the source and target are not objects, assume they are indices.
		function computeNodeLinks() {
			nodes.forEach(node => {
				node.sourceLinks = [];
				node.targetLinks = [];
			});
			links.forEach(link => {
				let { source } = link;
				let { target } = link;
				if (typeof source === 'number') {
					link.source = nodes[link.source];
					source = link.source;
				}
				if (typeof target === 'number') {
					link.target = nodes[link.target];
					target = link.target;
				}
				source.sourceLinks.push(link);
				target.targetLinks.push(link);
			});
		}

		// Compute the value (size) of each node by summing the associated links.
		function computeNodeValues() {
			nodes.forEach(node => {
				node.value = Math.max(
					d3.sum(node.sourceLinks, value),
					d3.sum(node.targetLinks, value)
				);
			});
		}

		function moveSinksRight(x) {
			nodes.forEach(node => {
				if (!node.sourceLinks.length) {
					node.x = x - 1;
				}
			});
		}

		function scaleNodeBreadths(kx) {
			nodes.forEach(node => {
				node.x *= kx;
			});
		}

		// Iteratively assign the breadth (x-position) for each node.
		// Nodes are assigned the maximum breadth of incoming neighbors plus one;
		// nodes with no incoming links are assigned breadth zero, while
		// nodes with no outgoing links are assigned the maximum breadth.
		function computeNodeBreadths() {
			let remainingNodes = nodes;
			let nextNodes;
			let x = 0;

			const breadthFunc = node => {
				node.x = x;
				node.dx = nodeWidth;
				node.sourceLinks.forEach(link => {
					nextNodes.push(link.target);
				});
			};

			while (remainingNodes.length) {
				nextNodes = [];
				remainingNodes.forEach(breadthFunc);
				remainingNodes = nextNodes;
				x += 1;
			}

			moveSinksRight(x);
			scaleNodeBreadths((width - nodeWidth) / (x - 1));
		}

		function computeNodeDepths(iterations) {
			const nodesByBreadth = d3
				.nest()
				.key(d => d.x)
				.sortKeys(d3.ascending)
				.entries(nodes)
				.map(d => d.values);

			function relaxLeftToRight(alpha) {
				function weightedSource(link) {
					return center(link.source) * link.value;
				}

				nodesByBreadth.forEach(innerNodes => {
					innerNodes.forEach(node => {
						if (node.targetLinks.length) {
							const y =
								d3.sum(node.targetLinks, weightedSource) /
								d3.sum(node.targetLinks, value);
							node.y += (y - center(node)) * alpha;
						}
					});
				});
			}

			function relaxRightToLeft(alpha) {
				function weightedTarget(link) {
					return center(link.target) * link.value;
				}

				nodesByBreadth
					.slice()
					.reverse()
					.forEach(innerNodes => {
						innerNodes.forEach(node => {
							if (node.sourceLinks.length) {
								const y =
									d3.sum(node.sourceLinks, weightedTarget) /
									d3.sum(node.sourceLinks, value);
								node.y += (y - center(node)) * alpha;
							}
						});
					});
			}

			function resolveCollisions() {
				nodesByBreadth.forEach(innerNodes => {
					let node;
					let dy;
					let y0 = 0;
					const n = innerNodes.length;
					let i;

					// Push any overlapping nodes down.
					/* nodes.sort(ascendingDepth); */
					for (i = 0; i < n; ++i) {
						node = innerNodes[i];
						dy = y0 - node.y;
						if (dy > 0) node.y += dy;
						y0 = node.y + node.dy + nodePadding;
					}

					// If the bottommost node goes outside the bounds, push it back up.
					dy = y0 - nodePadding - size[1];
					if (dy > 0) {
						node.y -= dy;
						y0 = node.y;

						// Push any overlapping nodes back up.
						for (i = n - 2; i >= 0; --i) {
							node = innerNodes[i];
							dy = node.y + node.dy + nodePadding - y0;
							if (dy > 0) node.y -= dy;
							y0 = node.y;
						}
					}
				});
			}

			function initializeNodeDepth() {
				const ky = d3.min(
					nodesByBreadth,
					innerNodes =>
						(size[1] - (innerNodes.length - 1) * nodePadding) /
						d3.sum(innerNodes, value)
				);

				nodesByBreadth.forEach(innerNodes => {
					innerNodes.forEach((node, i) => {
						node.y = i;
						node.dy = node.value * ky;
					});
				});

				links.forEach(link => {
					link.dy = link.value * ky;
				});
			}

			initializeNodeDepth();
			resolveCollisions();
			for (let alpha = 1; iterations > 0; --iterations) {
				relaxRightToLeft((alpha *= 0.99));
				resolveCollisions();
				relaxLeftToRight(alpha);
				resolveCollisions();
			}
		}

		function computeLinkDepths() {
			function ascendingSourceDepth(a, b) {
				return a.source.y - b.source.y;
			}

			function ascendingTargetDepth(a, b) {
				return a.target.y - b.target.y;
			}

			nodes.forEach(node => {
				node.sourceLinks.sort(ascendingTargetDepth);
				node.targetLinks.sort(ascendingSourceDepth);
			});
			nodes.forEach(node => {
				let sy = 0;
				let ty = 0;
				node.sourceLinks.forEach(link => {
					link.sy = sy;
					sy += link.dy;
				});
				node.targetLinks.forEach(link => {
					link.ty = ty;
					ty += link.dy;
				});
			});
		}

		sankey.layout = iterations => {
			computeNodeLinks();
			computeNodeValues();
			computeNodeBreadths();
			computeNodeDepths(iterations);
			computeLinkDepths();
			return sankey;
		};

		sankey.relayout = () => {
			computeLinkDepths();
			return sankey;
		};

		return sankey;
	};

	function makeSankey(data, sPanel, sTitle, descriptions) {
		// append the svg canvas to the page
		const svg = d3
			.select('#sankey-viz')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.attr(
				'viewBox',
				`0 0 ${width + margin.left + margin.right} ${height +
					margin.top +
					margin.bottom}`
			)
			.attr('class', 'sankey-viz-svg')
			.attr('role', 'img')
			.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`);
		d3
			.select('#sankey-viz svg')
			.attr('aria-labelledby', 'viz-description')
			.append('desc')
			.attr('id', 'viz-description')
			.text(altText);

		// Set the sankey diagram properties
		const sankey = d3
			.sankey()
			.nodeWidth(25)
			.nodePadding(8)
			.size([width, height]);
		const path = sankey.link();

		const legend = d3.select('#sankey-table');

		// set up graph in same style as original example but empty
		const graph = {
			nodes: [],
			links: [],
		};

		data.forEach(d => {
			graph.nodes.push({
				name: d.source,
			});
			graph.nodes.push({
				name: d.target,
			});
			graph.links.push({
				source: d.source,
				target: d.target,
				value: +d.value,
			});
		});

		// return only the distinct / unique nodes
		graph.nodes = d3.keys(
			d3
				.nest()
				.key(d => d.name)
				.map(graph.nodes)
		);
		graph.nodes.sort((x, y) => d3.ascending(x.value, y.value));

		// loop through each link replacing the text with its index from node
		graph.links.forEach((d, i) => {
			graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
			graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
		});

		// now loop through each nodes to make nodes an array of objects rather than an array of strings
		graph.nodes.forEach((d, i) => {
			graph.nodes[i] = {
				name: d,
			};
		});

		sankey
			.nodes(graph.nodes)
			.links(graph.links)
			.layout(200);

		// add in the links
		const link = svg
			.append('g')
			.selectAll('.link')
			.data(graph.links)
			.enter()
			.append('path')
			.attr('class', 'link')
			.attr('d', path)
			.attr('id', (d, i) => {
				d.id = i;
				return `link-${i}`;
			})
			.style('stroke-width', d => Math.max(1, d.dy))
			.sort((a, b) => b.dy - a.dy);
		link
			.append('title')
			.text(d => `${d.source.name} → ${d.target.name}\n${format(d.value)}`);

		function highlightLink(id, opacity) {
			d3.select(`#link-${id}`).style('stroke-opacity', opacity);
		}

		function unhighlightLink(id, opacity) {
			d3.select(`#link-${id}`).style('stroke-opacity', opacity);
		}

		let lastClickedNode = null;

		function removeHighlight(node, savedThis) {
			let remainingNodes = [];
			let nextNodes = [];

			if (savedThis == null) {
				return;
			}

			let strokeOpacity = 0;
			if (d3.select(savedThis).attr('data-clicked') === '1') {
				d3.select(savedThis).attr('data-clicked', '0');
				strokeOpacity = 0.1;
			} else {
				d3.select(savedThis).attr('data-clicked', '1');
				strokeOpacity = 0.3;
			}

			const traverse = [
				{
					linkType: 'sourceLinks',
					nodeType: 'target',
				},
				{
					linkType: 'targetLinks',
					nodeType: 'source',
				},
			];

			traverse.forEach(step => {
				node[step.linkType].forEach(nodeLink => {
					remainingNodes.push(nodeLink[step.nodeType]);
					unhighlightLink(nodeLink.id, strokeOpacity);
				});

				const traverseFunc = innerNode => {
					innerNode[step.linkType].forEach(nodeLink => {
						nextNodes.push(nodeLink[step.nodeType]);
						unhighlightLink(nodeLink.id, strokeOpacity);
					});
				};

				while (remainingNodes.length) {
					nextNodes = [];
					remainingNodes.forEach(traverseFunc);
					remainingNodes = nextNodes;
				}
			});
			d3.selectAll('#tab').remove();
			d3.selectAll('#tab_2').remove();
			d3.selectAll('#tab_3').remove();
			d3.selectAll('#description').remove();
		}

		function dragmove(d) {
			d3
				.select(this)
				.attr(
					'transform',
					`translate(${d.x},${(d.y = Math.max(
						0,
						Math.min(height - d.dy, d3.event.y)
					))})`
				);
			sankey.relayout();
			link.attr('d', path);
		}

		let savedThis = null;

		function highlightNodeLinks(innerNode) {
			if (lastClickedNode != null) {
				removeHighlight(lastClickedNode, savedThis);
			}

			lastClickedNode = innerNode;
			savedThis = this;

			let remainingNodes = [];
			let nextNodes = [];

			for (let j = 0; j < sTitle.length; j++) {
				if (sTitle[j].name === innerNode.name) {
					legend
						.append('div')
						.attr('id', 'tab')
						.attr('height', 200)
						.attr('width', 700)
						.html(
							`<h1 class='panel_title'>${sTitle[j].name}</h1>` +
								`<h3 class='panel_desc'><div class='panel_total_amount'>Total Amount</div>${formatNumber(
									sTitle[j].value
								)}<br /></h3>`
						);
				}
			}
			for (let j = 0; j < descriptions.length; j++) {
				if (descriptions[j].name === innerNode.name) {
					legend
						.append('div')
						.attr('id', 'description')
						.attr('height', 200)
						.attr('width', 600)
						.html(`<p class='body_text'>${descriptions[j].desc}</p>`);
				}
			}

			/*
      $(".sankey-viz-svg .node").first().addClass("active");

      $(".tablinks > .cocButton").click( function() {
          $(".tablinks > .cocButton").removeClass("active");
          $(this).addClass("active");
      });
      */

			let strokeOpacity = 0;
			if (d3.select(this).attr('data-clicked') === '1') {
				d3.select(this).attr('data-clicked', '0');
				strokeOpacity = 0.1;
			} else {
				d3.select(this).attr('data-clicked', '1');
				strokeOpacity = 0.3;
			}

			let dataTable = '';

			for (let k = 0; k < sPanel.length; k++) {
				if (sPanel[k].target === innerNode.name) {
					dataTable += `<tr><td class='val'>${formatNumber(
						sPanel[k].value
					)}</td><td>${sPanel[k].source}</td></tr>`;
				}
				if (sPanel[k].source === innerNode.name) {
					dataTable += `<tr><td class='val'>${formatNumber(
						sPanel[k].value
					)}</td><td>${sPanel[k].target}</td></tr>`;
				}
			}

			if (dataTable.length > 0) {
				legend
					.append('div')
					.attr('id', 'tab_2')
					.attr('class', 'treecolumn')
					.append('table')
					.html(dataTable);
			}

			legend
				.append('div')
				.attr('id', 'tab_3')
				.style('margin-top', '20px')
				.html('<div>Negative values are not included in the visualization.</div>');

			const traverse = [
				{
					linkType: 'sourceLinks',
					nodeType: 'target',
				},
				{
					linkType: 'targetLinks',
					nodeType: 'source',
				},
			];

			traverse.forEach(step => {
				innerNode[step.linkType].forEach(nodeLink => {
					remainingNodes.push(nodeLink[step.nodeType]);
					highlightLink(nodeLink.id, strokeOpacity);
				});

				const traverseFunc = remainingNode => {
					remainingNode[step.linkType].forEach(nodeLink => {
						nextNodes.push(nodeLink[step.nodeType]);
						highlightLink(nodeLink.id, strokeOpacity);
					});
				};

				while (remainingNodes.length) {
					nextNodes = [];
					remainingNodes.forEach(traverseFunc);
					remainingNodes = nextNodes;
				}
			});
		}

		const node = svg
			.append('g')
			.selectAll('.sankey-node')
			.data(graph.nodes)
			.enter()
			.append('g')
			.attr('class', 'sankey-node')
			.attr('transform', d => `translate(${d.x},${d.y})`)
			.on('click', highlightNodeLinks);
		// .on("mouseout", removeHighlight)
		/* .call(d3.behavior.drag()
        .origin((d) => d)
        .on("drag", dragmove)); */

		node
			.append('rect')
			.attr('height', d => d.dy)
			.attr('width', sankey.nodeWidth())
			.style('fill', d => {
				for (let i = 0; i < color.length; i++) {
					if (d.name === color[i].name) {
						return color[i].color;
					}
				}
				return '';
			});

		node
			.append('text')
			.attr('x', -6)
			.attr('y', d => d.dy / 3)
			.attr('dy', '.35em')
			.attr('text-anchor', 'end')
			.attr('transform', null)
			.text(d => d.name)
			.filter(d => d.x < width / 2)
			.attr('x', 6 + sankey.nodeWidth())
			.attr('text-anchor', 'start');
	}

	const inlineStyle = {
		position: 'absolute',
		margin: '20px 20px 20px 45px',
	};

	return (
		<>
			<Grid container className="budget-sankey">
				<Grid item xl={8} id="sankey-container">
					<div id="sankey-brackets">
						<SankeyBrackets />
					</div>
					<div id="sankey-viz" />
				</Grid>
				<Grid item xl={4}>
					<div id="sankey-table" />
				</Grid>
			</Grid>
		</>
	);
}

export default Sankey;
