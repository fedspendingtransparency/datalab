import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';

import AccordionList from 'src/components/accordion-list/accordion-list';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import ControlBar from 'src/components/control-bar/control-bar';
import Downloads from 'src/components/section-elements/downloads/downloads';
import numberFormatter from 'src/utils/number-formatter/number-formatter';
import Share from 'src/components/share/share';
import ModalReference from 'src/components/modal/modal';
import { Grid } from '@material-ui/core';
import Modal from './modal/modal';
import LawSummaryModal from './law-summary-modal/modal';
import Bar from './bars/bar';
import styles from './tracking.module.scss';

import LIcon from '../../../svgs/federal-covid-spending/tracking/l-icon.svg';
import PurpleDot from '../../../svgs/federal-covid-spending/purpleDot.svg';

import GovtTotalSVG from 'src/svgs/federal-covid-spending/tracking/desktop/govtTotal.svg';
import Phase1SVG from 'src/svgs/federal-covid-spending/tracking/desktop/phase1.svg';
import Phase2SVG from 'src/svgs/federal-covid-spending/tracking/desktop/phase2.svg';
import Phase3TotalSVG from 'src/svgs/federal-covid-spending/tracking/desktop/phase3Total.svg';
import Phase3GeneralSVG from 'src/svgs/federal-covid-spending/tracking/desktop/phase3General.svg';
import Phase3LoanSVG from 'src/svgs/federal-covid-spending/tracking/desktop/phase3Loan.svg';
import Phase35TotalSVG from 'src/svgs/federal-covid-spending/tracking/desktop/phase35Total.svg';
import Phase35GeneralSVG from 'src/svgs/federal-covid-spending/tracking/desktop/phase35General.svg';
import Phase35LoanSVG from 'src/svgs/federal-covid-spending/tracking/desktop/phase35Loan.svg';

import GovtTotalMobileSVG from 'src/svgs/federal-covid-spending/tracking/mobile/govtTotal.svg';
import Phase1MobileSVG from 'src/svgs/federal-covid-spending/tracking/mobile/phase1.svg';
import Phase2MobileSVG from 'src/svgs/federal-covid-spending/tracking/mobile/phase2.svg';
import Phase3TotalMobileSVG from 'src/svgs/federal-covid-spending/tracking/mobile/phase3Total.svg';
import Phase3GeneralMobileSVG from 'src/svgs/federal-covid-spending/tracking/mobile/phase3General.svg';
import Phase3LoanMobileSVG from 'src/svgs/federal-covid-spending/tracking/mobile/phase3Loan.svg';
import Phase35TotalMobileSVG from 'src/svgs/federal-covid-spending/tracking/mobile/phase35Total.svg';
import Phase35GeneralMobileSVG from 'src/svgs/federal-covid-spending/tracking/mobile/phase35General.svg';
import Phase35LoanMobileSVG from 'src/svgs/federal-covid-spending/tracking/mobile/phase35Loan.svg';

import GovtTotalTabletSVG from 'src/svgs/federal-covid-spending/tracking/tablet/govtTotal.svg';
import Phase1TabletSVG from 'src/svgs/federal-covid-spending/tracking/tablet/phase1.svg';
import Phase2TabletSVG from 'src/svgs/federal-covid-spending/tracking/tablet/phase2.svg';
import Phase3TotalTabletSVG from 'src/svgs/federal-covid-spending/tracking/tablet/phase3Total.svg';
import Phase3GeneralTabletSVG from 'src/svgs/federal-covid-spending/tracking/tablet/phase3General.svg';
import Phase3LoanTabletSVG from 'src/svgs/federal-covid-spending/tracking/tablet/phase3Loan.svg';
import Phase35TotalTabletSVG from 'src/svgs/federal-covid-spending/tracking/tablet/phase35Total.svg';
import Phase35GeneralTabletSVG from 'src/svgs/federal-covid-spending/tracking/tablet/phase35General.svg';
import Phase35LoanTabletSVG from 'src/svgs/federal-covid-spending/tracking/tablet/phase35Loan.svg';

export default function Tracking(props) {

	const phaseDetail = {
		'1': {
			title: 'Coronavirus Preparedness and Response Supplemental Appropriations Act, 2020',
			loanAcct: 'no',
			enactedDate: 'March 6, 2020',
		},
		'2': {
			title: 'Families First Coronavirus Response Act',
			loanAcct: 'no',
			enactedDate: 'March 18, 2020',
		},
		'3': {
			title: 'Coronavirus Aid, Relief, and Economic Security Act (CARES ACT)',
			loanAcct: 'yes',
			enactedDate: 'March 27, 2020',
		},
		'3.5': {
			title: 'Paycheck Protection Program and Health Care Enhancement Act',
			loanAcct: 'yes',
			enactedDate: 'April 24, 2020',
		}
	}

	const phaseDesktopSVGs = {
		'Total': {
			'Law Total': GovtTotalSVG
		},
		'1': {
			'Law Total': Phase1SVG
		},
		'2': {
			'Law Total': Phase2SVG
		},
		'3': {
			'Law Total': Phase3TotalSVG,
			'Spending': Phase3GeneralSVG,
			'Loan': Phase3LoanSVG
		},
		'3.5': {
			'Law Total': Phase35TotalSVG,
			'Spending': Phase35GeneralSVG,
			'Loan': Phase35LoanSVG
		}
	}

	const phaseTabletSVGs = {
		'Total': {
			'Law Total': GovtTotalTabletSVG
		},
		'1': {
			'Law Total': Phase1TabletSVG
		},
		'2': {
			'Law Total': Phase2TabletSVG
		},
		'3': {
			'Law Total': Phase3TotalTabletSVG,
			'Spending': Phase3GeneralTabletSVG,
			'Loan': Phase3LoanTabletSVG
		},
		'3.5': {
			'Law Total': Phase35TotalTabletSVG,
			'Spending': Phase35GeneralTabletSVG,
			'Loan': Phase35LoanTabletSVG
		}
	}

	const phaseMobileSVGs = {
		'Total': {
			'Law Total': GovtTotalMobileSVG
		},
		'1': {
			'Law Total': Phase1MobileSVG
		},
		'2': {
			'Law Total': Phase2MobileSVG
		},
		'3': {
			'Law Total': Phase3TotalMobileSVG,
			'Spending': Phase3GeneralMobileSVG,
			'Loan': Phase3LoanMobileSVG
		},
		'3.5': {
			'Law Total': Phase35TotalMobileSVG,
			'Spending': Phase35GeneralMobileSVG,
			'Loan': Phase35LoanMobileSVG
		}
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

	const accountsByPhase = {};
	data.total.nodes.forEach((item) => {
		switch (item.Loan_Program_Account) {
			case 'Law Total':
				if (item.label === 'Total') {
					accountsByPhase['govtTotal'] = item;
				} else {
					accountsByPhase[item.label] = {};
					accountsByPhase[item.label]['Law Total'] = item;
				}
				break;
			case 'No':
				if (phaseDetail[item.label].loanAcct === 'yes') {
					accountsByPhase[item.label]['Spending'] = item;
				}
				break;
			case 'Yes':
				accountsByPhase[item.label]['Loan'] = item;
				break;
		}
	})

	const [screenMode, setScreenMode] = useState(0);
	const [svgs, setSvgs] = useState(phaseMobileSVGs);

	if (typeof window !== 'undefined') {
		const resizeWindow = () => {
			const newMode = checkScreenMode(window.innerWidth);
			if (newMode === ScreenModeEnum.mobile) {
				setSvgs(phaseMobileSVGs);
			} else if (newMode === ScreenModeEnum.tablet) {
				setSvgs(phaseTabletSVGs);
			} else {
				setSvgs(phaseDesktopSVGs);
			}
			setScreenMode(newMode);
		};

		useEffect(() => {
			resizeWindow();
			window.addEventListener('resize', resizeWindow);
			return () => {
				window.removeEventListener('resize', resizeWindow);
			};
		}, []);
	}

	const [isInfoModalOpen, setInfoModalState] = useState(false);
	const [isLawSummaryModalOpen, setLawSummaryModalState] = useState(false);
	const [lawSummaryModalPhase, setLawSummaryModalPhase] = useState(1);

	const [selectedBar, setSelectedBar] = useState(null);
	const [isModalOpen, setModalState] = useState(false);

	const openModal = (e, el) => {
		setModalState(true);
		setSelectedBar(el);
	};

	const openModalTag = (e, el, isSvg) => {
		if (isSvg && screenMode === ScreenModeEnum.mobile || screenMode === ScreenModeEnum.tablet) {
			return null;
		}
		if (!e.key || e.key === 'Enter') {
			setModalState(true);
			setSelectedBar(el);
		}
	}

	const openInfoModal = () => {
		setInfoModalState(true);
	};

	const openLawSummaryModal = (e, phase) => {
		if (!e.key || e.key === 'Enter') {
			setLawSummaryModalPhase(phase)
			setLawSummaryModalState(true);
		}
	}

	const closeModal = () => {
		setModalState(false);
		setInfoModalState(false);
		setLawSummaryModalState(false);
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
			name: 'Loan Account Spending',
			icon: <LIcon />,
			infoModalDescription: <>
				<p>
					This spending includes funds from accounts which are used to finance and administer direct loans or guaranteed loan programs through an intermediary lender. The amounts do not show the total face value of loans and loan guarantees that lenders have disbursed to businesses or individuals or when a PPP loan is forgiven. Instead, they show the estimated subsidy cost of those loans and loan guarantees and the cost of servicing and running the programs.
				</p>
				<p>
					Visit the usaspending.gov/covid-19 page to see more detail on the face value of loans.
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
				icon = <>&nbsp;<LIcon height={22} width={22} />&nbsp;</>
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
					return totalAccountsByLaw[selectedBar.label].sort((b,a) => (parseFloat(a.Total_Budgetary_Resources) > parseFloat(b.Total_Budgetary_Resources)) ? 1 : -1 );
				case 'No':
					return loanAccountsByLaw[selectedBar.label].filter((i) => i.Loan_Program_Account === 'No').sort((b,a) => (parseFloat(a.Total_Budgetary_Resources) > parseFloat(b.Total_Budgetary_Resources)) ? 1 : -1 );
				case 'Yes':
					return loanAccountsByLaw[selectedBar.label].filter((i) => i.Loan_Program_Account === 'Yes').sort((b,a) => (parseFloat(a.Total_Budgetary_Resources) > parseFloat(b.Total_Budgetary_Resources)) ? 1 : -1 );
			}
		}

		return null;
	};

	const phase = (item, SectionTag) => {
		let title;
		const thisBar = [{
			amount: item.Amount_Outlayed,
			percent: parseFloat(item.Percent_Outlayed).toFixed(2),
		}, {
			amount: item.Amount_Obligated,
			percent: parseFloat(item.Percent_Obligated_Not_Outlayed).toFixed(2),
		}, {
			amount: item.Amount_Unobligated,
			percent: parseFloat(item.Percent_Unobligated).toFixed(2),
		}];

		switch (item.Loan_Program_Account) {
			case 'Law Total':
				title = 'Law Total';
				break;
			case 'No':
				title = 'General Account Spending';
				break;
			case 'Yes':
				title = 'Loan Account Spending';
				break;
		}

		return (
			<>
				{item.Loan_Program_Account === 'Law Total' ?
					<>
						<div className={styles.phaseTitle}>
							Phase {item.label}: {phaseDetail[`${item.label}`].title}
						</div>
						<div className={styles.enactedDate}>
							Enacted {phaseDetail[`${item.label}`].enactedDate}
							<span className={styles.lawSummaryDivider}>|</span>
							<span
								id={`law-${item.label}-summary-button`}
								className={styles.lawSummary}
								onClick={(e) => openLawSummaryModal(e, item.label)}
								onKeyDown={(e) => openLawSummaryModal(e, item.label)}
								tabIndex={0}
							>
								<FontAwesomeIcon icon={faInfoCircle} className={styles.icon} />
								Law Summary
							</span>
						</div>
					</>
					: null
				}

				{phaseDetail[`${item.label}`].loanAcct === 'yes' || item.Loan_Program_Account === 'Law Total' ?
					<div className={styles.barDiv}>
						<a tabIndex='0'
							id="phase-anchor"
							className={styles.barTitle}
							onClick={(e) => openModal(e, item, thisBar)}>
							{item.Loan_Program_Account === 'Yes' ?
								<>
									<LIcon />
										&nbsp;&nbsp;{title}
								</>
								: title}
						</a>
						<br />
						<SectionTag onClick={(e) => openModalTag(e, item, thisBar, true)} onKeyDown={(e) => openModalTag(e, item, thisBar, true)} />
						<br />
					</div>
					: null
				}
			</>
		)
	}
	const PhaseWrapper = (props) => {
		return (<div className={styles.phaseContainer}>
			<div className={styles.phaseDotsContainer}>
				<PurpleDot />
				{props.hideLine ? null :
					<div className={styles.line}></div>}
			</div>
			<div className={styles.phaseBody}>
				{props.children}
			</div>
		</div>);
	};

	const mainChart = () => {
		const chartData = accountsByPhase;
		const table = ['govtTotal', '1', '2', '3', '3.5'].map((phaseItem, key) => {
			let SectionTag;

			switch (phaseItem) {
				case 'govtTotal':
					SectionTag = svgs['Total']['Law Total'];
					return (
						<PhaseWrapper>
							<div className={styles.totalHeading}>New Agency Funding</div>
							<SectionTag />
						</PhaseWrapper>
					);
					break;
				case '1':
				case '2':
					SectionTag = svgs[phaseItem]['Law Total'];
					return (
						<PhaseWrapper>
							{phase(chartData[phaseItem]['Law Total'], SectionTag)}
						</PhaseWrapper>
					)
					break;
				case '3':
					return (
						<PhaseWrapper>
							{['Law Total', 'Spending', 'Loan'].map((item, key) => {
								SectionTag = svgs[phaseItem][item];
								return phase(chartData[phaseItem][item], SectionTag);
							})}
						</PhaseWrapper>
					)
					break;
				case '3.5':
					return (
						<PhaseWrapper hideLine={true}>
							{['Law Total', 'Spending', 'Loan'].map((item, key) => {
								SectionTag = svgs[phaseItem][item];
								return phase(chartData[phaseItem][item], SectionTag);
							})}
						</PhaseWrapper>
					)
					break;
			}
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
					<li>Click or tap on any bar graph label in this visualization to see the breakdown of obligations and outlays for each phase by agency.</li>
					<li>To see details of the laws for each phase, click or tap on Law Summary.</li>
					<li>To exit the pop-up, click or tap the X.</li>
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
				<div className={styles.scaleContainer}><p>Represented on a 100% scale</p></div>
				<div className={styles.percentLegend}>
					<span>0%</span>
					<span>50%</span>
					<span>100%</span>
				</div>
				
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
			<LawSummaryModal
				isOpen={isLawSummaryModalOpen}
				closeModal={closeModal}
				phase={lawSummaryModalPhase}
			/>
			<Downloads href="/data/federal-covid-spending/tracking/covid19_response_download_2020-07-17.csv" date="July 2020" />
		</>
	);
}
