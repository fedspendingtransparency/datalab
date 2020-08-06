import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';

import ElbowCallout from 'src/page-sections/federal-covid-funding/tracking/callouts/elbow';
import ReversedElbowCallout from 'src/page-sections/federal-covid-funding/tracking/callouts/reversed-elbow';
import ReversedJoinedCallout from 'src/page-sections/federal-covid-funding/tracking/callouts/reversed-joined';
import JoinedCallout from 'src/page-sections/federal-covid-funding/tracking/callouts/joined';
import StraightCallout from 'src/page-sections/federal-covid-funding/tracking/callouts/straight';
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
	const [labelOffsets, setLabelOffsets] = useState(null);

	/* The obligated label is the only floating label; setting the state
			If the obligated label is in the default position both properties are false
			If the obligated label is not in the default position state could be a straight or a revered elbow callout
	 */
	const [obligatedState, setObligatedState] = useState({
		isStraightObligated: false,
		isReverseElbowObligated: false
	})

	/* The Callout lines can be one of the following states - straight, elbow, joined, reversed elbow or reversed joined */
	const calloutTypeEnum = Object.freeze({ 'straight': 0, 'elbow': 1, 'joined': 2, 'reversedElbow': 3, 'reversedJoined': 4 });

	/* By default set the callout state for outlay, obligated and unobligated to elbow */
	const callouts = {
		outlay: calloutTypeEnum.elbow,
		obligated: calloutTypeEnum.elbow,
		unobligated: calloutTypeEnum.elbow,
	};

	/* Each percentage bar will have three instances of a callout component in this array. */
	const calloutComponent = [];

	/* Calculate the label widths based on the current browser width */
	const calculateLabelWidths = () => {
		if (typeof document !== 'undefined') {
			const tempLabelOffsets = {
				padding: null,
				outlayMidPoint: null,
				unobligated: null,
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
				unobligatedPercentage: Math.round(72 / barWidth * 100),
				padding: Math.round(25 / barWidth * 100),
				unobligatedRightPadding: ScreenModeEnum.mobile || ScreenModeEnum.tablet ? Math.round(40 / barWidth * 100) : 2
			};

			tempLabelOffsets.rightOffset = 100 - tempLabelLengths.unobligatedRightPadding;
			tempLabelOffsets.outlayMidPoint = threshold.outlayLabelOffset + tempLabelLengths.outlayPercentage / 2;
			tempLabelOffsets.unobligated = tempLabelOffsets.rightOffset - tempLabelLengths.unobligatedPercentage;
			tempLabelOffsets.obligated = threshold.outlayLabelOffset + tempLabelLengths.outlayPercentage + tempLabelLengths.padding;
			tempLabelOffsets.obligatedMidPoint = tempLabelOffsets.obligated + tempLabelLengths.obligatedPercentage / 2;

			if (props.outlaid + props.obligated / 2 > tempLabelOffsets.obligated + tempLabelLengths.obligatedPercentage / 4) {
				if (props.outlaid + props.obligated / 2 + tempLabelLengths.obligatedPercentage / 2 < tempLabelOffsets.unobligated - tempLabelLengths.padding) {
					setObligatedState(prevState => ({
						...prevState,
						isStraightObligated: true
					}));
					tempLabelOffsets.obligated = props.outlaid + props.obligated / 2 - tempLabelLengths.obligatedPercentage / 2;
					tempLabelOffsets.obligatedMidPoint = props.outlaid + props.obligated / 2;

				} else {
					setObligatedState(prevState => ({
						...prevState,
						isReverseElbowObligated: true
					}));
					tempLabelOffsets.obligated = tempLabelOffsets.unobligated - tempLabelLengths.obligatedPercentage - tempLabelLengths.padding;
					tempLabelOffsets.obligatedMidPoint = tempLabelOffsets.unobligated - tempLabelLengths.obligatedPercentage / 2 - tempLabelLengths.padding;
				}
			}

			setLabelLengths(tempLabelLengths);
			setLabelOffsets(tempLabelOffsets);
		}
	};
	/* On browser resize, recalculate the label widths */
	const resizeWindow = () => {
		calculateLabelWidths();
		drawCalloutBar();
		const newMode = checkScreenMode(window.innerWidth);
		if (newMode !== screenMode) {
			setScreenMode(newMode);
		}
	};

	/* Determine which callout to draw based on the width of the outlay, obligated and unobligated percentages */
	const setCallouts = () => {
		if (props.outlaid + props.obligated < labelOffsets.outlayMidPoint) {
			callouts.outlay = calloutTypeEnum.joined;
			callouts.obligated = calloutTypeEnum.joined;

		} else if (props.outlaid > labelOffsets.rightOffset) {
			callouts.outlay = calloutTypeEnum.straight;
			callouts.obligated = calloutTypeEnum.reversedJoined;
			callouts.unobligated = calloutTypeEnum.reversedJoined;

		} else if (props.outlaid <= labelOffsets.outlayMidPoint) {
			callouts.outlay = calloutTypeEnum.elbow;

			// Determine obligated position
			if (obligatedState.isReverseElbowObligated) {
				callouts.obligated = calloutTypeEnum.reversedElbow;

			} else if (obligatedState.isStraightObligated) {
				callouts.obligated = calloutTypeEnum.straight;

			} else {
				 callouts.obligated = calloutTypeEnum.elbow;
		 	}

		} else if (props.outlaid > labelOffsets.outlayMidPoint) {
			callouts.outlay = calloutTypeEnum.straight;

			// Determine obligated position
			if (obligatedState.isReverseElbowObligated) {
				callouts.obligated = calloutTypeEnum.reversedElbow;

			} else if (obligatedState.isStraightObligated) {
				callouts.obligated = calloutTypeEnum.straight;

			} else {
				callouts.obligated = calloutTypeEnum.elbow;

			}
		}

		if (props.unobligated < 100 - labelOffsets.rightOffset) {
			if (callouts.unobligated !== calloutTypeEnum.reversedJoined) callouts.unobligated = calloutTypeEnum.elbow;
		} else if (callouts.unobligated !== calloutTypeEnum.reversedJoined) callouts.unobligated = calloutTypeEnum.straight;
	};

	/* Select the callout component for outlay, set props on component and push to the calloutComponent array */
	const setOutlays = () => {
		const defaultStartingPoint = 3;

		// joined label
		if (callouts.outlay === calloutTypeEnum.joined) {
			calloutComponent.push(<JoinedCallout
				xStart={props.outlaid / 2}
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
		} else if (callouts.outlay === calloutTypeEnum.straight) {
			calloutComponent.push(<StraightCallout
				xStart={defaultStartingPoint}
				labelOffset={threshold.outlayLabelOffset}
				label="Outlays"
				labelAmount={props.data[0].amount}
				labelPercent={props.outlaid}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else {
			calloutComponent.push(<ElbowCallout
				xStart={props.outlaid / 2}
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

	const calculateReversedJoinedSpecialCasesLabel1 = (xEnd) => {
		if (screenMode === ScreenModeEnum.mobile && !props.isModal) {
			return xEnd - labelLengths.obligatedPercentage / 4;
		}

		return xEnd - labelLengths.unobligatedPercentage / 2;
	};

	const calculateReversedJoinedSpecialCasesLabel2 = () => {
		if (screenMode === ScreenModeEnum.mobile && props.isModal) {
			return 75;
		}

		if (screenMode === ScreenModeEnum.mobile) {
			return 80;
		}

		return labelOffsets.unobligated;
	};

	/* Select the callout component for obligated, set props on component and push to the calloutComponent array */
	const setObligated = () => {
		if (callouts.obligated === calloutTypeEnum.straight) {
			calloutComponent.push(<StraightCallout
				xStart={props.outlaid + props.obligated / 2}
				labelOffset={labelOffsets.obligated}
				label="Obligations"
				labelAmount={props.data[1].amount}
				labelPercent={props.obligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (callouts.obligated === calloutTypeEnum.elbow) {
			calloutComponent.push(<ElbowCallout
				xStart={props.outlaid + props.obligated / 2}
				xEnd={labelOffsets.obligatedMidPoint}
				labelOffset={labelOffsets.obligated}
				label="Obligations"
				labelAmount={props.data[1].amount}
				labelPercent={props.obligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (callouts.obligated === calloutTypeEnum.reversedElbow) {
			calloutComponent.push(<ReversedElbowCallout
				xStart={parseFloat(props.outlaid + props.obligated / 2)}
				xEnd ={labelOffsets.obligatedMidPoint}
				labelOffset={labelOffsets.obligated}
				label="Obligations"
				labelAmount={props.data[1].amount}
				labelPercent={props.obligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (callouts.obligated === calloutTypeEnum.reversedJoined) {
			// reversed joined
			// Calculate end point for reverse joined callout
			// NOTE:  The xEnd is relative from the right side NOT the left in this case
			const xEnd = props.isModal ? 50 : 45;

			calloutComponent.push(<ReversedJoinedCallout
				xStart={Math.max(props.outlaid + props.obligated + props.unobligated / 2 - 0.5, 95)}
				xMid={labelOffsets.rightOffset}
				xEnd={xEnd}
				label1Offset={calculateReversedJoinedSpecialCasesLabel1(xEnd)}
				label2Offset={calculateReversedJoinedSpecialCasesLabel2()}
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

	const calculateUnobligatedSpecialCases = () => {
		// Case for mobile and tablet modal
		if ((screenMode === ScreenModeEnum.mobile || screenMode === ScreenModeEnum.tablet) && props.isModal) {
			return labelOffsets.rightOffset - labelLengths.unobligatedPercentage * 0.5;
		}

		/* Case for mobile view on the main page only, show amounts so have to handle mobile as a special case */
		if (screenMode === ScreenModeEnum.mobile) {
			return 100 - labelLengths.unobligatedPercentage / 2;
		}

		/* Case for tablet view on the main page, shows both the label and amount so have to handle mobile as a special case */
		if (screenMode === ScreenModeEnum.tablet) {
			return labelOffsets.rightOffset - labelLengths.unobligatedPercentage * 0.75; // 3/4 of label to account for the label + amount
		}

		/* Case for desktop and Desktop XL view */
		return labelOffsets.unobligated;
	};

	/* Select the callout component for unobligated, set props on component and push to the calloutComponent array */
	const setUnobligated = () => {
		if (callouts.unobligated === calloutTypeEnum.straight) {
			calloutComponent.push(<StraightCallout
				xStart={labelOffsets.rightOffset}
				labelOffset={calculateUnobligatedSpecialCases()}
				label="Unobligated"
				labelAmount={props.data[2].amount}
				labelPercent={props.unobligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (callouts.unobligated === calloutTypeEnum.elbow) {
			// Subtracted 0.5 from xStart position to add padding to the right side of the bar
			calloutComponent.push(<ReversedElbowCallout
				xStart={props.outlaid + props.obligated + props.unobligated / 2 - 0.5}
				xEnd={labelOffsets.rightOffset}
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
		if(labelOffsets) {
			// determine if callouts are straight, joined, or elbow, then set callouts for outlay, obligated, and unobligated
			setCallouts();
			setOutlays();
			setObligated();
			setUnobligated();
		}
	};

	useEffect(() => {
		resizeWindow();
		window.addEventListener('resize', resizeWindow);
		return () => {
			window.removeEventListener('resize', resizeWindow);
		};
	}, []);

	drawCalloutBar();

	return (
		<>
			{calloutComponent[0]}
			{calloutComponent[1]}
			{calloutComponent[2]}
		</>
	);
}
