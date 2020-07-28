import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';

import AccordionList from 'src/components/accordion-list/accordion-list';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ControlBar from 'src/components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import numberFormatter from 'src/utils/number-formatter/number-formatter';
import Share from 'src/components/share/share';
import ModalReference from 'src/components/modal/modal';
import { Grid } from '@material-ui/core';
import Modal from './modal/modal';
import Bar from './bars/bar';
import LIcon from '../../../svgs/federal-covid-spending/tracking/l-icon.svg';
import styles from './tracking.module.scss';
import defaultImage from 'src/images/default-image.jpg';
import PurpleDot from '../../../svgs/federal-covid-spending/budget/purpleDot.svg';

export default function Tracking(props) {

	const phaseDetail = {
		'1': {
			title: 'Coronavirus Preparedness and Response Supplemental Appropriations Act, 2020',
			loanAcct: 'no',
			enactedDate: '3/6/2020',
			height: '200',
			svgs: {total: 'somepath'}
		},
		'2': {
			title: 'Families First Coronavirus Response Act',
			loanAcct: 'no',
			enactedDate: '3/6/2020',
			height: '200',
			svgs: {total: 'somepath'}
		},
		'3': {
			title: 'Coronavirus Aid, Relief, and Economic Security Act',
			loanAcct: 'yes',
			enactedDate: '3/6/2020',
			height: '200',
			svgs: {
				total: 'somepath',
				spending: 'somepath2',
				loan: 'somepath3'
			}
		},
		'3.5': {
			title: 'Paycheck Protection Program and Health Care Enhancement Act',
			loanAcct: 'yes',
			enactedDate: '3/6/2020',
			height: '200',
			svgs: {
				total: 'somepath',
				spending: 'somepath2',
				loan: 'somepath3'
			}
		}
	}

	const phaseSvgs = {
		'1': {
			total: 'somepath',
			spending: 'somepath2',
			loan: 'somepath3'
		},
	}

	const data = useStaticQuery(graphql`
    query {
      totalsByLaw: allCovid19ResponseModalAgencytotalbylaw20200717Csv {
				group(field: Legislation) {
          fieldValue
					nodes {
						label: Legislation
						Agency
						Percent_Outlayed
						Percent_Obligated_Not_Outlayed
						Percent_Unobligated
						Amount_Outlayed
						Amount_Obligated
						Amount_Unobligated
						Total_Budgetary_Resources
					}
				}
      }
			total: allCovid19ResponseMain20200717Csv {
        nodes {
					label: Legislation
					Percent_Outlayed
					Percent_Obligated_Not_Outlayed
					Percent_Unobligated
					Amount_Outlayed
					Amount_Obligated
					Amount_Unobligated
					Total_Budgetary_Resources
					Loan_Program_Account
        }
      }
			accountsByType: allCovid19ResponseModalLoanacct20200717Csv {
				group(field: Legislation) {
          fieldValue
					nodes {
						label: Legislation
						Agency
						Percent_Outlayed
						Percent_Obligated_Not_Outlayed
						Percent_Unobligated
						Amount_Outlayed
						Amount_Obligated
						Amount_Unobligated
						Total_Budgetary_Resources
						Loan_Program_Account
					}
				}
      }
    }
	`);

	const loanAccountsByLaw = {};
	data.accountsByType.group.forEach((item) => {
		loanAccountsByLaw[item.fieldValue] = item.nodes;
	});

	const totalAccountsByLaw = {};
	data.totalsByLaw.group.forEach((item) => {
		totalAccountsByLaw[item.fieldValue] = item.nodes;
	});

	const totalBudgetByLaw = {};
	data.total.nodes.forEach((item) => {
		if (item.Loan_Program_Account === 'Law Total') {
			totalBudgetByLaw[item.label] = item.Total_Budgetary_Resources
		}
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
	}, []);

	const [isInfoModalOpen, setInfoModalState] = useState(false);

	const [selectedBar, setSelectedBar] = useState(null);
	const [isModalOpen, setModalState] = useState(false);

	const openModal = (e, el, barData) => {
		setModalState(true);
		setSelectedBar(el);
		setSelectedBarData(barData);
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


	const modalTotalOfAmount = (selection) => (
		<span className={styles.selectionAmountValSmall}>
			{selection ? ` of ${numberFormatter('dollars suffix', totalBudgetByLaw[selection], 3)}` : ''}
		</span>
	);

	const findModalTitle = () => {
		if (selectedBar && selectedBar.label) {
			const selectionAmount = data.total.nodes.find((item) => item.label === selectedBar.label);
			let subtitle = 'Spending By Agency';
			let ofTotalAmount;
			let icon = <></>;
			if (selectedBar.Loan_Program_Account === 'No') {
				subtitle = 'General Account Spending';
				ofTotalAmount = selectedBar.label;
			} else if (selectedBar.Loan_Program_Account === 'Yes') {
				subtitle = 'Loan Account Spending';
				ofTotalAmount = selectedBar.label;
				icon = <>&nbsp;<LIcon />&nbsp;</>
			}
			return [
				<span className={styles.modalTitle}>
					PHASE {selectedBar.label}: {icon} Progress of {subtitle}
					{' '}
				</span>,
				<span className={styles.selectionAmountVal}>
					{selectionAmount ? numberFormatter('dollars suffix', selectedBar.Total_Budgetary_Resources, 3) : ''}
				</span>,
				modalTotalOfAmount(ofTotalAmount),
			];
		}
		return <></>;
	};

	const filterModalData = () => {
		if (selectedBar && selectedBar.label) {
			switch (selectedBar.Loan_Program_Account) {
			case 'Law Total':
				return totalAccountsByLaw[selectedBar.label];
			case 'No':
				return loanAccountsByLaw[selectedBar.label].filter((i) => i.Loan_Program_Account === 'No');
			case 'Yes':
				return loanAccountsByLaw[selectedBar.label].filter((i) => i.Loan_Program_Account === 'Yes');
			}
		}

		return null;
	};

	const program = (i) => {
		if(i.Loan_Program_Account !== 'Law Total') {
			return null;
		}

		return (<>
			<p>Phase {i.label}: {phaseDetail[`${i.label}`].title}</p>
			<p>Enacted {phaseDetail[`${i.label}`].enactedDate}</p>
			</>)
	}
	const phase = (i, thisBar) => {
		let title;

		switch (i.Loan_Program_Account) {
		case 'Law Total':
			title = 'Law Total';
			break;
		case 'No':
			title = 'General Spending Account';
			break;
		case 'Yes':
			title = 'Loan Program Account';
			break;
		}

		return (
			<>
				{i.Loan_Program_Account === 'Law Total' ?
					<>
						<p>Phase {i.label}: {phaseDetail[`${i.label}`].title}</p>
						<p>Enacted {phaseDetail[`${i.label}`].enactedDate}</p>
					</>
					: null
				}
				<p onClick={(e) => openModal(e, i, thisBar)}>{title}</p>
				<img src={defaultImage} height='25' />
			</>
		)
	}

	const mainChart = () => {
		const chartData = data.total.nodes;
		const table = chartData.map((i, key) => {
			const thisBar = [{
				amount: i.Amount_Outlayed,
				percent: parseFloat(i.Percent_Outlayed).toFixed(2),
			}, {
				amount: i.Amount_Obligated,
				percent: parseFloat(i.Percent_Obligated_Not_Outlayed).toFixed(2),
			}, {
				amount: i.Amount_Unobligated,
				percent: parseFloat(i.Percent_Unobligated).toFixed(2),
			}];

			return (
				<>
					{i.label === 'Total' ?
						<>
							<p>New Agency Spending</p>
							<Bar
								key={key}
								data={thisBar}
								totalBar={i.label === 'Total'}
								total={numberFormatter('dollars suffix', i.Total_Budgetary_Resources, 3)}
								isModal={false}
							/>
						</>
					:
						phase(i, thisBar)
					}

				</>
			);
		});

		return (
			<>
				<Grid container className={styles.legendContainer}>
					<Grid item xs={12} lg={4} className={styles.legendAsOf}>
						Data updated as of July 1, 2020
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
							<IconButton className={styles.infoButton} onClick={openInfoModal} aria-label="Spending Definitions">
								<InfoOutlinedIcon className={styles.icon} />
							</IconButton>
						</div>
					</Grid>
				</Grid>
				<div
					className={styles.barContainer}
					aria-label="Horizontal stacked bar chart depicting the portion of total budgetary resources from the supplemental funding that have been obligated and outlaid to date. Data can be displayed by all accounts, spending accounts, or loan program accounts."
				>
					<div className={styles.vizContainer}>
						<div className={styles.phaseDotsContainer}>
							{Object.keys(phaseDetail).map((i, key) => {
								return (
									<>
										<PurpleDot />
										<svg width={8}>
											<line x1="0" y1="0" x2="0" y2="200"
														style={{"stroke":"grey","stroke-width":"2"}} />
										</svg>
									</>
								)
							})}
						</div>
						<div className={styles.chartContainer}>
							{table}
						</div>
					</div>
				</div>
			</>
		);
	};

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
					text="Curious how much #COVID-19 related funds have been spent? Head over to #DataLab to view our newest analysis, The Federal Response to COVID-19. #OpenData #Transparency http://datalab.usaspending.gov/federal-covid-funding/"
				/>
			</ControlBar>
		</>
	);

	const paperStyle = typeof window !== 'undefined' && window.innerWidth < 576 ? {
		width: '95%', padding: '10px 8px',
	} : {};

	let mainBar = <></>;

	if (selectedBar) {
		const mainBarData = [{
			amount: selectedBar.Amount_Outlayed,
			percent: parseFloat(selectedBar.Percent_Outlayed).toFixed(2),
		}, {
			amount: selectedBar.Amount_Obligated,
			percent: parseFloat(selectedBar.Percent_Obligated_Not_Outlayed).toFixed(2),
		}, {
			amount: selectedBar.Amount_Unobligated,
			percent: parseFloat(selectedBar.Percent_Unobligated).toFixed(2),
		}];

		mainBar = (
			<Bar
				data={mainBarData}
				isModal
			/>
		);
	}

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
					bar={selectedBar && selectedBar.label ? selectedBar.label : ''}
					data={filterModalData()}
					mainBar={mainBar}
					isModal
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

			<Downloads href="/data/federal-covid-spending/tracking/covid19_response_viz3_modal_agency2020-06-19.csv" date="June 2020" />
		</>
	);
}
