import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';

import ElbowCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/elbow';
import ReversedElbowCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/reversed-elbow';
import ReversedJoinedCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/reversed-joined';
import JoinedCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/joined';
import StraightCallout from 'src/page-sections/federal-covid-spending/tracking/callouts/straight';
import threshold from '../callouts/utils/thresholds';
import Modal from '../modal/modal';
import styles from './bar.module.scss';

CalloutBar.propTypes = {
	outlaid: PropTypes.number.isRequired,
	obligated: PropTypes.number.isRequired,
	unobligated: PropTypes.number.isRequired,
	isModal: PropTypes.bool,
};

export default function CalloutBar(props) {
	const [screenMode, setScreenMode] = useState(0);
	const [labelLengths, setLabelLengths] = useState({
		outlayPercentage: 10,
		obligatedPercentage: 14,
		unobligatedPercentage: 15,
	});
	const [offsets, setOffsets] = useState(0);

	const barState = ['straight', 'elbow', 'joined', 'reversed-elbow', 'reversed-joined'];

	const barStatus = {
		outlay: barState[1],
		obligated: barState[1],
		unobligated: barState[1],
	};


	const calculateLabelWidths = () => {
		if (typeof document !== 'undefined') {
			const tempOffsets = {
				padding: null,
				outlayMidPoint: null,
				unobligated: null,
				unobligatedMidPoint: null,
				obligated: null,
				obligatedMidPoint: null,
				rightOffset: null,
			};

			const barWidth = document.getElementsByClassName(styles.bar)[0].getBoundingClientRect().width;
			const tempLabelLengths = {
				outlayPercentage: Math.round(50 / barWidth * 100),
				obligatedPercentage: Math.round(72 / barWidth * 100),
				unobligatedPercentage: Math.round(77 / barWidth * 100),
			};

			tempOffsets.padding = screenMode === ScreenModeEnum.tablet ? threshold.tabletPadding : screenMode === ScreenModeEnum.mobile ? threshold.mobilePadding : threshold.padding;

			tempOffsets.outlayMidPoint = threshold.outlayLabelOffset + tempLabelLengths.outlayPercentage / 2;

			// tempOffsets.unobligated = 100 - threshold.labelOffset - tempLabelLengths.unobligatedPercentage;
			// tempOffsets.unobligatedMidPoint = 100 - threshold.labelOffset - (tempLabelLengths.unobligatedPercentage / 2);

			tempOffsets.obligated = Math.max(props.outlaid + props.obligated / 2 - tempLabelLengths.obligatedPercentage / 2,
				threshold.outlayLabelOffset + tempLabelLengths.outlayPercentage + tempOffsets.padding);

			tempOffsets.obligatedMidPoint = Math.max(props.outlaid + props.obligated / 2,
				threshold.outlayLabelOffset + tempLabelLengths.outlayPercentage + tempOffsets.padding + tempLabelLengths.obligatedPercentage / 4);

			tempOffsets.rightOffset = 100 - threshold.labelOffset;


			setLabelLengths(tempLabelLengths);
			setOffsets(tempOffsets);
		}

		// check the width of the percentage bar
		// calculate the label percentages and set the threshold
	};

	const resizeWindow = () => {
		calculateLabelWidths();
		const newMode = checkScreenMode(window.innerWidth);
		if (newMode !== screenMode) {
			setScreenMode(newMode);
		}
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

	const padding = screenMode === ScreenModeEnum.tablet ? threshold.tabletPadding : screenMode === ScreenModeEnum.mobile ? threshold.mobilePadding : threshold.padding;
	const unobligatedLabelOffset = props.isModal && screenMode === ScreenModeEnum.mobile ? threshold.mobileUnobligatedLabelOffset : props.isModal ? threshold.modalUnobligatedLabelOffset : screenMode === ScreenModeEnum.tablet ? threshold.tabletUnobligatedLabelOffset : threshold.unobligatedLabelOffset;

	// const outlayLabelMidPoint = threshold.outlayLabelOffset + threshold.outlayLabelWidth / 2;
	const obligatedLabelMidPoint = threshold.outlayLabelOffset + threshold.outlayLabelWidth + padding + threshold.obligatedLabelWidth / 2;
	const obligatedLabelOffset = threshold.outlayLabelOffset + threshold.outlayLabelWidth + padding;
	const unObligatedLabelMidPoint = 100 - ((threshold.rightOffset - unobligatedLabelOffset) / 2);


	// joined
	if (props.outlaid + props.obligated < threshold.outlayLabelOffset) {
		barStatus.outlay = barState[2];
		barStatus.obligated = barState[2];
	} else if (props.outlaid <= offsets.outlayMidPoint) {
		barStatus.outlay = barState[1];
		if (props.outlaid + props.obligated > threshold.rightOffset) {
			barStatus.obligated = barState[0];
			barStatus.unobligated = barState[3];
		} else if (props.outlaid + props.obligated > unObligatedLabelMidPoint) {
			barStatus.obligated = barState[3];
		} else if (props.outlaid + props.obligated / 2 > offsets.obligatedMidPoint) {
			barStatus.obligated = barState[0];
		} else if (props.outlaid + props.obligated / 2 > offsets.obligated) {
			barStatus.obligated = barState[0];
		} else if (props.outlaid + props.obligated / 2 > offsets.outlayMidPoint) {
			barStatus.obligated = barState[1];
		} else if (props.outlaid + props.obligated / 2 <= offsets.outlayMidPoint) {
			barStatus.outlay = barState[2];
			barStatus.obligated = barState[2];

			// not sure about this state
		} else if (props.outlaid + props.obligated / 2 <= offsets.obligatedMidPoint) {
			barStatus.outlay = barState[2];
			barStatus.obligated = barState[2];
		} else {
			console.error('Uncaught condition 1 in callout bar');
		}
	} else if (props.outlaid > offsets.outlayMidPoint) {
		barStatus.outlay = barState[0];
		// console.log(props.outlaid);
		//
		// console.log(labelLengths.outlayPercentage);
		//
		// console.log(offsets.outlayMidPoint);
		if (props.outlaid > unobligatedLabelOffset - padding) {
			barStatus.obligated = barState[4];
			barStatus.unobligated = barState[4];
		} else if (props.outlaid + props.obligated / 2 > offsets.obligatedMidPoint) {
			if (props.outlaid + props.obligated > threshold.rightOffset) {
				barStatus.obligated = barState[4];
				barStatus.unobligated = barState[4];
			} else if (props.outlaid + props.obligated > unObligatedLabelMidPoint) {
				barStatus.obligated = barState[4];
				barStatus.unobligated = barState[4];
			} else {
				barStatus.obligated = barState[0];
			}
		} else if (props.outlaid + props.obligated / 2 > offsets.outlayMidPoint) {
			barStatus.obligated = barState[1];
		} else if (props.outlaid + props.obligated / 2 > offsets.outlayMidPoint + padding) {
			barStatus.obligated = barState[0];

			// not sure about this state
		} else if (props.outlaid + props.obligated / 2 <= offsets.obligatedMidPoint) {
			barStatus.outlay = barState[2];
			barStatus.obligated = barState[2];
		} else {
			console.error('Uncaught condition 1.5 in callout bar');
			// barStatus.obligated = barState[0];
		}
	} else {
		console.error('Uncaught condition 2 in callout bar');
	}

	if (props.unobligated < 100 - threshold.rightOffset) {
		if (barStatus.unobligated !== barState[4]) barStatus.unobligated = barState[1];
	} else if (barStatus.unobligated !== barState[4]) barStatus.unobligated = barState[0];

	const calloutComponent = [];

	setOutlays();
	setObligated();
	setUnobligated();

	function setOutlays() {
		const outlaySettings = {
			defaultStartingPoint: 3,
			outlaidBarMidpoint: props.outlaid / 2,
			labelMidpoint: threshold.outlayLabelOffset + threshold.outlayLabelWidth / 2,
		};

		const obligatedSettings = {
			labelOffset: threshold.outlayLabelOffset + threshold.outlayLabelWidth + padding,
			labelMidpoint: threshold.outlayLabelOffset + threshold.outlayLabelWidth + padding + threshold.obligatedLabelWidth / 2,
		};

		// joined label
		if (barStatus.outlay === barState[2]) {
			calloutComponent.push(<JoinedCallout
				xStart={outlaySettings.outlaidBarMidpoint < threshold.outlayLabelOffset ? outlaySettings.outlaidBarMidpoint : threshold.outlayLabelOffset}
				xMid={offsets.outlayMidPoint - threshold.outlayLabelOffset}
				xEnd={offsets.obligatedMidPoint}
				label1Offset={threshold.outlayLabelOffset}
				label2Offset={offsets.obligated}
				label1="Outlays"
				label2="Obligations"
				label1Amount={props.data[0].amount}
				label1Percent={props.outlaid}
				label2Amount={props.data[1].amount}
				label2Percent={props.obligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (barStatus.outlay === barState[0]) {
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
				xEnd={offsets.outlayMidPoint - threshold.outlayLabelOffset}
				labelOffset={threshold.outlayLabelOffset}
				label="Outlays"
				labelAmount={props.data[0].amount}
				labelPercent={props.outlaid}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		}
	}

	function setObligated() {
		const obligatedSettings = {
			labelOffset: threshold.outlayLabelOffset + threshold.outlayLabelWidth + padding,
			labelMidpoint: threshold.outlayLabelOffset + threshold.outlayLabelWidth + padding + threshold.obligatedLabelWidth / 2,
		};

		if (barStatus.obligated === barState[0]) {
			calloutComponent.push(<StraightCallout
				xStart={props.outlaid + props.obligated / 2}
				labelOffset={offsets.obligated}
				label="Obligations"
				labelAmount={props.data[1].amount}
				labelPercent={props.obligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (barStatus.obligated === barState[1]) {
			calloutComponent.push(<ElbowCallout
				xStart={props.outlaid + props.obligated / 2}
				xEnd={offsets.obligatedMidPoint}
				labelOffset={offsets.obligated}
				label="Obligations"
				labelAmount={props.data[1].amount}
				labelPercent={props.obligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (barStatus.obligated === barState[3]) {
			calloutComponent.push(<ReversedElbowCallout
				xStart={props.outlaid + props.obligated / 2}
				xEnd={offsets.obligatedMidPoint}
				labelOffset={offsets.obligated}
				label="Obligations"
				labelAmount={props.data[1].amount}
				labelPercent={props.obligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (barStatus.obligated === barState[4]) {
			// reversed joined
			const joinedOffsets = {
				end: props.isModal ? 50 : 45,
			};

			calloutComponent.push(<ReversedJoinedCallout
				xStart={(props.outlaid + props.obligated + props.unobligated / 2) - 0.5 > 95 ? (props.outlaid + props.obligated + props.unobligated / 2) - 0.5 : 95}
				xMid={threshold.rightOffset}
				xEnd={joinedOffsets.end}
				label1Offset={joinedOffsets.end - threshold.obligatedLabelWidth / 2}
				label2Offset={unobligatedLabelOffset}
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
	}

	function setUnobligated() {
		if (barStatus.unobligated === barState[0]) {
			calloutComponent.push(<StraightCallout
				xStart={threshold.rightOffset}
				labelOffset={unobligatedLabelOffset}
				label="Unobligated"
				labelAmount={props.data[2].amount}
				labelPercent={props.unobligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		} else if (barStatus.unobligated === barState[1]) {
			calloutComponent.push(<ReversedElbowCallout
				xStart={props.outlaid + props.obligated + props.unobligated / 2 - 0.5}
				xEnd={threshold.rightOffset}
				labelOffset={unobligatedLabelOffset}
				label="Unobligated"
				labelAmount={props.data[2].amount}
				labelPercent={props.unobligated}
				isModal={props.isModal}
				mobile={screenMode === ScreenModeEnum.mobile}
			/>);
		}
	}

	return (
		<>
			{calloutComponent[0]}
			{calloutComponent[1]}
			{calloutComponent[2]}
		</>
	);
}
