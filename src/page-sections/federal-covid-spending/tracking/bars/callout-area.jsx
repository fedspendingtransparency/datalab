import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';

import ElbowCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/elbow';
import ReversedElbowCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/reversed-elbow';
import ReversedJoinedCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/reversed-joined';
import JoinedCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/joined';
import StraightCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/straight';
import threshold from '../callouts/utils/thresholds';
import styles from './bar.module.scss';

CalloutBar.propTypes = {
	outlaid: PropTypes.number.isRequired,
	obligated: PropTypes.number.isRequired,
	unobligated: PropTypes.number.isRequired,
	isModal: PropTypes.bool.isRequired,
};

export default function CalloutBar(props) {
	const [screenMode, setScreenMode] = useState(0);

	/* Label width for Outlays, Obligations, and Unobligated as a percentage
	The following positions are estimates, the calculateLabelWidths function below calculates label widths
	relative to the width of the percentage bar in the browser */
	const [labelLengths, setLabelLengths] = useState({
		outlayPercentage: 10,
		obligatedPercentage: 14,
		unobligatedPercentage: 15,
	});

	/* Position of the label from the left hand side of the bar chart
	Positions range from 0 - 100% */
	const [labelOffsets, setLabelOffsets] = useState(0);

	/* The Callout lines can be one of the following states - straight, elbow, joined, reversed elbow or reversed joined */
	const calloutState = ['straight', 'elbow', 'joined', 'reversed-elbow', 'reversed-joined'];

	/* By default set the callout state for outlay, obligated and unobligated to elbow */
	const calloutStates = {
		outlay: calloutState[1],
		obligated: calloutState[1],
		unobligated: calloutState[1],
	};

	/* Each percentage bar will have three instances of a callout component in this array. */
	const calloutComponent = [];

	/* On browser resize, recalculate the label widths */
	const resizeWindow = () => {
		calculateLabelWidths();
		const newMode = checkScreenMode(window.innerWidth);
		if (newMode !== screenMode) {
			setScreenMode(newMode);
		}
	};

	/* Calculate the label widths based on the current browser width */
	const calculateLabelWidths = () => {
		if (typeof document !== 'undefined') {
			const tempLabelOffsets = {
				padding: screenMode === ScreenModeEnum.tablet ? threshold.tabletPadding : screenMode === ScreenModeEnum.mobile ? threshold.mobilePadding : threshold.padding,
				outlayMidPoint: null,
				unobligated: null,
				unobligatedMidPoint: null,
				obligated: null,
				obligatedMidPoint: null,
				rightOffset: null,
			};

			const el = props.isModal ? document.getElementById('covid-modal').getElementsByClassName(styles.bar)[0]
				: document.getElementsByClassName(styles.bar)[0];

			const barWidth = el.getBoundingClientRect().width;

			const tempLabelLengths = {
				outlayPercentage: Math.round(50 / barWidth * 100),
				obligatedPercentage: Math.round(72 / barWidth * 100),
				unobligatedPercentage: Math.round(110 / barWidth * 100),
			};

			tempLabelOffsets.outlayMidPoint = threshold.outlayLabelOffset + tempLabelLengths.outlayPercentage / 2;

			tempLabelOffsets.unobligated = 100 - threshold.labelOffset - tempLabelLengths.unobligatedPercentage;
			tempLabelOffsets.unobligatedMidPoint = 100 - threshold.labelOffset - (tempLabelLengths.unobligatedPercentage / 2);

			if (props.outlaid + props.obligated / 2 - tempLabelLengths.obligatedPercentage / 2
				> threshold.outlayLabelOffset + tempLabelLengths.outlayPercentage + tempLabelOffsets.padding) {
				tempLabelOffsets.obligated = props.outlaid + props.obligated / 2 - tempLabelLengths.obligatedPercentage / 2;
				tempLabelOffsets.obligatedMidPoint = props.outlaid + props.obligated / 2;
			} else {
				tempLabelOffsets.obligated = threshold.outlayLabelOffset + tempLabelLengths.outlayPercentage + tempLabelOffsets.padding;
				tempLabelOffsets.obligatedMidPoint = threshold.outlayLabelOffset + tempLabelLengths.outlayPercentage + tempLabelOffsets.padding;
			}

			tempLabelOffsets.rightOffset = 100 - threshold.labelOffset;

			setLabelLengths(tempLabelLengths);
			setLabelOffsets(tempLabelOffsets);
		}
	};

	/* Determine which callout to draw based on the width of the outlay, obligated and unobligated percentages */
	const setCalloutStates = () => {
		if (props.outlaid + props.obligated < threshold.outlayLabelOffset) {
			calloutStates.outlay = calloutState[2];
			calloutStates.obligated = calloutState[2];
		} else if (props.outlaid <= labelOffsets.outlayMidPoint) {
			calloutStates.outlay = calloutState[1];
			if (props.outlaid + props.obligated > threshold.rightOffset) {
				calloutStates.obligated = calloutState[0];
				calloutStates.unobligated = calloutState[3];
			} else if (props.outlaid + props.obligated > labelOffsets.unobligatedMidPoint) {
				calloutStates.obligated = calloutState[3];
			} else if (props.outlaid + props.obligated / 2 > labelOffsets.obligatedMidPoint) {
				calloutStates.obligated = calloutState[0];
			} else if (props.outlaid + props.obligated / 2 > labelOffsets.obligated) {
				calloutStates.obligated = calloutState[0];
			} else if (props.outlaid + props.obligated / 2 > labelOffsets.outlayMidPoint) {
				calloutStates.obligated = calloutState[1];
			} else if (props.outlaid + props.obligated / 2 <= labelOffsets.outlayMidPoint) {
				calloutStates.outlay = calloutState[2];
				calloutStates.obligated = calloutState[2];

				// not sure about this state
			} else if (props.outlaid + props.obligated / 2 <= labelOffsets.obligatedMidPoint) {
				calloutStates.outlay = calloutState[2];
				calloutStates.obligated = calloutState[2];
			} else {
				console.error('Uncaught condition 1 in callout bar');
			}
		} else if (props.outlaid > labelOffsets.outlayMidPoint) {
			calloutStates.outlay = calloutState[0];
			if (props.outlaid > labelOffsets.unobligated - labelOffsets.padding) {
				calloutStates.obligated = calloutState[4];
				calloutStates.unobligated = calloutState[4];
			} else if (props.outlaid + props.obligated / 2 > labelOffsets.obligatedMidPoint) {
				if (props.outlaid + props.obligated > threshold.rightOffset) {
					calloutStates.obligated = calloutState[4];
					calloutStates.unobligated = calloutState[4];
				} else if (props.outlaid + props.obligated > labelOffsets.unobligatedMidPoint) {
					calloutStates.obligated = calloutState[4];
					calloutStates.unobligated = calloutState[4];
				} else {
					calloutStates.obligated = calloutState[0];
				}
			} else if (props.outlaid + props.obligated / 2 > labelOffsets.outlayMidPoint) {
				calloutStates.obligated = calloutState[1];
			} else if (props.outlaid + props.obligated / 2 > labelOffsets.outlayMidPoint + labelOffsets.padding) {
				calloutStates.obligated = calloutState[0];

				// not sure about this state
			} else if (props.outlaid + props.obligated / 2 <= labelOffsets.obligatedMidPoint) {
				calloutStates.outlay = calloutState[2];
				calloutStates.obligated = calloutState[2];
			} else {
				console.error('Uncaught condition 1.5 in callout bar');
				// calloutStates.obligated = calloutState[0];
			}
		} else {
			console.error('Uncaught condition 2 in callout bar');
		}

		if (props.unobligated < 100 - threshold.rightOffset) {
			if (calloutStates.unobligated !== calloutState[4]) calloutStates.unobligated = calloutState[1];
		} else if (calloutStates.unobligated !== calloutState[4]) calloutStates.unobligated = calloutState[0];
	};

	/* Select the callout component for outlay, set props on component and push to the calloutComponent array */
	const setOutlays = () => {
		const outlaySettings = {
			defaultStartingPoint: 3,
			outlaidBarMidpoint: props.outlaid / 2,
		};

		// joined label
		if (calloutStates.outlay === calloutState[2]) {
			calloutComponent.push(<JoinedCallout
				xStart={Math.min(outlaySettings.outlaidBarMidpoint, threshold.outlayLabelOffset)}
				xMid={labelOffsets.outlayMidPoint - threshold.outlayLabelOffset}
				xEnd={labelOffsets.obligated + threshold.outlayLabelOffset}
				label1Offset={threshold.outlayLabelOffset}
				label2Offset={labelOffsets.obligated}
				label1="Outlays"
				label2="Obligations"
				label1Amount={props.data[0].amount}
				label1Percent={props.outlaid}
				label2Amount={props.data[1].amount}
				label2Percent={props.obligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (calloutStates.outlay === calloutState[0]) {
			calloutComponent.push(<StraightCallout
				xStart={outlaySettings.defaultStartingPoint}
				labelOffset={threshold.outlayLabelOffset}
				label="Outlays"
				labelAmount={props.data[0].amount}
				labelPercent={props.outlaid}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else {
			calloutComponent.push(<ElbowCallout
				xStart={outlaySettings.outlaidBarMidpoint}
				xEnd={labelOffsets.outlayMidPoint - threshold.outlayLabelOffset}
				labelOffset={threshold.outlayLabelOffset}
				label="Outlays"
				labelAmount={props.data[0].amount}
				labelPercent={props.outlaid}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		}
	};

	/* Select the callout component for obligated, set props on component and push to the calloutComponent array */
	const setObligated = () => {
		if (calloutStates.obligated === calloutState[0]) {
			calloutComponent.push(<StraightCallout
				xStart={props.outlaid + props.obligated / 2}
				labelOffset={labelOffsets.obligated}
				label="Obligations"
				labelAmount={props.data[1].amount}
				labelPercent={props.obligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (calloutStates.obligated === calloutState[1]) {
			calloutComponent.push(<ElbowCallout
				xStart={props.outlaid + props.obligated / 2}
				xEnd={labelOffsets.obligatedMidPoint}
				labelOffset={labelOffsets.obligated - threshold.outlayLabelOffset}
				label="Obligations"
				labelAmount={props.data[1].amount}
				labelPercent={props.obligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (calloutStates.obligated === calloutState[3]) {
			calloutComponent.push(<ReversedElbowCallout
				xEnd={parseFloat(props.outlaid + props.obligated / 2)}
				xStart={labelOffsets.obligated}
				labelOffset={labelOffsets.obligated}
				label="Obligations"
				labelAmount={props.data[1].amount}
				labelPercent={props.obligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (calloutStates.obligated === calloutState[4]) {
			// reversed joined
			const joinedOffsets = {
				end: props.isModal ? 50 : 45,
			};

			// TODO?  Where did the calculation for xStart come from
			calloutComponent.push(<ReversedJoinedCallout
				xStart={(props.outlaid + props.obligated + props.unobligated / 2) - 0.5 > 95 ? (props.outlaid + props.obligated + props.unobligated / 2) - 0.5 : 95}
				xMid={threshold.rightOffset}
				xEnd={joinedOffsets.end}
				label1Offset={joinedOffsets.end - labelLengths.unobligatedPercentage / 2}
				label2Offset={labelOffsets.unobligated}
				label1="Obligations"
				label2="Unobligated"
				label1Amount={props.data[1].amount}
				label1Percent={props.obligated}
				label2Amount={props.data[2].amount}
				label2Percent={props.unobligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		}
	};

	/* Select the callout component for unobligated, set props on component and push to the calloutComponent array */
	const setUnobligated = () => {
		if (calloutStates.unobligated === calloutState[0]) {
			calloutComponent.push(<StraightCallout
				xStart={threshold.rightOffset}
				labelOffset={labelOffsets.unobligated}
				label="Unobligated"
				labelAmount={props.data[2].amount}
				labelPercent={props.unobligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (calloutStates.unobligated === calloutState[1]) {
			// Subtracted 0.5 from xStart position to add padding to the right side of the bar
			calloutComponent.push(<ReversedElbowCallout
				xStart={props.outlaid + props.obligated + props.unobligated / 2 - 0.5}
				xEnd={threshold.rightOffset}
				labelOffset={labelOffsets.unobligated}
				label="Unobligated"
				labelAmount={props.data[2].amount}
				labelPercent={props.unobligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		}
	};

	/* Function to draw the callout bar based on a percentage - ie. 0 - 100% */
	const drawCalloutBar = () => {
		// determine if callouts are straight, joined, or elbow, then set callouts for outlay, obligated, and unobligated
		setCalloutStates();
		setOutlays();
		setObligated();
		setUnobligated();
	};

	useEffect(() => {
		resizeWindow();
	}, []);

	useEffect(() => {
		window.addEventListener('resize', resizeWindow);
		return () => {
			window.removeEventListener('resize', resizeWindow);
		};
	});

	drawCalloutBar();

	return (
		<>
			{calloutComponent[0]}
			{calloutComponent[1]}
			{calloutComponent[2]}
		</>
	);
}
