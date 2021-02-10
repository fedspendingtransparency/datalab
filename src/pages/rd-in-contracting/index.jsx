import React from 'react';
import styles from './rd-in-contracting.module.scss';
import globalStyles from 'src/styles/variables.scss';

import Categories from 'src/page-sections/rd-in-contracting/categories/categories.jsx';
import Footnotes from '../../components/footnotes/footnotes';
import SEO from 'src/components/seo';
import Spending from 'src/page-sections/rd-in-contracting/spending/spending-chart';
import Studies from 'src/page-sections/rd-in-contracting/studies/studies';
import StoryLayout from '../../components/layouts/story/story';
import StorySection from 'src/components/section-elements/story-section/story-section';

import Accordion from 'src/components/accordion/accordion';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import microscope from 'src/images/rd-in-contracting/microscope.svg';
import science from 'src/images/rd-in-contracting/science.svg';
import bottle from 'src/images/rd-in-contracting/bottle.svg';
import bulb from 'src/images/rd-in-contracting/bulb.svg';
import Grid from '@material-ui/core/Grid';

// Coming Soon only!
import Default from 'src/components/layouts/default/default';
import Desktop from 'src/svgs/rd-and-contracting/comingsoon/desktop.svg';
import Tablet from 'src/svgs/rd-and-contracting/comingsoon/tablet.svg';
import Mobile from 'src/svgs/rd-and-contracting/comingsoon/mobile.svg';
import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';
import { HeadOnly } from 'src/components/headers/headers';
import FootnoteAnchor from "../../components/footnotes/footnote-anchor";

export default class RdInContractingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screenMode: 0,
			isQAT: false,
		};
	}

	componentDidMount() {
		this.resizeWindow();
		window.addEventListener('resize', this.resizeWindow);
		this.setState({
			isQAT:
				window.location.href.indexOf('localhost') > -1 ||
				window.location.href.indexOf('datalab-qat') > -1,
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeWindow);
	}

	resizeWindow = () => {
		const newMode = checkScreenMode(window.innerWidth);
		if (newMode !== this.state.screenMode) {
			this.setState({ screenMode: newMode });
		}
	};

	whatIsContents = () => (
		<div className={styles.accordionContents}>
			<img src={microscope} role="presentation" className={styles.centerImg} />
			<p className={styles.extraSpace}>
				Research and development are part of a process to help us find solutions to
				problems using science, engineering, and technology.
			</p>
			<div className={styles.flexContainer}>
				<div className={styles.bullet}></div>
				<div style={{ width: '100%' }}>
					<span className={styles.heading}>Basic Research</span>
					<p>
						The intent of basic research is to study more about a subject, to expand
						upon what we already know about it. This type of research usually doesn't
						result in solving a specific problem.
					</p>
					<div className={styles.flexContainer}>
						<img src={science} role="presentation" className={styles.leftImg} />
						<div style={{ width: '100%' }}>
							<p>
								EXAMPLE: NASA's International Space Station is using a platform to
								gather data on temperature, light cycle, humidity control, and more.
							</p>
							<a
								href="https://www.usaspending.gov/#/award/CONT_AWD_NNJ15GU47T_8000_NNJ15GU31B_8000"
								target="_blank"
								rel="noopener noreferrer">
								Contract Summary <LaunchOutlinedIcon fontSize="inherit" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.flexContainer}>
				<div className={styles.bullet}></div>
				<div style={{ width: '100%' }}>
					<span className={styles.heading}>Applied Research</span>
					<p>
						Applied research has a more specific goal of finding solutions to current
						problems using the accumulated knowledge from basic research.
					</p>
					<div className={styles.flexContainer}>
						<img src={bottle} role="presentation" className={styles.leftImg} />
						<div style={{ width: '100%' }}>
							<p>
								EXAMPLE: The Department of Health and Human Services is researching a
								drug that could counteract damage caused by radiation exposure.
							</p>
							<a
								href="https://www.usaspending.gov/#/award/CONT_AWD_HHSO100201700026C_7505_-NONE-_-NONE-"
								target="_blank"
								rel="noopener noreferrer">
								Contract Summary <LaunchOutlinedIcon fontSize="inherit" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.flexContainer}>
				<div className={styles.bullet}></div>
				<div style={{ width: '100%' }}>
					<span className={styles.heading}>Development</span>
					<p>
						Development refers to the innovative process of using applied research to
						create prototypes of potential solutions to real-world problems.
					</p>
					<div className={styles.flexContainer}>
						<img src={bulb} role="presentation" className={styles.leftImg} />
						<div style={{ width: '100%' }}>
							<p>
								EXAMPLE: The Department of Energy developed a long-term solution for
								storing spent nuclear fuel and studied its impact on licensing and
								operations of nuclear plants.
							</p>
							<a
								href="https://www.usaspending.gov/#/award/CONT_AWD_DENE0000593_8900_-NONE-_-NONE-"
								target="_blank"
								rel="noopener noreferrer">
								Contract Summary <LaunchOutlinedIcon fontSize="inherit" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	sectionComponents = {
		spending: Spending,
		categories: Categories,
		studies: Studies,
	};

	getSecBlurbs = (state) =>
		[
			<>
				<p key={'si1'}>
					Investment in Research and Development, or R&D, is largely seen as a driver
					of innovation in both the public and private sectors.
					<a href="#fn1" className="footnoteref">
						<FootnoteAnchor footnoteId={'fr1'}/>
						1
					</a>{' '}
					From medicine to autonomous vehicles, R&D investments lead to new products,
					technology advancements, and improved quality of life.  And in Fiscal Year
					2020, R&D has been foundational to addressing the COVID-19 pandemic, from
					vaccine development, production, and management. To fund R&D work, federal
					agencies can use grants, loans, and contracts. In this analysis we focus on
					contracts.
				</p>
				<p key={'si2'}>
					Each of the 24 Chief Financial Officers (CFO) Act agencies awarded contracts
					to perform R&D work in fiscal year 2020 (FY 2020), totaling $47.8 billion.
					Let’s take a look at the top ten CFO Act agencies by R&D contract funding
					and the top {state && state.screenMode > 1 ? 'seven' : 'five'} agencies by
					COVID-19 R&D contract funding.
				</p>
			</>,
			<p>
				Federal R&D contract funding supports a wide range of objectives, including
				agriculture, education, energy, housing, and national defense. When the
				government uses contracts to buy products and services, like leasing laboratory
				space or conducting field research, they use the General Services Administration’s
				Product and Services Codes (PSC).  Using PSCs, we grouped R&D contract funding
				into 20 funding categories.
			</p>,
			<>
				<p>
					The federal government is one of the largest and most consistent funding
					sources of R&D in the United States,
					<a href="#fn2" className="footnoteref">
						<FootnoteAnchor footnoteId={'fr2'}/>
						2
					</a>{' '}
					where total R&D obligations had only a net 1% change over the last decade.
					In total, the National Science Foundation reports that the federal
					government obligated $146B to R&D initiatives in its 2019 budget, which
					includes contracts as well as other key funding sources such as grants.
					<a href="#fn3" className="footnoteref">
						<FootnoteAnchor footnoteId={'fr3'}/>
						3
					</a>
				</p>
				<p>
					<span className={styles.bold}>Why does the government invest in R&D?</span>
					<br />A common rationale for federal R&D spending is that many socially
					beneficial research projects would not be attempted if society depended on
					the private sector alone for funding.
					<a href="#fn4" className="footnoteref">
						<FootnoteAnchor footnoteId={'fr4'}/>
						4
					</a>
				</p>
			</>,
		];

	getSections = (state) =>
		[
			{
				section: 'Funding',
				anchor: 'spending',
				number: '01',
				subtext: 'Funding',
				subblurb: '2020 Agency R&D Funding',
				sectionTeaser: (
					<>
						What{' '}
						<span className={styles.subtitleHighlight}>
							portion of federal agency contract funding in FY 2020
						</span>{' '}
						goes to R&D initiatives?
					</>
				),
				introBlurb: this.getSecBlurbs(state)[0],
				accordion: (
					<aside>
						<Accordion title="What is R&D?" color="#1302D9" backgroundColor="#E7E5FB">
							{this.whatIsContents()}
						</Accordion>
					</aside>
				),
				viztitle: 'R&D as a Portion of Total Federal Contract Funding by Agency',
				tagName: 'spending',
				readMoreOnMobile: true,
				readMoreStyle: { color: globalStyles.rdBlue },
			},
			{
				section: 'R&D Funding Categories',
				anchor: 'categories',
				number: '02',
				subtext: 'R&D Funding Categories',
				subblurb: 'R&D Funding Categories',
				sectionTeaser: (
					<>
						20{' '}
						<span className={styles.subtitleHighlight} key={'categories-teaser'}>
							categories of R&D
						</span>{' '}
						contract funding in FY 2020
					</>
				),
				introBlurb: this.getSecBlurbs()[1],
				viztitle: 'R&D Federal Funding in Contracting by Category',
				tagName: 'categories',
				readMoreOnMobile: true,
				readMoreStyle: { color: globalStyles.rdBlue },
			},
			{
				section: 'Studies',
				anchor: 'studies',
				number: '03',
				subtext: 'Studies',
				subblurb: 'The Big Picture for R&D',
				comingSoon: true,
				sectionTeaser: (
					<>
						<span className={styles.subtitleHighlight} key={'studies-teaser'}>
							Long-term trends
						</span>{' '}
						in federal R&D spending
					</>
				),
				introBlurb: this.getSecBlurbs()[2],
				viztitle: 'Federal R&D Obligations 2009-2019',
				tagName: 'studies',
				readMoreOnMobile: true,
				readMoreStyle: { color: globalStyles.rdBlue },
			},
		];

	prerelease = () => {
		if (!this.state.isQAT) {
			return (
				<Default>
					<HeadOnly />
					<div className={styles.comingSoon}>
						<h1>Research & Development in Contract Spending</h1>
						{this.state.screenMode === ScreenModeEnum.mobile ? (
							<Mobile />
						) : this.state.screenMode === ScreenModeEnum.tablet ? (
							<Tablet />
						) : (
							<Desktop />
						)}
					</div>
				</Default>
			);
		} else {
			return (
				<StoryLayout
					hwctaLink={this.props.location.pathname + '/methodologies'}
					title="Research & Development in Contract Funding"
					introSentence="How much did the federal government invest in Research & Development with FY 2020 Contract Funding?"
					sectionToc={this.getSections()}
					hwctaLink={this.props.location.pathname + '/methodologies'}>
					<SEO
						description="How much does the federal government invest in Research & Development? In FY 2020, $47.8 billion was contracted to R&D initiatives."
						title="Research & Development in Contract Funding | U.S. Treasury Data Lab"
					/>

					{this.getSections(this.state).map((item, key) => {
						const SectionTag = this.sectionComponents[item.tagName];
						if (!item.comingSoon) {
							return (
								<StorySection key={key} header={item}>
									<SectionTag
										sectionId={`section-${item.anchor}`}
										section={item}
										location={this.props.location}
									/>
								</StorySection>
							);
						}
					})}

					<Grid container className={styles.footnotes}>
						<Grid item xs={10}>
							<Footnotes
								footnotes={[
									<>
										<FootnoteAnchor footnoteId={"fn1"}/>
										Global R&D: One Measure of Commitment to Innovation, Global R&D: One
										Measure of Commitment to Innovation § (2018).
										<br />
										<a
											href="https://www.nsf.gov/statistics/2018/nsb20181/digest/sections/global-r-d-one-measure-of-commitment-to-innovation"
											rel="noreferrer noopener"
											target="_blank"
											className={styles.link}>
											https://www.nsf.gov/statistics/2018/nsb20181/digest/sections/global-r-d-one-measure-of-commitment-to-innovation
											<LaunchOutlinedIcon className={styles.extLink} />
										</a>
									</>
								]}
							/>
						</Grid>
					</Grid>
				</StoryLayout>
			);
		}
	};

	render = () => {
		return this.prerelease();
	};
}
