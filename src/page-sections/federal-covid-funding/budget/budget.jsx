import React, { useEffect, useState } from 'react';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Downloads from 'src/components/section-elements/downloads/downloads';
import FootnoteAnchor from 'src/components/footnotes/footnote-anchor';

import DesktopA from 'src/images/federal-covid-funding/budget/viz1ADesktop.svg';
import DesktopB from 'src/images/federal-covid-funding/budget/viz1BDesktop.svg';
import DesktopC from 'src/images/federal-covid-funding/budget/viz1CDesktop.svg';
import TabletA from 'src/images/federal-covid-funding/budget/viz1ATablet.svg';
import TabletB from 'src/images/federal-covid-funding/budget/viz1BTablet.svg';
import TabletC from 'src/images/federal-covid-funding/budget/viz1CTablet.svg';
import MobileA from 'src/images/federal-covid-funding/budget/viz1AMobile.svg';
import MobileB from 'src/images/federal-covid-funding/budget/viz1BMobile.svg';
import MobileC from 'src/images/federal-covid-funding/budget/viz1CMobile.svg';
import PurpleDot from 'src/svgs/federal-covid-funding/purpleDot.svg';
import CovidCopy from 'src/page-sections/federal-covid-funding/_data/covidcopy_yaml_2021-02-01.yml';

import { checkScreenMode, ScreenModeEnum } from 'src/utils/screen-mode';
import styles from './budget.module.scss';

// All widths are based on SVG sizes
const desktopSVGs = [
	{
		img: DesktopA,
		width: 659,
		height: 208,
		alt:
			'Bar chart of new agency funding through the four phases of COVID-19 appropriations, the largest funding coming from Phase 3 and the CARES Act.',
	},
	{
		img: DesktopB,
		width: 764,
		height: 141,
		alt:
			'Bar chart of the total estimated value of legislation ($' +
			CovidCopy.legislationvalue_trill +
			'T), which include New Agency Funding ($' +
			CovidCopy.totalbudgetresources +
			'T) and Tax Relief ($' +
			CovidCopy.taxrelief_billion +
			'B).',
	},
	{
		img: DesktopC,
		width: 945,
		height: 134,
		alt:
			'Bar chart showing total estimated lending ($' +
			CovidCopy.totcredit_trillions +
			'T) broken down by utilized lending ($' +
			CovidCopy.creditused_bill +
			'B) and available lending ($' +
			CovidCopy.creditavailprecise_trill +
			'T).',
	},
];

const mobileSVGs = [
	{
		img: MobileA,
		width: 303,
		height: 264,
		alt:
			'Bar chart of new agency funding through the four phases of COVID-19 appropriations, the largest funding coming from Phase 3 and the CARES Act.',
	},
	{
		img: MobileB,
		width: 312,
		height: 139,
		alt:
			'Bar chart of the total estimated value of legislation ($' +
			CovidCopy.legislationvalue_trill +
			'T), which include New Agency Funding ($' +
			CovidCopy.totalbudgetresources +
			'T) and Tax Relief ($' +
			CovidCopy.taxrelief_billion +
			'B).',
	},
	{
		img: MobileC,
		width: 333,
		height: 131,
		alt:
			'Bar chart showing total estimated lending ($' +
			CovidCopy.totcredit_trillions +
			'T) broken down by utilized lending ($' +
			CovidCopy.creditused_bill +
			'B) and available lending ($' +
			CovidCopy.creditavailprecise_trill +
			'T).',
	},
];

const tabletSVGs = [
	{
		img: TabletA,
		width: 530,
		height: 208,
		alt:
			'Bar chart of new agency funding through the four phases of COVID-19 appropriations, the largest funding coming from Phase 3 and the CARES Act.',
	},
	{
		img: TabletB,
		width: 661,
		height: 141,
		alt:
			'Bar chart of the total estimated value of legislation ($' +
			CovidCopy.legislationvalue_trill +
			'T), which include New Agency Funding ($' +
			CovidCopy.totalbudgetresources +
			'T) and Tax Relief ($' +
			CovidCopy.taxrelief_billion +
			'B).',
	},
	{
		img: TabletC,
		width: 690,
		height: 134,
		alt:
			'Bar chart showing total estimated lending ($' +
			CovidCopy.totcredit_trillions +
			'T) broken down by utilized lending ($' +
			CovidCopy.creditused_bill +
			'B) and available lending ($' +
			CovidCopy.creditavailprecise_trill +
			'T).',
	},
];

export default function Budget(props) {
	const [screenMode, setScreenMode] = useState(0);

	const [svgs, setSvgs] = useState(mobileSVGs);

	if (typeof window !== 'undefined') {
		const resizeWindow = () => {
			const newMode = checkScreenMode(window.innerWidth);
			setScreenMode(newMode);

			if (newMode >= ScreenModeEnum.desktop) {
				setSvgs(desktopSVGs);
			} else if (newMode === ScreenModeEnum.mobile) {
				setSvgs(mobileSVGs);
			} else if (newMode === ScreenModeEnum.tablet) {
				setSvgs(tabletSVGs);
			}
		};

		useEffect(() => {
			resizeWindow();
			window.addEventListener('resize', resizeWindow);
			return () => {
				window.removeEventListener('resize', resizeWindow);
			};
		}, []);
	}

	const PhaseWrapper = props => {
		return (
			<div className={styles.phaseContainer}>
				<div className={styles.phaseDotsContainer}>
					<PurpleDot />
					{props.hideLine ? null : <div className={styles.line}></div>}
				</div>
				<div className={styles.phaseBody}>{props.children}</div>
			</div>
		);
	};

	const Chart = () => (
		<>
			<PhaseWrapper>
				<p>
					As of {CovidCopy.reportingdate}, roughly{' '}
					<strong>
						${CovidCopy.totalbudgetresources} trillion in new budgetary resources
					</strong>{' '}
					have been made available for federal agencies to respond to the pandemic.
					Agencies can use this funding for contracts, grants, loans, and other
					assistance, as well as direct payments like the Economic Impact Payments
					(EIP) appropriated in Phase 3.
				</p>
				<img
					src={svgs[0].img}
					width={svgs[0].width}
					height={svgs[0].height}
					alt={svgs[0].alt}
				/>
			</PhaseWrapper>
			<PhaseWrapper>
				<p>
					In addition to granting new agency funding, the legislation also mandated
					the government{' '}
					<strong>
						defer and reduce taxes to provide relief to individuals and businesses.
					</strong>{' '}
					As an example, this includes payroll tax deferrals, which means companies
					can postpone the deposit and payment of the employer’s share of Social
					Security taxes. The Congressional Budget Office (CBO) estimated the
					two-year impact will be over ${CovidCopy.taxrelief_billion} billion in tax
					relief.
				</p>
				<img
					src={svgs[1].img}
					width={svgs[1].width}
					height={svgs[1].height}
					alt={svgs[1].alt}
				/>
			</PhaseWrapper>
			<PhaseWrapper>
				<p>
					The four laws included{' '}
					<strong>
						funding for credit, loans and loan guarantee programs, which could result
						in an estimated total of ${CovidCopy.totcredit_trillions} trillion in
						total lending.
					</strong>{' '}
					As of {CovidCopy.reportingdate}, ${CovidCopy.creditused_bill} billion in
					credit, loans and loan guarantees have been reported and more than $
					{CovidCopy.creditavail_trill} trillion remain available.
				</p>
				<img
					src={svgs[2].img}
					width={svgs[2].width}
					height={svgs[2].height}
					alt={svgs[2].alt}
				/>
			</PhaseWrapper>
			<PhaseWrapper hideLine>
				<p>
					The CARES Act and other supplemental legislation are providing financial
					relief in response to the pandemic through agency funding, tax deferrals,
					and lending. While the total impact of this legislation may not be measured
					until years from now, agencies are already playing a critical role by
					disbursing the ${CovidCopy.totalbudgetresources} trillion in funding
					allocated through the appropriations process. Next, we look at the process
					of how funds are spent, from Congressional appropriations to payments to
					individuals and businesses.
				</p>
			</PhaseWrapper>
		</>
	);

	const Header = () =>
		screenMode >= ScreenModeEnum.tablet ? (
			<ControlBar>
				<h2 className={styles.vizTitle}>{props.section.viztitle}</h2>
				<Share
					siteUrl={props.location.origin}
					pageUrl={`${props.location.pathname}#${props.sectionId}`}
					title="Data Lab - COVID-19 tracking stuff - U.S. Treasury"
					text="Interested in learning about #COVID19 supplemental funding? Head over to #DataLab to view our newest analysis, The Federal Response to COVID-19. #OpenData #Transparency http://datalab.usaspending.gov/federal-covid-funding/"
					hoverColor="#1302d9"
				/>
			</ControlBar>
		) : (
			<>
				<h2 className={styles.vizTitle}>{props.section.viztitle}</h2>
				<ControlBar alignRightOnMobile>
					<Share
						siteUrl={props.location.origin}
						pageUrl={`${props.location.pathname}#${props.sectionId}`}
						title="Data Lab - COVID-19 tracking stuff - U.S. Treasury"
						text="Interested in learning about #COVID19 supplemental funding? Head over to #DataLab to view our newest analysis, The Federal Response to COVID-19. #OpenData #Transparency http://datalab.usaspending.gov/federal-covid-funding/"
						hoverColor="#1302d9"
					/>
				</ControlBar>
			</>
		);

	return (
		<>
			<Header />
			<div className={styles.chartContainer}>
				<Chart />
			</div>
			<Downloads
				href={'/data/federal-covid-spending/budget/' + CovidCopy.viz1csv}
				date={CovidCopy.vizdates}
				justify={screenMode <= ScreenModeEnum.tablet ? 'center' : ''}
			/>
		</>
	);
}
