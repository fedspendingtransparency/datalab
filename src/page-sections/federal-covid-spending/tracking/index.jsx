import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';
import styles from './tracking.module.scss';

import AllAccountsIcon from '../../../svgs/federal-covid-spending/tracking/all-accounts-icon.svg'
import SpendingAccountsIcon from '../../../svgs/federal-covid-spending/tracking/spending-accounts-icon.svg'
import LoanProgramAccountsIcon from '../../../svgs/federal-covid-spending/tracking/loan-program-accounts-icon.svg'
import LIcon from '../../../svgs/federal-covid-spending/tracking/l-icon.svg'

import AccordionList from 'src/components/accordion-list/accordion-list';
import Bar from './bars/bar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { withStyles } from '@material-ui/core/styles';
import ControlBar from 'src/components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import numberFormatter from 'src/utils/number-formatter';
import Share from 'src/components/share/share';
import ModalReference from 'src/components/modal/modal';
import Modal from './modal/modal';
import { Grid, Hidden } from '@material-ui/core';

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

	const [isInfoModalOpen, setInfoModalState] = useState(false);

	const [selectedBar, setSelectedBar] = useState(null);
	const [selectedBarData, setSelectedBarData] = useState(null);
	const [dataType, setData] = useState('total');

	const [limitBars, setLimitBars] = useState(showLess);
	const handleSeeMore = () => {
		if (!limitBars) {
			location = `${window.location.pathname}#topofchart`;
		}
		setLimitBars(limitBars ? 0 : showLess);
	}


	const [isModalOpen, setModalState] = useState(false);
	const openModal = (e, data) => {
		setModalState(true);
		setSelectedBar(e);
		setSelectedBarData(data);
	}

	const openInfoModal = () => {
		setInfoModalState(true);
	}

	const closeModal = () => {
		setModalState(false);
		setInfoModalState(false);
		setSelectedBar(null);
	}

	const categories = [
		{
			name: 'Outlays',
			legendStyle: styles.outlayBar,
			infoModalDescription: <p>The amount an agency paid toward an obligation. Outlays are also counted as obligations.</p>
		},
		{
			name: 'Obligations',
			legendStyle: styles.obligatedBar,
			infoModalDescription: <p>The amount an agency promised to pay for a particular purchase. Obligations include outlays.</p>
		},
		{
			name: 'Unobligated',
			legendStyle: styles.unobligatedBar,
			infoModalDescription: <p>The amount funded to an agency but not yet obligated.</p>
		},
		{
			name: 'Loan Program Accounts',
			icon: <LIcon />,
			infoModalDescription: <>
				<p>These accounts include both direct loans and government-backed, or guaranteed, loans. For these accounts, obligations represent the
				 agency setting aside money to either disperse direct loans or stand-up a guaranteed loan program through an intermediary lender.</p>
				<p>Agencies outlay funds for loan guarantee serving costs, and when a loan is forgiven and if the loan defaults. Therefore, recently funded loan account outlays only reflect
				 direct loan disbursements and the cost of servicing and running loan programs. Agencies do not report when a lender disperses a guaranteed loan to a business or individual.</p>
			</>
		},
	]

  const findModalTitle = () => {
		const selectionAmount = data[dataType].nodes.find(item => item.label === selectedBar);
		return [<b>{selectedBar} </b>, selectionAmount ? numberFormatter('dollars suffix', selectionAmount.Total_Budgetary_Resources) : ''];
	}

	const mainChart = () => {
		const barData = data[dataType].nodes;
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
				totalBar={i.label === 'Total'}
				barLabel={i.label}
				total={numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}
				firstBar={key === 0}
				lastBar={key === chartData.length - 1}
				openModal={e => openModal(e, thisBar)}
				isModal={false}
			/>;
		});

		return (<>
      <Grid container className={styles.legendContainer}>
				<Grid item xs={12} lg={4} className={styles.legendAsOf}>
					Data updated as of May 1, 2020
				</Grid>
        <Grid className={styles.legend}>
          <div className={styles.blockContainer}>
            <div>
              <><span className={`${styles.block} ${categories[0].legendStyle}`}></span><span>{categories[0].name}</span></>
              <><span className={`${styles.block} ${categories[1].legendStyle}`}></span><span>{categories[1].name}</span></>
            </div>
            <div>
              <><span className={`${styles.block} ${categories[2].legendStyle}`}></span><span>{categories[2].name}</span></>
              <><span className={styles.block}>{categories[3].icon}</span><span>{categories[3].name}</span></>
            </div>
          </div>
          <div className={styles.blockContainer}>
            <IconButton className={styles.infoButton} onClick={openInfoModal}>
              <InfoOutlinedIcon className={styles.icon} />
            </IconButton>
          </div>
        </Grid>
			</Grid>
			<div className={styles.percentLegend}>
				<span>0%</span><span>50%</span><span>100%</span>
			</div>
			<div
				className={styles.barContainer}
				aria-label='Horizontal stacked bar chart depicting the portion of total budgetary resources from the emergency funding that have been obligated and outlaid to date.'
			>
				{table}
			</div>
		</>)
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

	const accountBreakdownOptions = [
		{
			name: 'All Accounts',
			icon: <AllAccountsIcon className={styles.dropdownIcon} />
		},
		{
			name: 'Spending Accounts',
			icon: <SpendingAccountsIcon className={styles.dropdownIcon} />
		},
		{
			name: 'Loan Program Accounts',
			icon: <LoanProgramAccountsIcon className={styles.dropdownIcon} />
		}
	];
	const [activeAccountFilter, setActiveAccountFilter] = useState(accountBreakdownOptions[0].name);

	const handleSpendingDropdownChange = (e) => {
		setActiveAccountFilter(e.target.value);
		switch (e.target.value) {
			case 'Spending Accounts':
				setData('spending');
				setLimitBars(data.spending.nodes.length >= showLess ? showLess : 0);
				break;
			case 'Loan Program Accounts':
				setData('loans');
				setLimitBars(data.loans.nodes.length >= showLess ? showLess : 0);
				break;
			default:
				setData('total');
				setLimitBars(data.total.nodes.length >= showLess ? showLess : 0);
		}
	}

	const InputComponent = withStyles(() => ({
		input: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			color: '#666',
			fontSize: 26,
			fontWeight: 300,
			padding: '10px 26px 10px 12px',
			borderBottom: 'solid 1px #666',
			'&:focus': {
				backgroundColor: 'transparent',
				boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
			}
		}
	}))(InputBase);

	const titleComponent = <>
			<h2 className={styles.sectionHeading}>Progress of COVID-19 Spending</h2>
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
			<div className={styles.viewSpendingByContainer}>
				<div className={styles.viewSpendingByHeading}>View Spending By: </div>
				<FormControl>
					<InputLabel id={styles.viewSpendingByDropdownLabel} />
					<Select
						labelId={styles.viewSpendingByDropdownLabel}
						className={styles.viewSpendingByDropdown}
						input={<InputComponent />}
						value={activeAccountFilter}
						onChange={handleSpendingDropdownChange}
						MenuProps={{
							anchorOrigin: {
								vertical: 'bottom',
								horizontal: 'left'
							},
							transformOrigin: {
								vertical: 'top',
								horizontal: 'left'
							},
							getContentAnchorEl: null
						}}
					>
						{accountBreakdownOptions.map((option) => (
							<MenuItem
								key={option.name}
								value={option.name}
								className={styles.dropdownItem}>
								{option.icon} {option.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
		</>

	return <>
		{titleComponent}

		<a id='topofchart' />
		{mainChart()}

		<ModalReference
			open={isModalOpen}
			close={closeModal}
			title={findModalTitle()}
			maxWidth={false}
			maxHeight={true}
		>
			<Modal
				bar={selectedBar}
				data={accountsByAgency[selectedBar]}
				barData={selectedBarData}
				isModal={true}
				mobileTablet={screenMode === ScreenModeEnum.mobile || screenMode === ScreenModeEnum.tablet}
			/>
		</ModalReference>
		
		<ModalReference
			open={isInfoModalOpen}
			close={closeModal}
			title='Spending Definitions'
			titleStyle={{ fontWeight: 600 }}
			maxWidth
			maxHeight
		>
			{categories.map((c) => (
				<div className={styles.infoModalBody}>
					<div className={styles.heading}>
						<div className={`${styles.modalBlock} ${c.legendStyle || ''}`}>{c.icon}</div>{c.name}
					</div>
					{c.infoModalDescription}
				</div>
			))}
		</ModalReference>

		{showLess >= data[dataType].nodes.length ?
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
