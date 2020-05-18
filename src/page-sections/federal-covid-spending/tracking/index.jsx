import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';
import styles from './tracking.module.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import Bar from './bar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ControlBar from 'src/components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import numberFormatter from 'src/utils/number-formatter';
import Share from 'src/components/share/share';
import Toggle from 'src/components/toggle/toggle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import ListAltIcon from '@material-ui/icons/ListAlt';

const showLess = 10; // bars to show when collapsed

export default function Tracking(props) {
	const data = useStaticQuery(graphql`
    query {
      agencies: allSf133Viz3AgencyMain20200514Csv {
        nodes {
					label: Agency
					Percent_Outlaid
					Amount_Outlaid
					Percent_Obligated
					Amount_Obligated
					Percent_Unobligated
					Amount_Unobligated
					Total_Budgetary_Resources
        }
      }
			functions: allSf133Viz3FunctionMain20200514Csv {
        nodes {
					label: Function_Description
					Percent_Outlaid
					Amount_Outlaid
					Percent_Obligated
					Amount_Obligated
					Percent_Unobligated
					Amount_Unobligated
					Total_Budgetary_Resources
        }
      }
    }
	`);

	const first = {
		name: 'Budget Function',
		icon: <ListAltIcon className={styles.toggleIcon} />
	}
	const second = {
		name: 'Agency',
		icon: <FontAwesomeIcon icon={faUniversity} className={styles.toggleIcon} />
	}

	// update state & redraw ONLY if mode changes
	const [screenMode, setScreenMode] = useState(0);
	const resizeWindow = () => {
		const newMode = checkScreenMode(window.innerWidth);
		if (newMode !== screenMode) {
			setScreenMode(newMode);
		}
	}
	useEffect(() => {
		resizeWindow();
		window.addEventListener('resize', resizeWindow);
		return () => {
			window.removeEventListener('resize', resizeWindow);
		}
	});

	let barData = data.functions.nodes;
	const [checked, toggleChecked] = useState(false); // false = Budget Function, true = Agency
	const handleToggle = e => {
		barData = checked ? data.functions.nodes : data.agencies.nodes;
		toggleChecked(e.target.checked);
	}

	const [limitBars, setLimitBars] = useState(showLess);
	const handleSeeMore = () => {
		setLimitBars(limitBars ? 0 : showLess);
	}

	const mainChart = () => {
		const dataToShow = limitBars ? barData.slice(0, limitBars) : barData;

		const table = dataToShow.map((i, key) => {
			const thisBar = [{
				'amount': numberFormatter('dollars suffix', i.Amount_Outlaid),
				'percent': i.Percent_Outlaid
			}, {
				'amount': numberFormatter('dollars suffix', i.Amount_Obligated),
				'percent': i.Percent_Obligated
			}, {
				'amount': numberFormatter('dollars suffix', i.Amount_Unobligated),
				'percent': i.Percent_Unobligated
			}];
			return <Bar key={key}
				data={thisBar}
				barLabel={i.label}
				total={numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}
				firstBar={key === 0}
				lastBar={key === dataToShow.length - 1}
			/>;
		});

		return (<>
			<div className={styles.legend}>
				<div className={styles.toggleContainer}>
					<Toggle
						first={first}
						second={second}
						checked={checked}
						handleToggle={handleToggle}
					/>
				</div>
				<div className={styles.blockContainer}>
					<span className={`${styles.block} ${styles.outlayBar}`}></span><span>Outlay</span>
					<span className={`${styles.block} ${styles.obligatedBar}`}></span><span>Obligated</span>
					<span className={`${styles.block} ${styles.unobligatedBar}`}></span><span>Unobligated</span>
				</div>
			</div>
			<div className={styles.percentLegend}>
				<span>0%</span><span>50%</span><span>100%</span>
			</div>
			<div className={styles.barContainer}>
				{table}
			</div>
		</>);
	}

	const SeeMoreButton = withStyles(() => ({
		root: {
			'color': 'inherit',
			'text-transform': 'capitalize',
			'&:hover': {
				color: 'inherit'
			}
		}
	}))(Button);

	return <>
		<AccordionList title='Instructions'>
			<p>Actual instructions are larger than they appear</p>
		</AccordionList>

		<ControlBar>
			<Share
				siteUrl={props.location.origin}
				pageUrl={props.location.pathname + '#' + props.sectionId}
				title='Data Lab - COVID-19 tracking stuff - U.S. Treasury'
				text={'Who watches the Watchmen? Anyone with HBO...'}
			/>
		</ControlBar>

		{mainChart()}

		<SeeMoreButton fullWidth onClick={handleSeeMore}>
			{limitBars ? `See More (${data.functions.nodes.length - limitBars})` : 'Show Less'}
		</SeeMoreButton>

		<Downloads href={''} date={'MMMM YY'} />
	</>;
}