import React from 'react';
import Grid from '@material-ui/core/Grid';
import moreAnalysesStyles from './more-analyses.module.scss';

import federal from 'src/images/more-analyses/federal.jpg';
import workers from 'src/images/more-analyses/workers.jpg';
import budget from 'src/images/more-analyses/budget.jpg';
import competition from 'src/images/more-analyses/competition.jpg';
import cu from 'src/images/more-analyses/cu.png';
import homeless from 'src/images/more-analyses/homeless.png';
import dts from 'src/images/more-analyses/dts.png';
import explorer from 'src/images/more-analyses/explorer.png';
import covid from 'src/images/more-analyses/covid.png';
import afg from 'src/images/more-analyses/afg.png';
import rd from 'src/images/more-analyses/rd.png';

export default class MoreAnalyses extends React.Component {
	constructor(props) {
		super(props);
	}

	analyses = [
		{
			href: '/federal-account-explorer/',
			imageSrc: federal,
			altText:
				'A close view of a withered copy of the Statement of the Income and Expenditures of the United States.',
			title: 'Federal Account Explorer',
			subtitle: "Discover the federal government's spending accounts",
		},
		{
			href: '/federal-employees/',
			imageSrc: workers,
			altText:
				'National Park Service Director talking with Junior Ranger wearing a vest with 32 badges, in front of the El Pueblo De Los Angeles Historic Monument.',
			title: 'Federal Employees',
			subtitle: 'Who works in government?',
		},
		{
			href: '/budget-function/',
			imageSrc: budget,
			altText:
				'A close view of the back of a dollar bill focused on the Great Seal of the United States.',
			title: 'Budget Function',
			subtitle: 'Check out how federal spending is categorized',
		},
		{
			href: '/competition-in-contracting/',
			imageSrc: competition,
			altText:
				'Five individuals racing on an orange race track covering four lanes.',
			title: 'Competition in Contracting',
			subtitle: 'How often do federal agencies compete for contracts?',
		},
		{
			href: '/colleges-and-universities/',
			imageSrc: cu,
			altText:
				'A university building with three streets leading up to it, each has an icon representing financial aid, grants, and contracts respectively.',
			title: 'Colleges and Universities',
			subtitle: 'Federal investment in higher education',
		},
		{
			href: '/homelessness-analysis/',
			imageSrc: homeless,
			altText:
				'A homeless person leaning against a street pole and additional homeless people stand against a building in the far background.',
			title: 'Homelessness Analysis',
			subtitle: 'Explore federal programs that address homelessness',
		},
		{
			href: '/dts/',
			imageSrc: dts,
			altText:
				'Line graph of the Daily Treasury Statement with data from June 2005 through today.',
			title: 'Visualizing the Daily Treasury Statement',
			subtitle: 'How much does the federal government spend each day?',
		},
		{
			href: '/contract-explorer/',
			imageSrc: explorer,
			altText: 'A picture of a microscope with a sunburst image overlaid.',
			title: 'Contract Explorer',
			subtitle: 'Who receives federal contracts?',
		},
		{
			href: '/federal-covid-funding/',
			imageSrc: covid,
			altText:
				'Woman standing with medical face mask on, social distanced between two others, with a cartoon image of the U.S. Capitol in the background.',
			title: 'The Federal Response to COVID-19',
			subtitle:
				'How is the federal government funding relief efforts for COVID-19?',
		},
		{
			href: '/americas-finance-guide/',
			imageSrc: afg,
			altText:
				'Graphic containing money-related images like dollar bill, bag of money, gold bars, etc.',
			title: "America's Finance Guide",
			subtitle: 'How much does the government spend and collect?',
		},
		{
			href: '/rd-in-contracting/',
			imageSrc: rd,
			altText:
				'Abstract Brain with 4 categories: Aeronautics, Infectious Disease, Renewable Energy & Anti-Terrorism. This analysis shows federal R&D funding in 2020.',
			title: 'R&D in Contracting',
			subtitle: 'How much does the government invest in research & development?',
		},
	];

	show = {
		// key is current page URL frag, value is array of analyses (above) to show
		'federal-employees': [10, 8, 9, 0],
		'colleges-and-universities': [10, 8, 5, 9],
		dts: [10, 8, 9, 2],
		'federal-account-explorer': [10, 8, 9, 6],
		'contract-explorer': [10, 8, 9, 3],
		'homelessness-analysis': [10, 8, 9, 1],
		'budget-function': [10, 8, 9, 0],
		'competition-in-contracting': [10, 8, 9, 7],
		'rd-in-contracting': [8, 4, 9, 7],
		'federal-covid-funding': [10, 9, 5, 4],
		'americas-finance-guide': [10, 8, 6, 7],
	};

	showAnything = () => {
		if (typeof window !== 'undefined') {
			let pageName = window.location.pathname.replace(new RegExp(/\//, 'g'), '');
			if (pageName.indexOf('americas-finance-guide') > -1) {
				pageName = 'americas-finance-guide';
			}

			if ((this.showAnalyses = this.show[pageName])) {
				return true;
			}
		}
		return false;
	};

	render = () => (
		<section
			className={
				this.props.afg
					? `${moreAnalysesStyles.analyses} ${moreAnalysesStyles.afg}`
					: `${moreAnalysesStyles.analyses} ${moreAnalysesStyles.dl}`
			}>
			<div className={moreAnalysesStyles.heading}>More Analyses</div>
			<Grid container spacing={3} className={moreAnalysesStyles.tiles}>
				{this.showAnything() &&
					this.showAnalyses.map((analysesIndex, i) => (
						<Grid
							item
							xs={12}
							md={6}
							lg={3}
							key={'analyses_tile_' + i}
							className={`tile ${moreAnalysesStyles.tile}`}>
							<a href={`${this.analyses[analysesIndex].href}`}>
								<div className={moreAnalysesStyles.text}>
									<div className={moreAnalysesStyles.title}>
										{this.analyses[analysesIndex].title}
									</div>
									<p className={moreAnalysesStyles.subtitle}>
										{this.analyses[analysesIndex].subtitle}
									</p>
								</div>
								<img
									data-src={this.analyses[analysesIndex].imageSrc}
									alt={this.analyses[analysesIndex].altText}
									className={`${moreAnalysesStyles.image} lazyload`}
								/>
							</a>
						</Grid>
					))}
			</Grid>
		</section>
	);
}
