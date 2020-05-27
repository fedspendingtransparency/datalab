import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';
import styles from './tracking.module.scss';

import AccordionList from 'src/components/accordion-list/accordion-list';
import Bar from './bars/bar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ControlBar from 'src/components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import numberFormatter from 'src/utils/number-formatter';
import Share from 'src/components/share/share';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import ListAltIcon from '@material-ui/icons/ListAlt';

import ModalReference from "src/components/modal/modal"
import Modal from "./modal/modal"

const showLess = 10; // bars to show when collapsed

export default function Tracking(props) {
	const data = useStaticQuery(graphql`
    query {
      agencies: allCovid19ResponseViz3AgencyMain20200521Csv {
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
			agencyPopup: allCovid19ResponseViz3AgencyPopout20200521Csv {
        group(field: Agency) {
          fieldValue
          nodes {
						Account_Name
						Agency
						Amount_Obligated
						Amount_Obligated_Not_Outlaid
						Amount_Outlaid
						Amount_Unobligated
						Percent_Obligated
						Percent_Outlaid
						Percent_Unobligated
						Total_Budgetary_Resources
          }
        }
      }
    }
	`);

	const accountsByAgency = {};
	data.agencyPopup.group.forEach(item => {
		accountsByAgency[item.fieldValue] = item.nodes;
	});

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

	const [isModalOpen, setModalState] = useState(false);
	const [selectedBar, setSelectedBar] = useState(null);
  const [selectedBarData, setSelectedBarData] = useState(null);

	const first = {
		name: 'Budget Function',
		icon: <ListAltIcon className={styles.toggleIcon} />
	}
	const second = {
		name: 'Agency',
		icon: <FontAwesomeIcon icon={faUniversity} className={styles.toggleIcon} />
	}

	const [limitBars, setLimitBars] = useState(showLess);
	const handleSeeMore = () => {
		if (!limitBars) {
			location = `${window.location.pathname}#topofchart`;
		}
		setLimitBars(limitBars ? 0 : showLess);
	}

	const openModal = (e, data) => {
		setModalState(true);
		setSelectedBar(e);
    setSelectedBarData(data);
	}

	const closeModal = () => {
		setModalState(false);
		setSelectedBar(null);
	}

	const mainChart = () => {
		const barData = data.agencies.nodes;
		const chartData = limitBars ? barData.slice(0, limitBars) : barData;
		const table = chartData.map((i, key) => {
			const thisBar = [{
				'amount': i.Amount_Outlaid,
				'percent': parseFloat(i.Percent_Outlaid).toFixed(2)
			}, {
				'amount': i.Amount_Obligated,
				'percent': parseFloat(i.Percent_Obligated).toFixed(2)
			}, {
				'amount': i.Amount_Unobligated,
				'percent': parseFloat(i.Percent_Unobligated).toFixed(2)
			}];

			return <Bar key={key}
				data={thisBar}
				barLabel={i.label}
				total={numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}
				firstBar={key === 0}
				lastBar={key === chartData.length - 1}
        openModal={e => openModal(e, thisBar)}
				showDetails={screenMode !== ScreenModeEnum.mobile}
				isModal={false}
			/>;
		});

		return (<>
			<div className={styles.legend}>
				<div className={styles.blockContainer}>
					<span className={`${styles.block} ${styles.outlayBar}`}></span><span>Outlaid</span>
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
			'margin-top': '2rem',
			'border-top': 'solid thin #eee',
			'&:hover': {
				color: 'inherit'
			}
		}
	}))(Button);

	const findTitle = () => {
		const selectionAmount = data.agencies.nodes.find(item => item.label === selectedBar);
		return `${selectedBar} ${selectionAmount ? numberFormatter('dollars suffix', selectionAmount.Total_Budgetary_Resources) : ''}`;
	}

	return <>
		<h1>Progress of COVID-19 Spending</h1>

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

		<a id='topofchart' />
		{mainChart()}

		<ModalReference
			open={isModalOpen}
			close={closeModal}
			title={findTitle()}
			maxWidth={false} maxHeight={true}
		>
			<Modal
				bar={selectedBar}
				data={accountsByAgency[selectedBar]}
        barData={selectedBarData}
        isModal={true}
        mobile={screenMode === ScreenModeEnum.mobile}
      />
		</ModalReference>

		{limitBars >= data.agencies.nodes.length ?
			''
			:
			<SeeMoreButton fullWidth onClick={handleSeeMore}>
				{limitBars ?
					`See More (${data.agencies.nodes.length - limitBars})`
					:
					'See Less'
				}
			</SeeMoreButton>
		}

		<Downloads href={''} date={'May 2020'} />
	</>;
}
