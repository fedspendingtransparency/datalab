import React from 'react';
import moreAnalysesStyles from './more-analyses-tiles.module.scss';

import Grid from '@material-ui/core/Grid';

import homeless from 'src/images/more-analyses/homeless.png';
import federal from 'src/images/more-analyses/federal.jpg';
import budget from 'src/images/more-analyses/budget.jpg';
import competition from 'src/images/more-analyses/competition.jpg';

const MoreAnalysesTiles = () => {
	const analyses = [
		{
			href: '/federal-account-explorer/',
			imageSrc: federal,
			alt:
				'A close view of a withered copy of the Statement of the Income and Expenditures of the United States.',
			title: 'Federal Account Explorer',
			subtitle: "Discover the federal government's spending accounts",
		},
		{
			href: '/homelessness-analysis/',
			imageSrc: homeless,
			title: 'Homelessness Analysis',
			subtitle: 'Explore federal programs that address homelessness',
			alt:
				'A homeless person leaning against a street pole and additional homeless people stand against a building in the far background.',
		},
		{
			href: '/budget-function/',
			imageSrc: budget,
			title: 'Budget Function',
			subtitle: 'Check out how federal spending is categorized',
			alt:
				'A close view of the back of a dollar bill focused on the Great Seal of the United States.',
		},
		{
			href: '/competition-in-contracting/',
			imageSrc: competition,
			title: 'Competition in Contracting',
			subtitle: 'How often do federal agencies compete for contracts?',
			alt: 'Five individuals racing on an orange race track covering four lanes.',
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
