import React from 'react';
import Grid from '@material-ui/core/Grid';

import apiImg from 'src/images/home/resources-api-2.svg';
import userGuideImg from 'src/images/home/resources-user-guide-2.svg';
import playbookImg from 'src/images/home/resources-playbook-2.svg';

import moreResourcesStyles from './more-resources.module.scss';

const MoreResources = () => {
	const resources = [
		{
			href: 'https://api.usaspending.gov/',
			imageSrc: apiImg,
			altText: 'An icon of a computer monitor.',
			title: 'API Guide',
			description: 'Guidance on accessing Treasury data with open source code.',
		},
		{
			href: 'https://www.fiscal.treasury.gov/data-transparency/DAIMS-current.html',
			imageSrc: userGuideImg,
			altText: 'An icon of a book.',
			title: 'Data Model',
			description:
				'Methods to easily navigate data from our sister site, USAspending.gov.',
		},
		{
			href: '/student-innovators-toolbox/',
			imageSrc: playbookImg,
			altText: 'An icon of a notebook.',
			title: "Student Innovator's Toolbox",
			description: 'Ways for professors and students to get involved.',
		},
		{
			href: '/analyst-guide/',
			imageSrc: playbookImg,
			altText: 'An icon of a notebook.',
			title: 'Analyst Guide',
			description: 'Ways for professors and students to get involved.',
		},
	];

	return (
		<section className={moreResourcesStyles.resources}>
			<div className={moreResourcesStyles.heading}>More Resources</div>
			<Grid container spacing={3} className={moreResourcesStyles.tiles}>
				{resources.map((resource, i) => {
					if (
						typeof window !== 'undefined' &&
						window.location.pathname !== resource.href
					) {
						return (
							<Grid
								item
								xs={12}
								md={4}
								key={'resources_tile_' + i}
								className={`tile ${moreResourcesStyles.tile}`}>
								<a href={resource.href} target="_blank" rel="noopener noreferrer">
									<img
										data-src={resource.imageSrc}
										alt={resource.altText}
										className={`${moreResourcesStyles.svgImg} lazyload`}
									/>
									<div className={moreResourcesStyles.text}>
										<p className={moreResourcesStyles.title}>{resource.title}</p>
										<p className={moreResourcesStyles.subtitle}>{resource.description}</p>
									</div>
								</a>
							</Grid>
						);
					}
				})}
			</Grid>
		</section>
	);
};

export default MoreResources;
