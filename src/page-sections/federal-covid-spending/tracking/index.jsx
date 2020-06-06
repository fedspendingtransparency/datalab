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
      spending: allCovid19ResponseViz3MainAgencySpending20200603Csv {
        nodes {
					label: Agency
					Percent_Outlaid
					Percent_Obligated_Not_Outlaid
					Percent_Unobligated
					Amount_Outlaid
					Amount_Obligated
					Amount_Unobligated
					Total_Budgetary_Resources
        }
      }
			total: allCovid19ResponseViz3MainAgencyTotal20200603Csv {
        nodes {
					label: Agency
					Percent_Outlaid
					Percent_Obligated_Not_Outlaid
					Percent_Unobligated
					Amount_Outlaid
					Amount_Obligated
					Amount_Unobligated
					Total_Budgetary_Resources
        }
      }
			loans: allCovid19ResponseViz3MainAgencyLoans20200603Csv {
        nodes {
					label: Agency
					Percent_Outlaid
					Percent_Unobligated
					Percent_Obligated_Not_Outlaid
					Amount_Outlaid
					Amount_Obligated
					Amount_Unobligated
					Total_Budgetary_Resources
        }
      }
			allData: allCovid19ResponseViz3ModalAgency20200603Csv {
        group(field: Agency) {
          fieldValue
          nodes {
						Account_Name
						Agency
						Amount_Obligated
						Amount_Outlaid
						Amount_Unobligated
						Percent_Obligated_Not_Outlaid
						Percent_Outlaid
						Percent_Unobligated
						Total_Budgetary_Resources
          }
        }
      }
    }
	`);

	const accountsByAgency = {};
	data.allData.group.forEach(item => {
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
	const [dataType, setData] = useState('total');

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
		const barData = data[dataType].nodes;
		console.log(barData);
		const chartData = limitBars ? barData.slice(0, limitBars) : barData;
		const table = chartData.map((i, key) => {
			const thisBar = [{
				'amount': i.Amount_Outlaid,
				'percent': parseFloat(i.Percent_Outlaid).toFixed(2)
			}, {
				'amount': i.Amount_Obligated,
				'percent': parseFloat(i.Percent_Obligated_Not_Outlaid).toFixed(2)
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
				isModal={false}
			/>;
		});

		return (<>
			<div className={styles.legend}>
				<div className={styles.blockContainer}>
					<span className={`${styles.block} ${styles.outlayBar}`}></span><span>Outlays</span>
					<span className={`${styles.block} ${styles.obligatedBar}`}></span><span>Obligations</span>
					<span className={`${styles.block} ${styles.unobligatedBar}`}></span><span>Unobligated</span>
				</div>
			</div>
			<div className={styles.percentLegend}>
				<span>0%</span><span>50%</span><span>100%</span>
			</div>
			<div
				className={styles.barContainer}
				aria-label='Horizontal stacked bar chart depicting the portion of total budgetary resources from the emergency funding that have been obligated and outlaid to date.'
			>
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
		// const selectionAmount = data['allData'].nodes.find(item => item.label === selectedBar);
		// return [<b>{selectedBar} </b>, selectionAmount ? numberFormatter('dollars suffix', selectionAmount.Total_Budgetary_Resources) : ''];
		return 'xxxx';
	}

	const titleComponent = screenMode === ScreenModeEnum.mobile ? (
		<>
			<h2>Progress of COVID-19 Spending</h2>
			<AccordionList title='Instructions'>
				<p>Actual instructions are larger than they appear</p>
			</AccordionList>
			<ControlBar alignRightOnMobile>
				<Share
					siteUrl={props.location.origin}
					pageUrl={props.location.pathname + '#' + props.sectionId}
					title='Data Lab - COVID-19 tracking stuff - U.S. Treasury'
					text={'Who watches the Watchmen? Anyone with HBO...'}
				/>
			</ControlBar>
		</>
	) : (
		<>
			<ControlBar>
				<h2>Progress of COVID-19 Spending</h2>
				<Share
					siteUrl={props.location.origin}
					pageUrl={props.location.pathname + '#' + props.sectionId}
					title='Data Lab - COVID-19 tracking stuff - U.S. Treasury'
					text={'Who watches the Watchmen? Anyone with HBO...'}
				/>
			</ControlBar>
			<AccordionList title='Instructions'>
				<p>Actual instructions are larger than they appear</p>
			</AccordionList>
		</>
	)


	return <>
		{titleComponent}

		<a onClick={e => setData('total')}>Total</a>
		<a onClick={e => setData('spending')}>Spending</a>
		<a onClick={e => setData('loans')}>Loans</a>

		<a id='topofchart' />
		{mainChart()}

		<ModalReference
			open={isModalOpen}
			close={closeModal}
			title={findTitle()}
			maxWidth={false}
			maxHeight={true}
		>
			<Modal
				bar={selectedBar}
				data={accountsByAgency[selectedBar]}
				barData={selectedBarData}
				isModal={true}
				mobileTablet={screenMode === ScreenModeEnum.mobile || screenMode === ScreenModeEnum.tablet }
			/>
		</ModalReference>

		{limitBars >= data[dataType].nodes.length ?
			''
			:
			<SeeMoreButton fullWidth onClick={handleSeeMore}>
				{limitBars ?
					`See More (${data[dataType].nodes.length - limitBars})`
					:
					'See Less'
				}
			</SeeMoreButton>
		}

		<Downloads href={'/data/federal-covid-spending/tracking/covid19_response_viz3_agency_popout_2020-05-21.csv'} date={'May 2020'} />
	</>;
}
