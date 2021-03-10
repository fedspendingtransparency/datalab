import React from 'react';
import styles from './rd-in-contracting.module.scss';
import globalStyles from 'src/styles/variables.scss';

import Categories from 'src/page-sections/rd-in-contracting/categories/categories.jsx';
import Footnotes from '../../components/footnotes/footnotes';
import SEO from 'src/components/seo';
import Funding from 'src/page-sections/rd-in-contracting/spending/spending-chart';
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

import { ScreenModeEnum, checkScreenMode } from 'src/utils/screen-mode.js';
import FootnoteAnchor from '../../components/footnotes/footnote-anchor';

export default class RdInContractingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screenMode: ScreenModeEnum.mobile,
		};
	}

	componentDidMount() {
		this.resizeWindow();
		window.addEventListener('resize', this.resizeWindow);
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
				problems using science, engineering, and technology. There are three main
				categories that R&D contracts are classified under: Basic, Applied, and
				Experimental Development.
			</p>
			<div className={styles.flexContainer}>
				<div className={styles.bullet}></div>
				<div style={{ width: '100%' }}>
					<span className={styles.heading}>Basic Research</span>
					<a href="#fn2" className="footnoteref">
						<FootnoteAnchor footnoteId={'fr2'} />2
					</a>{' '}
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
					<a href="#fn3" className="footnoteref">
						<FootnoteAnchor footnoteId={'fr3'} />3
					</a>{' '}
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
					<span className={styles.heading}>Experimental Development</span>
					<a href="#fn4" className="footnoteref">
						<FootnoteAnchor footnoteId={'fr4'} />4
					</a>{' '}
					<p>
						Experimental development refers to the innovative process of using prior
						research and practical experience to produce new or improved products or
						processes as potential solutions to real-world problems.
					</p>
					<div className={styles.flexContainer}>
						<img src={bulb} role="presentation" className={styles.leftImg} />
						<div style={{ width: '100%' }}>
							<p>
								EXAMPLE: The Department of Energy developed a long-term solution for
								storing spent nuclear fuel and has studied its impact on licensing and
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
		funding: Funding,
		categories: Categories,
		studies: Studies,
	};

	getSecBlurbs = () => [
		<>
			<p key={'si1'}>
				Investment in Research and Development, or R&D, is largely seen as a driver
				of innovation in both the public and private sectors.
				<a href="#fn1" className="footnoteref">
					<FootnoteAnchor footnoteId={'fr1'} />1
				</a>{' '}
				From medicine to autonomous vehicles, R&D investments lead to new products,
				technology advancements, and improved quality of life. And in Fiscal Year
				(FY) 2020, R&D has been foundational to addressing the COVID-19 pandemic,
				from vaccine development, production, and logistics management. To fund R&D
				work, federal agencies can use grants, loans, and contracts. In this
				analysis we focus on contracts.
			</p>
			<p key={'si2'}>
				Each of the 24 Chief Financial Officers (CFO) Act agencies awarded contracts
				to perform R&D work in FY 2020, totaling $47.8 billion. Let’s take a look at
				the top ten CFO Act agencies by R&D contract funding and the top{' '}
				{this.state && this.state.screenMode > 1 ? 'seven' : 'five'} agencies by
				COVID-19 R&D contract funding. COVID-19 R&D contract funding refers
				specifically to contracts funded by the four supplemental appropriations
				passed by congress to address the COVID-19 pandemic. For more information,
				including legislation and funding details, visit our{' '}
				<a
					href="https://datalab.usaspending.gov/federal-covid-funding/"
					rel="noreferrer noopener"
					target="_blank"
					className={styles.link}>
					Federal Response to COVID-19
				</a>
				analysis.
			</p>
		</>,
		<p>
			Federal R&D contract funding supports a wide range of objectives, including
			agriculture, education, energy, housing, and national defense. When the
			government uses contracts to buy products and services, like leasing
			laboratory space or conducting field research, they use the{' '}
			<a
				href="https://www.acquisition.gov/psc-manual"
				rel="noreferrer noopener"
				target="_blank">
				General Services Administration’s Product and Services Codes (PSC)
			</a>
			. Using PSCs, we grouped R&D contract funding into 20 funding categories.
		</p>,
		<p>
			The federal government awards a variety of entities, educational
			institutions, private companies, when it comes to R&D contracts. Below, we
			highlight the top 5 R&D contract awardees by each of the 20 categories
			explored in Section 2. We also break out the top 5 COVID-19 R&D contract
			awardees by the categories under which COVID-19.
		</p>,
		<>
			<p>
				The federal government is one of the largest and most consistent funding
				sources of R&D in the United States,
				<a href="#fn2" className="footnoteref">
					<FootnoteAnchor footnoteId={'fr2'} />2
				</a>{' '}
				where total R&D obligations had only a net 1% change over the last decade.
				In total, the National Science Foundation reports that the federal
				government obligated $146B to R&D initiatives in its 2019 budget, which
				includes contracts as well as other key funding sources such as grants.
				<a href="#fn3" className="footnoteref">
					<FootnoteAnchor footnoteId={'fr3'} />3
				</a>
			</p>
			<p>
				<span className={styles.bold}>Why does the government invest in R&D?</span>
				<br />A common rationale for federal R&D spending is that many socially
				beneficial research projects would not be attempted if society depended on
				the private sector alone for funding.
				<a href="#fn4" className="footnoteref">
					<FootnoteAnchor footnoteId={'fr4'} />4
				</a>
			</p>
		</>,
	];

	getSections = () => [
		{
			section: 'Agency Funding',
			anchor: 'funding',
			number: '01',
			subblurb:
				'What portion of federal agency contract funding in FY 2020 went to R&D initiatives?',
			sectionTeaser: (
				<>
					What{' '}
					<span className={styles.subtitleHighlight}>
						portion of federal agency contract funding in FY 2020
					</span>{' '}
					went to R&D initiatives?
				</>
			),
			introBlurb: this.getSecBlurbs()[0],
			accordion: (
				<aside>
					<Accordion
						title="What is R&D?"
						color={globalStyles.rdMdBlue}
						backgroundColor={globalStyles.rdAccordionBackground}>
						{this.whatIsContents()}
					</Accordion>
				</aside>
			),
			viztitle: 'R&D as a Portion of Total Federal Contract Funding by Agency',
			tagName: 'funding',
			readMoreOnMobile: true,
			readMoreStyle: { color: globalStyles.rdMdBlue },
		},
		{
			section: 'Funding Categories',
			anchor: 'categories',
			number: '02',
			subblurb: '20 CATEGORIES OF R&D FUNDING IN FY 2020',
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
			readMoreStyle: { color: globalStyles.rdMdBlue },
		},
		{
			section: 'Top Contracts',
			anchor: 'contracts',
			number: '03',
			subblurb: 'TOP R&D CONTRACTS BY CATEGORY IN FY 2020',
			comingSoon: true,
			sectionTeaser: (
				<>
					<span className={styles.subtitleHighlight} key={'studies-teaser'}>
						Top R&D Contracts
					</span>{' '}
					by Category in FY 2020
				</>
			),
			introBlurb: this.getSecBlurbs()[2],
			viztitle: '',
			tagName: 'contracts',
			readMoreOnMobile: true,
			readMoreStyle: { color: globalStyles.rdMdBlue },
		},
		// {
		// 	section: 'Studies',
		// 	anchor: 'studies',
		// 	number: '04',
		// 	subtext: 'Studies',
		// 	subblurb: 'The Big Picture for R&D',
		// 	comingSoon: true,
		// 	sectionTeaser: (
		// 		<>
		// 			<span className={styles.subtitleHighlight} key={'studies-teaser'}>
		// 				Long-term trends
		// 			</span>{' '}
		// 			in federal R&D spending
		// 		</>
		// 	),
		// 	introBlurb: this.getSecBlurbs()[3],
		// 	viztitle: 'Federal R&D Obligations 2010-2020',
		// 	tagName: 'studies',
		// 	readMoreOnMobile: true,
		// 	readMoreStyle: { color: globalStyles.rdBlue },
		// },
	];

	render = () => {
		return (
			<StoryLayout
				hwctaLink={this.props.location.pathname + '/methodologies'}
				title="Research & Development in Contract Funding"
				introSentence="How much did the federal government invest in Research & Development with FY 2020 Contract Funding?"
				sectionToc={this.getSections()}
				hwctaLink={this.props.location.pathname + '/methodologies'}
				scrollingToc>
				<SEO
					description="How much does the federal government invest in Research & Development? In FY 2020, $47.8 billion was contracted to R&D initiatives."
					title="Research & Development in Contract Funding | U.S. Treasury Data Lab"
				/>

				{this.getSections().map((item, key) => {
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
					<Grid item xl={10}>
						<Footnotes
							footnotes={[
								<>
									<FootnoteAnchor footnoteId={'fn1'} />
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
								</>,
								<>
									<FootnoteAnchor footnoteId={'fn2'} />
									According to the Office of Management and Budget (OMB) Circular A-11
									(Preparation, Submission and Execution of the Budget), Section 84.2(c),
									the official definition of Basic Research is: Experimental or
									theoretical work undertaken primarily to acquire new knowledge of the
									underlying foundations of phenomena and observable facts. Basic
									research may include activities with broad or general applications in
									mind, such as the study of how plant genomes change, but should exclude
									research directed towards a specific application or requirement, such
									as the optimization of the genome of a specific crop species.
								</>,
								<>
									<FootnoteAnchor footnoteId={'fn3'} />
									According to OMB Circular A-11, Section 84.2(c), the official
									definition of Applied Research is: Original investigation undertaken in
									order to acquire new knowledge. Applied research is, however, directed
									primarily towards a specific practical aim or objective.
								</>,
								<>
									<FootnoteAnchor footnoteId={'fn4'} />
									According to the OMB Circular A-11, Section 84.2(c), the official
									definition of Experimental Development is: Creative and systematic
									work, drawing on knowledge gained from research and practical
									experience, which is directed at producing new products or processes or
									improving existing products or processes. Like research, experimental
									development will result in gaining additional knowledge.
								</>,
							]}
						/>
					</Grid>
				</Grid>
			</StoryLayout>
		);
	};
}
