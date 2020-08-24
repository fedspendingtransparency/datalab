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

import GovtTotalSVG from 'src/images/covid/tracking/desktop/govtTotal.svg';
import Phase1SVG from 'src/images/covid/tracking/desktop/phase1.svg';
import Phase2SVG from 'src/images/covid/tracking/desktop/phase2.svg';
import Phase3TotalSVG from 'src/images/covid/tracking/desktop/phase3Total.svg';
import Phase3GeneralSVG from 'src/images/covid/tracking/desktop/phase3General.svg';
import Phase3LoanSVG from 'src/images/covid/tracking/desktop/phase3Loan.svg';
import Phase35TotalSVG from 'src/images/covid/tracking/desktop/phase35Total.svg';
import Phase35GeneralSVG from 'src/images/covid/tracking/desktop/phase35General.svg';
import Phase35LoanSVG from 'src/images/covid/tracking/desktop/phase35Loan.svg';

import GovtTotalMobileSVG from 'src/images/covid/tracking/mobile/govtTotal.svg';
import Phase1MobileSVG from 'src/images/covid/tracking/mobile/phase1.svg';
import Phase2MobileSVG from 'src/images/covid/tracking/mobile/phase2.svg';
import Phase3TotalMobileSVG from 'src/images/covid/tracking/mobile/phase3Total.svg';
import Phase3GeneralMobileSVG from 'src/images/covid/tracking/mobile/phase3General.svg';
import Phase3LoanMobileSVG from 'src/images/covid/tracking/mobile/phase3Loan.svg';
import Phase35TotalMobileSVG from 'src/images/covid/tracking/mobile/phase35Total.svg';
import Phase35GeneralMobileSVG from 'src/images/covid/tracking/mobile/phase35General.svg';
import Phase35LoanMobileSVG from 'src/images/covid/tracking/mobile/phase35Loan.svg';

import GovtTotalTabletSVG from 'src/images/covid/tracking/tablet/govtTotal.svg';
import Phase1TabletSVG from 'src/images/covid/tracking/tablet/phase1.svg';
import Phase2TabletSVG from 'src/images/covid/tracking/tablet/phase2.svg';
import Phase3TotalTabletSVG from 'src/images/covid/tracking/tablet/phase3Total.svg';
import Phase3GeneralTabletSVG from 'src/images/covid/tracking/tablet/phase3General.svg';
import Phase3LoanTabletSVG from 'src/images/covid/tracking/tablet/phase3Loan.svg';
import Phase35TotalTabletSVG from 'src/images/covid/tracking/tablet/phase35Total.svg';
import Phase35GeneralTabletSVG from 'src/images/covid/tracking/tablet/phase35General.svg';
import Phase35LoanTabletSVG from 'src/images/covid/tracking/tablet/phase35Loan.svg';
import CovidCopy from 'src/page-sections/federal-covid-funding/_data/covidcopy_yaml_2020-08-21.yml'

export default function Tracking(props) {

	const phaseDetail = {
		'govtTotal': {
			altText: `Horizontal stacked bar chart of total budgetary resources from the supplemental funding that have been obligated and outlayed ($${CovidCopy.totoutlays_trillions}T) to date. `,
			className: 'govtTotal'
		},
		'1': {
			title: 'Coronavirus Preparedness and Response Supplemental Appropriations Act, 2020',
			loanAcct: 'no',
			enactedDate: 'March 6, 2020',
			'Law Total': {
				altText: `Horizontal stacked bar chart of total budgetary resources from the Phase 1 legislation ($${CovidCopy.law1}B) that have been obligated and outlayed ($${CovidCopy.law1outlays_bill}B) to date. `,
				className: 'lawTotalOnly'
			}
		},
		'2': {
			title: 'Families First Coronavirus Response Act',
			loanAcct: 'no',
			enactedDate: 'March 18, 2020',
			'Law Total': {
				altText: `Horizontal stacked bar chart of total budgetary resources from the Phase 2 legislation ($${CovidCopy.law2}B) that have been obligated and outlayed ($${CovidCopy.law2outlays_bill}B) to date. `,
				className: 'lawTotalOnly'
			}
		},
		'3': {
			title: 'Coronavirus Aid, Relief, and Economic Security Act (CARES ACT)',
			loanAcct: 'yes',
			enactedDate: 'March 27, 2020',
			'Law Total': {
				altText: `Horizontal stacked bar chart of total budgetary resources from the Phase 3 legislation ($${CovidCopy.law3}T) that have been obligated and outlayed ($${CovidCopy.law3outlays_trill}T) to date.`,
				className: 'lawTotal'
			},
			'Spending': {
				altText: `Horizontal stacked bar chart of budgetary resources ($${CovidCopy.law3gen_trill}T) allocated to general account spending from the Phase 3 legislation. `,
				className: 'spending'
			},
			'Loan': {
				altText: `Horizontal stacked bar chart of budgetary resources ($${CovidCopy.law3loans_bill}T) allocated to loan account spending from the Phase 3 legislation.`,
				className: 'loan'
			}
		},
		'3.5': {
			title: 'Paycheck Protection Program and Health Care Enhancement Act',
			loanAcct: 'yes',
			enactedDate: 'April 24, 2020',
			'Law Total': {
				altText: `Horizontal stacked bar chart of total budgetary resources from the Phase 3.5 legislation ($${CovidCopy.law4}B) that have been obligated and outlayed ($${CovidCopy.law4outlays_bill}B) to date.`,
				className: 'lawTotal'
			},
			'Spending': {
				altText: `Horizontal stacked bar chart of budgetary resources ($${CovidCopy.law4gen_bill}B) allocated to general account spending from the Phase 3.5 legislation.`,
				className: 'spending'
			},
			'Loan': {
				altText: `Horizontal stacked bar chart of budgetary resources ($${CovidCopy.law4loans_bill}B) allocated to loan account spending from the Phase 3.5 legislation.`,
				className: 'loan'
			}
		}
	}

	const phaseDesktopSVGs = {
		'Total': {
			'Law Total': {
				svg: GovtTotalSVG,
				width: 911,
			}
		},
		'1': {
			'Law Total': {
				svg: Phase1SVG,
				width: 365,
			}
		},
		'2': {
			'Law Total': {
				svg: Phase2SVG,
				width: 378,
			}
		},
		'3': {
			'Law Total': {
				svg: Phase3TotalSVG,
				width: 654,
				className: 'lawTotal'
			},
			'Spending': {
				svg: Phase3GeneralSVG,
				width: 391,
				className: 'spending'
			},
			'Loan': {
				svg: Phase3LoanSVG,
				width: 391,
				className: 'loan'
			},
		},
		'3.5': {
			'Law Total': {
				svg: Phase35TotalSVG,
				width: 391,
				className: 'lawTotal'
			},
			'Spending': {
				svg: Phase35GeneralSVG,
				width: 403,
				className: 'spending'
			},
			'Loan': {
				svg: Phase35LoanSVG,
				width: 479,
				className: 'loan'
			},
		}
	}

	const phaseTabletSVGs = {
		'Total': {
			'Law Total': {
				svg: GovtTotalTabletSVG,
				width: 658,
			}
		},
		'1': {
			'Law Total': {
				svg: Phase1TabletSVG,
				width: 365,
			}
		},
		'2': {
			'Law Total': {
				svg: Phase2TabletSVG,
				width: 378,
			}
		},
		'3': {
			'Law Total': {
				svg: Phase3TotalTabletSVG,
				width: 539,
			},
			'Spending': {
				svg: Phase3GeneralTabletSVG,
				width: 391,
			},
			'Loan': {
				svg: Phase3LoanTabletSVG,
				width: 315,
			},
		},
		'3.5': {
			'Law Total': {
				svg: Phase35TotalTabletSVG,
				width: 319,
			},
			'Spending': {
				svg: Phase35GeneralTabletSVG,
				width: 402,
			},
			'Loan': {
				svg: Phase35LoanTabletSVG,
				width: 462,
			},
		}
	}

	const phaseMobileSVGs = {
		'Total': {
			'Law Total': {
				svg: GovtTotalMobileSVG,
				width: 323,
			}
		},
		'1': {
			'Law Total': {
				svg: Phase1MobileSVG,
				width: 310,
			}
		},
		'2': {
			'Law Total': {
				svg: Phase2MobileSVG,
				width: 310,
			}
		},
		'3': {
			'Law Total': {
				svg: Phase3TotalMobileSVG,
				width: 324,
			},
			'Spending': {
				svg: Phase3GeneralMobileSVG,
				width: 324,
			},
			'Loan': {
				svg: Phase3LoanMobileSVG,
				width: 324,
			},
		},
		'3.5': {
			'Law Total': {
				svg: Phase35TotalMobileSVG,
				width: 324,
			},
			'Spending': {
				svg: Phase35GeneralMobileSVG,
				width: 324,
			},
			'Loan': {
				svg: Phase35LoanMobileSVG,
				width: 324,
			},
		}
	}


	const data = useStaticQuery(graphql`
    query {
      totalsByLaw: allCovid19ResponseModalAgencytotalbylaw20200821Csv {
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
			total: allCovid19ResponseMain20200819Csv {
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
			accountsByType: allCovid19ResponseModal20200819Csv {
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
					This spending includes funds from accounts which are used to finance and administer <a target='_blank' href="https://www.usaspending.gov/#/?glossary=direct-loan">direct loans</a> or <a target='_blank' href="https://www.usaspending.gov/#/?glossary=guaranteed-insured-loans">guaranteed loan</a> programs through an intermediary lender. The amounts do not show the total <a target='_blank' href="https://usaspending.gov/#/?glossary=face-value">face value</a> of loans and loan guarantees that lenders have disbursed to businesses or individuals or when a PPP loan is forgiven. Instead, they show the estimated <a target='_blank' href="https://usaspending.gov/#/?glossary=subsidy-cost">subsidy cost</a> of those loans and loan guarantees and the cost of servicing and running the programs.
				</p>
				<p>
					Visit the <a target="_blank" href="https://usaspending.gov/covid-19">usaspending.gov/covid-19</a> page to see more detail on the face value of loans.
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
					return totalAccountsByLaw[selectedBar.label].sort((b, a) => (parseFloat(a.Total_Budgetary_Resources) > parseFloat(b.Total_Budgetary_Resources)) ? 1 : -1);
				case 'No':
					return loanAccountsByLaw[selectedBar.label].filter((i) => i.Loan_Program_Account === 'No').sort((b, a) => (parseFloat(a.Total_Budgetary_Resources) > parseFloat(b.Total_Budgetary_Resources)) ? 1 : -1);
				case 'Yes':
					return loanAccountsByLaw[selectedBar.label].filter((i) => i.Loan_Program_Account === 'Yes').sort((b, a) => (parseFloat(a.Total_Budgetary_Resources) > parseFloat(b.Total_Budgetary_Resources)) ? 1 : -1);
			}
		}

		return null;
	};

	const phase = (item, SectionTag) => {
		let title;
		let barType;

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
				barType = 'Law Total';
				break;
			case 'No':
				title = 'General Account Spending';
				barType = 'Spending';
				break;
			case 'Yes':
				title = 'Loan Account Spending';
				barType = 'Loan';
				break;
		}

		return (
			<>
				{item.Loan_Program_Account === 'Law Total' ?
					<>
						<div className={styles.phaseTitle}>
							Phase {item.label}: {phaseDetail[item.label].title}
						</div>
						<div className={styles.enactedDate}>
							Enacted {phaseDetail[item.label].enactedDate}
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

				{phaseDetail[item.label].loanAcct === 'yes' || item.Loan_Program_Account === 'Law Total' ?
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
						<img
							className={phaseDetail[item.label][barType].className}
							src={SectionTag.svg}
							width={SectionTag.width}
							alt={phaseDetail[item.label][barType].altText}
							onClick={(e) => openModalTag(e, item, thisBar, true)}
							 onKeyDown={(e) => openModalTag(e, item, thisBar, true)} />
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
							<img
								className={phaseDetail['govtTotal'].className}
								src={SectionTag.svg}
								width={SectionTag.width}
								alt={SectionTag.altText}
								alt={phaseDetail['govtTotal'].altText}
							/>
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
						Data updated as of ${CovidCopy.reportingdate}
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
					<li>To see details about the law for each phase, click or tap on Law Summary.</li>
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

	const infoModalTitleSize = screenMode === ScreenModeEnum.mobile ? '1.125rem' : '1.5rem';

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
				titleStyle={{ fontWeight: 600, fontSize: infoModalTitleSize, height: '40px' }}
				paperStyle={{ maxWidth: 554 }}
				maxWidth
				maxHeight
				customMaxWidth={screenMode >= ScreenModeEnum.desktop ? 0.5 : null}
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

			<div className={styles.footerBlurb}>
				<p>
				Continue exploring COVID-19 spending data by visiting <a href="https://usaspending.gov/covid-19" target="_blank">USAspending.gov/covid-19</a>.
				</p>
			</div>

			<Downloads
				href={`/data/federal-covid-spending/tracking/${CovidCopy.viz3csv}`}
				date={CovidCopy.vizdates} />
		</>
	);
}
