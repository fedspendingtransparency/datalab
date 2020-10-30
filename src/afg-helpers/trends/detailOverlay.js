import { select, selectAll, mouse } from "d3-selection"
import {
	translator,
	fadeAndRemove,
	getElementBox,
	establishContainer,
	wordWrap,
} from "src/afg-helpers/utils"
import { trendDesktop } from "./chart"

const d3 = { select, selectAll, mouse },
	overlayPadding = 20

let detailLayer, mask, detailBackground, closeText

export function closeOverlay() {
	fadeAndRemove(detailLayer, 300)
	fadeAndRemove(mask, 300)

	resizeSvg("close")
}

function placeCloseButton(container, innerWidth) {
	const closeButtonWidth = 30,
		closeGroup = container
			.append("g")
			.classed("pointer", true)
			.on("click", closeOverlay)
			.attr(
				"transform",
				translator(innerWidth + overlayPadding - closeButtonWidth, 0)
			)

	closeGroup
		.append("rect")
		.attr("fill", "#fff")
		.attr("stroke", "#fff")
		.attr("height", 20)
		.attr("width", closeButtonWidth)

	closeText = closeGroup
		.append("text")
		.text("x")
		.attr("stroke", "#ccc")
		.attr("font-size", 24)
		.attr("text-anchor", "middle")
		.attr("x", closeButtonWidth / 2)
		.attr("y", 20)
}

function renderHeader(d, innerWidth) {
	const headerTextMaxWidth = innerWidth - 60,
		title = d.officialName,
		header = detailLayer
			.append("g")
			.attr("transform", translator(0, overlayPadding))

	let headerText, calculatedHeaderHeight

	headerText = header
		.append("text")
		.text(title)
		.attr("x", overlayPadding)
		.attr("y", 20)
		.attr("font-size", function() {
			let svgWidth
			if (typeof document !== undefined) {
				svgWidth = document.getElementById("viz").getBoundingClientRect().width
			}

			return svgWidth < 500 ? 16 : 20
		})

	wordWrap(headerText, headerTextMaxWidth)

	headerText.attr("transform", translator(20, 0))

	placeCloseButton(header, innerWidth)

	calculatedHeaderHeight = header.selectAll("tspan").size() * 20

	return calculatedHeaderHeight
}

function renderMask() {
	const parent = d3.select("svg.main"),
		parentBox = getElementBox(establishContainer())

	mask = parent
		.append("rect")
		.classed("mask", true)
		.attr("fill", "black")
		.attr("opacity", 0.3)
		.attr("height", parentBox.height)
		.attr("width", parentBox.width)
		.on("click", closeOverlay)
}

function setOverlayY(overlayHeight) {
	const ideal = overlayHeight / 2,
		svgHeight = getElementBox(d3.select("svg.main")).height

	if (ideal < 5) {
		return 5
	}

	if (ideal + overlayHeight > svgHeight) {
		return svgHeight - overlayHeight - 5
	}

	return ideal
}

function resizeSvg(reset) {
	const ideal = 930

	let detailHeight, height

	if (reset) {
		d3.select("svg.main")
			.transition()
			.duration(500)
			.attr("height", ideal)
			.ease()
		return
	} else {
		detailHeight = getElementBox(detailLayer).height
	}

	if (detailHeight > ideal - 30) {
		if (detailHeight > 2000) {
			detailHeight = 1300 // Bandaid fix for IE, as it struggles massively to find the height/width of an svg.
		}
		d3.select("svg.main")
			.transition()
			.duration(500)
			.attr("height", detailHeight + 50)
			.ease()
		detailBackground
			.transition()
			.duration(500)
			.attr("height", detailHeight + 20)
			.ease()
	}
}

function placeChart(d, chartContainer, config) {
	if (config.subcategoryThresholds) {
		config.zoomThreshold = config.subcategoryThresholds[d.officialName]
	}

	trendDesktop(d.subcategories, chartContainer, config, "drilldown")

	resizeSvg()
}

export function initOverlay(d, parentConfig) {
	const config = {}

	let headerHeight, detailLayerYOffset, finalRectHeight, chartContainer

	renderMask()

	detailLayer = d3
		.select("svg.main")
		.append("g")
		.classed("detail-layer", true)
		.attr("transform", translator(0, 0) + " scale(0)")
		.attr("opacity", 1)

	config.width =
		d3.select("#viz-wrapper").attr("width") - 60 - overlayPadding * 2
	config.data = d.subcategories

	detailBackground = detailLayer
		.append("rect")
		.classed("detail-background", true)
		.attr("fill", "white")
		.attr("stroke", "#ccc")
		.attr("stroke-width", 1)
		.attr("width", config.width + overlayPadding * 2)
		.attr("rx", 10)
		.attr("ry", 10)

	headerHeight = renderHeader(d, config.width)

	detailLayerYOffset = headerHeight + overlayPadding + overlayPadding

	finalRectHeight = detailLayerYOffset + 820 + overlayPadding

	detailBackground.attr("height", finalRectHeight)

	chartContainer = detailLayer
		.append("g")
		.attr("transform", translator(overlayPadding, detailLayerYOffset))
		.classed("detail-chart", true)

	detailLayer
		.transition()
		.duration(750)
		.attr(
			"transform",
			translator(5, setOverlayY(0, finalRectHeight)) + " scale(1)"
		)
		.on("end", function() {
			setTimeout(function() {
				closeText.attr("stroke-width", 1)
			}, 10)
			placeChart(d, chartContainer, parentConfig)
		})
		.ease()
}
