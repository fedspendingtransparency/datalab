import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';


import AccordionList from 'src/components/accordion-list/accordion-list';
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
import { Grid } from '@material-ui/core';
import Modal from './modal/modal';
import Bar from './bars/bar';
import LIcon from '../../../svgs/federal-covid-spending/tracking/l-icon.svg';
import LoanProgramAccountsIcon from '../../../svgs/federal-covid-spending/tracking/loan-program-accounts-icon.svg';
import SpendingAccountsIcon from '../../../svgs/federal-covid-spending/tracking/spending-accounts-icon.svg';
import AllAccountsIcon from '../../../svgs/federal-covid-spending/tracking/all-accounts-icon.svg';
import styles from './tracking.module.scss';

const showLess = 10; // bars to show when collapsed

export default function Tracking(props) {
	const data = useStaticQuery(graphql`
    query {
      spending: allCovid19ResponseViz3MainAgencySpending20200617Csv {
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
			total: allCovid19ResponseViz3MainAgencyTotal20200617Csv {
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
			loans: allCovid19ResponseViz3MainAgencyLoans20200617Csv {
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
			allData: allCovid19ResponseViz3ModalAgency20200617Csv {
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
            Loan_Program_Account
          }
        }
      }
    }
	`);

	const accountsByAgency = {};
	data.allData.group.forEach((item) => {
		accountsByAgency[item.fieldValue] = item.nodes;
	});

	const totalBudgetByAgency = {};
	data.total.nodes.forEach((item) => {
		totalBudgetByAgency[item.label] = item.Total_Budgetary_Resources;
	});

	const [screenMode, setScreenMode] = useState(0);
	const resizeWindow = () => {
		const newMode = checkScreenMode(window.innerWidth);
		if (newMode !== screenMode) {
			setScreenMode(newMode);
		}
	};
	useEffect(() => {
		resizeWindow();
		window.addEventListener('resize', resizeWindow);
		return () => {
			window.removeEventListener('resize', resizeWindow);
		};
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
	};


	const [isModalOpen, setModalState] = useState(false);
	const openModal = (e, data) => {
		setModalState(true);
		setSelectedBar(e);
		setSelectedBarData(data);
	};

	const openInfoModal = () => {
		setInfoModalState(true);
	};

	const closeModal = () => {
		setModalState(false);
		setInfoModalState(false);
		setSelectedBar(null);
	};

	const categories = [
		{
			name: 'Outlays',
			legendStyle: styles.outlayBar,
			infoModalDescription: <p>The amount an agency paid toward an obligation. Outlays are also counted as obligations.</p>,
		},
		{
			name: 'Obligations',
			legendStyle: styles.obligatedBar,
			infoModalDescription: <p>The amount an agency promised to pay for a particular purchase. Obligations include outlays.</p>,
		},
		{
			name: 'Unobligated',
			legendStyle: styles.unobligatedBar,
			infoModalDescription: <p>The amount funded to an agency but not yet obligated.</p>,
		},
		{
			name: 'Loan Program Accounts',
			icon: <LIcon />,
			infoModalDescription: <>
				<p>
					These accounts include both direct loans and government-backed, or guaranteed, loans. For these accounts, obligations represent the
					agency setting aside money to either disperse direct loans or stand-up a guaranteed loan program through an intermediary lender.
				</p>
				<p>
					Agencies outlay funds for loan guarantee serving costs, and when a loan is forgiven and if the loan defaults. Therefore, recently funded loan account outlays only reflect
					direct loan disbursements and the cost of servicing and running loan programs. Agencies do not report when a lender disperses a guaranteed loan to a business or individual.
				</p>
			</>,
		},
	];


	const findModalTitle = () => {
		const selectionAmount = data[dataType].nodes.find((item) => item.label === selectedBar);
		const totalofAll = data.total.nodes[0].Total_Budgetary_Resources;
		return [
			<span className={styles.modalTitle}>
				{selectedBar}
				{' '}
			</span>,
			<p className={styles.selectionAmountVal}>
				{selectionAmount ? numberFormatter('dollars suffix', selectionAmount.Total_Budgetary_Resources) : ''}
			</p>,
			<p className={styles.selectionAmountValSmall}>
				{selectionAmount ? ` of ${numberFormatter('dollars suffix', totalofAll)}` : ''}
			</p>,
		];
	};

	const filterModalData = () => {
		if (selectedBar && accountsByAgency) {
			switch (dataType) {
			case 'loans':
				return accountsByAgency[selectedBar].filter((i) => i.Loan_Program_Account === 'Yes');
			case 'spending':
				return accountsByAgency[selectedBar].filter((i) => i.Loan_Program_Account === 'No');
			}
			return accountsByAgency[selectedBar];
		}
		return null;
	};

	const mainChart = () => {
		const barData = data[dataType].nodes;
		const chartData = limitBars ? barData.slice(0, limitBars) : barData;
		const table = chartData.map((i, key) => {
			const thisBar = [{
				amount: i.Amount_Outlaid,
				percent: parseFloat(i.Percent_Outlaid).toFixed(2),
			}, {
				amount: i.Amount_Obligated,
				percent: parseFloat(i.Percent_Obligated_Not_Outlaid).toFixed(2),
			}, {
				amount: i.Amount_Unobligated,
				percent: parseFloat(i.Percent_Unobligated).toFixed(2),
			}];

			return (
				<Bar
  key={key}
  data={thisBar}
  totalBar={i.label === 'Total'}
  barLabel={i.label}
  total={numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}
  allTotal={dataType !== 'total' ? numberFormatter('dollars suffix', totalBudgetByAgency[i.label]) : ''}
  firstBar={key === 0}
  lastBar={key === chartData.length - 1}
  openModal={(e) => openModal(e, thisBar)}
  isModal={false}
				/>
			);
		});

		return (
			<>
				<Grid container className={styles.legendContainer}>
					<Grid item xs={12} lg={4} className={styles.legendAsOf}>
						Data updated as of May 1, 2020
					</Grid>
					<Grid className={styles.legend}>
						<div className={styles.blockContainer}>
							<div>
								<>
									<span className={`${styles.block} ${categories[0].legendStyle}`} />
									<span>{categories[0].name}</span>
								</>
								<>
									<span className={`${styles.block} ${categories[1].legendStyle}`} />
									<span>{categories[1].name}</span>
								</>
							</div>
							<div>
								<>
									<span className={`${styles.block} ${categories[2].legendStyle}`} />
									<span>{categories[2].name}</span>
								</>
								<>
									<span className={styles.block}>{categories[3].icon}</span>
									<span>{categories[3].name}</span>
								</>
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
					<span>0%</span>
					<span>50%</span>
					<span>100%</span>
				</div>
				<div
  className={styles.barContainer}
  aria-label="Horizontal stacked bar chart depicting the portion of total budgetary resources from the supplemental funding that have been obligated and outlaid to date. Data can be displayed by all accounts, spending accounts, or loan program accounts."
				>
					{table}
				</div>
			</>
		);
	};

	const SeeMoreButton = withStyles(() => ({
		root: {
			color: 'inherit',
			'text-transform': 'capitalize',
			'margin-top': '2rem',
			'border-top': 'solid thin #eee',
			'&:hover': {
				color: 'inherit',
			},
		},
	}))(Button);

	const accountBreakdownOptions = [
		{
			name: 'All Accounts',
			icon: <AllAccountsIcon className={styles.dropdownIcon} />,
		},
		{
			name: 'Spending Accounts',
			icon: <SpendingAccountsIcon className={styles.dropdownIcon} />,
		},
		{
			name: 'Loan Program Accounts',
			icon: <LoanProgramAccountsIcon className={styles.dropdownIcon} />,
		},
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
	};

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
				boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
			},
		},
	}))(InputBase);

	const titleComponent = (
		<>
			<h2 className={styles.sectionHeading}>Progress of COVID-19 Spending</h2>
			<AccordionList title="Instructions">
				<ul>
					<li>Hover over a bar or agency in the chart to see the detailed values of outlays, obligations, and unobligated funds.</li>
					<li>By clicking on a single bar within the chart, you can see the breakdown of obligations and outlays for each spending account by agency. Spending is tracked by account.</li>
					<li>To exit the pop-up, click or tap the X.</li>
					<li>To expand the list agencies, click or tap See More.</li>
				</ul>
			</AccordionList>
			<ControlBar alignRightOnMobile>
				<Share
					siteUrl={props.location.origin}
					pageUrl={`${props.location.pathname}#${props.sectionId}`}
					title="Data Lab - COVID-19 Tracking - U.S. Treasury"
					text="Curious how much #COVID-19 related funds have been spent? Head over to #DataLab to view our newest analysis, The Federal Response to COVID-19. #OpenData #Transparency http://datalab.usaspending.gov/federal-covid-spending/"
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
								horizontal: 'left',
							},
							transformOrigin: {
								vertical: 'top',
								horizontal: 'left',
							},
							getContentAnchorEl: null,
						}}
					>
						{accountBreakdownOptions.map((option) => (
							<MenuItem
								key={option.name}
								value={option.name}
								className={styles.dropdownItem}
							>
								{option.icon}
								{' '}
								{option.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
		</>
	);

	const paperStyle = typeof window !== 'undefined' && window.innerWidth < 576 ? {
		width: '95%', padding: '10px 8px',
	} : {};

	return (
		<>
			{titleComponent}

			<a id="topofchart" />
			{mainChart()}

			<ModalReference
				open={isModalOpen}
				close={closeModal}
				title={findModalTitle()}
				maxWidth={false}
				maxHeight
				paperStyle={paperStyle}
			>
				<Modal
					bar={selectedBar}
					data={filterModalData()}
					barData={selectedBarData}
					isModal
					activeAcc={activeAccountFilter}
					mobileTablet={screenMode === ScreenModeEnum.mobile || screenMode === ScreenModeEnum.tablet}
				/>
			</ModalReference>

			<ModalReference
				open={isInfoModalOpen}
				close={closeModal}
				title="Spending Definitions"
				titleStyle={{ fontWeight: 600 }}
				maxWidth
				maxHeight
			>
				{categories.map((c) => (
					<div className={styles.infoModalBody}>
						<div className={styles.heading}>
							<div className={`${styles.modalBlock} ${c.legendStyle || ''}`}>{c.icon}</div>
							{c.name}
						</div>
						{c.infoModalDescription}
					</div>
			  ))}
			</ModalReference>

			{showLess >= data[dataType].nodes.length
				? ''
				:				(
					<SeeMoreButton fullWidth onClick={handleSeeMore}>
						{limitBars
							?						(
								<>
									<div style={{ fontWeight: 600 }}>See More</div>
							&nbsp;(
									{data[dataType].nodes.length - limitBars}
									)
								</>
							)
							:						<div style={{ fontWeight: 600 }}>See Less</div>}
					</SeeMoreButton>
				)}

			<Downloads href="/data/federal-covid-spending/tracking/covid19_response_viz3_modal_agency2020-06-17.csv" date="May 2020" />
		</>
	);
}
