import React from 'react';
import moreAnalysesStyles from './more-analyses-tiles.module.scss';

import Grid from '@material-ui/core/Grid';

import homeless from 'src/images/more-analyses/homeless.png';
import budget from 'src/images/more-analyses/budget.jpg';
import competition from 'src/images/more-analyses/competition.jpg';
import cu from 'src/images/home/collegehomepage.svg';

const MoreAnalysesTiles = () => {
	const analyses = [
		{
			href: '/colleges-and-universities/',
			imageSrc: cu,
			alt:
				'A university building with three streets leading up to it, each has an icon representing financial aid, grants, and contracts respectively.',
			title: 'Federal Investment in Higher Education',
			subtitle: 'Explore the federal investment in your alma mater',
			width: '260',
			height: '177',
		},
		{
			href: '/homelessness-analysis/',
			imageSrc: homeless,
			title: 'Homelessness Analysis',
			subtitle: 'Explore federal programs that address homelessness',
			alt:
				'A homeless person leaning against a street pole and additional homeless people stand against a building in the far background.',
			width: '260',
			height: '177',
		},
		{
			href: '/budget-function/',
			imageSrc: budget,
			title: 'Budget Function',
			subtitle: 'Check out how federal spending is categorized',
			alt:
				'A close view of the back of a dollar bill focused on the Great Seal of the United States.',
			width: '260',
			height: '177',
		},
		{
			href: '/competition-in-contracting/',
			imageSrc: competition,
			title: 'Competition in Contracting',
			subtitle: 'How often do federal agencies compete for contracts?',
			alt: 'Five individuals racing on an orange race track covering four lanes.',
			width: '260',
			height: '177',
		},
	];

	return (
		<section className={moreAnalysesStyles.moreAnalyses}>
			<Grid container justify="space-around" spacing={4}>
				{analyses.map((item, index) => (
					<Grid item xs={12} sm={6} key={index} className={moreAnalysesStyles.tile}>
						<a href={item.href} key={'more-tile_' + index}>
							<div className={moreAnalysesStyles.tileHeading}>
								<p className={moreAnalysesStyles.title}>{item.title}</p>
								<p className={moreAnalysesStyles.subtitle}>{item.subtitle}</p>
							</div>

							<div className={moreAnalysesStyles.imageContainer}>
								<img
									data-src={item.imageSrc}
									className={`${moreAnalysesStyles.image} lazyload`}
									alt={item.alt}
									width={item.width}
									height={item.height}
								/>
							</div>
						</a>
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default MoreAnalysesTiles;
