import React from 'react';
import Grid from '@material-ui/core/Grid';

// import apiImg from 'src/images/home/resources-api-2.svg';
// import userGuideImg from 'src/images/home/resources-user-guide-2.svg';
// import playbookImg from 'src/images/home/resources-playbook-2.svg';

import analystGuide from 'src/images/home/analyst_guide.webp';
import analystGuideFallback from 'src/images/home/analyst_guide.png';

import studentInnovators from 'src/images/home/student_innovators.webp';
import studentInnovatorsFallback from 'src/images/home/student_innovators.png';

import apiDocumentation from 'src/images/home/api_documentation.webp';
import apiDocumentationFallback from 'src/images/home/api_documentation.png';

import resourcesRowStyles from './resources-row.module.scss';
import ImageFallback from "../../../components/image-fallback/image-fallback";

const ResourcesRow = () => {
	const resourcesItems = [
		{
			href: '/analyst-guide/',
			imgSrc: analystGuide,
			imgSrcFallback: analystGuideFallback,
			altText: 'An icon of a book.',
			title: 'Analyst Guide',
			description:
				'Methods to easily navigate data from our sister site, USAspending.gov.',
			width: '56',
			height: '74',
		},
		{
			href: '/student-innovators-toolbox/',
			imgSrc: studentInnovators,
			imgSrcFallback: studentInnovatorsFallback,
			altText: 'An icon of a notebook.',
			title: "Student Innovator's Toolbox",
			description: 'Ways for professors and students to get involved.',
			width: '63',
			height: '74',
		},
		{
			imgSrc: apiDocumentation,
			imgSrcFallback: apiDocumentationFallback,
			altText: 'An icon of a computer monitor.',
			title: 'API Documentation',
			description:
				'Guidance on using the USASpending API and APIs from Fiscal Data API.',
			width: '81',
			height: '74',
		},
	];

	return (
		<section className={resourcesRowStyles.resources}>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					<h1 className={resourcesRowStyles.heading}>Resources</h1>
				</Grid>
				<Grid item sm={12} md={12} lg={3} className={resourcesRowStyles.tile}>
					<p className={resourcesRowStyles.title}>
						Do you want <strong> to conduct your own analysis?</strong>
					</p>
					<p className={resourcesRowStyles.descriptionConduct}>
						Access Treasury data and create your own charts and visualizations!
					</p>
				</Grid>

				{resourcesItems.map((resource, index) => (
					<Grid
						item
						xs={12}
						md={4}
						lg={3}
						key={index}
						className={resourcesRowStyles.tileRow}>
						{index === 2 ? (
							<div
								key={'landing-row__tile_' + index}
								className={resourcesRowStyles.tile}
								style={{ display: 'inline' }}>
								<div className={resourcesRowStyles.svgImgAPI}>
									<ImageFallback {...resource}/>
									{/*<img*/}
									{/*	data-src={resource.imgSrc}*/}
									{/*	alt={resource.altText}*/}
									{/*	className={`${resourcesRowStyles.svgImgAPI} lazyload`}*/}
									{/*	width={resource.width}*/}
									{/*	height={resource.height}*/}
									{/*/>*/}
								</div>
								<div className={resourcesRowStyles.titleContainer}>
									<h1 className={resourcesRowStyles.titleAPI}>{resource.title}</h1>
									<p className={resourcesRowStyles.description}>
										Guidance on using the{' '}
										<a
											href="https://api.usaspending.gov/"
											target="_blank"
											className={resourcesRowStyles.descriptionLink}>
											USAspending API
										</a>{' '}
										and APIs from{' '}
										<a
											href="https://fiscaldata.treasury.gov/api-documentation/"
											target="_blank"
											className={resourcesRowStyles.descriptionLink}>
											Fiscal Data API.
										</a>
									</p>
								</div>
							</div>
						) : (
							<a
								key={'landing-row__tile_' + index}
								className={resourcesRowStyles.tile}
								href={resource.href}>
								<div className={resourcesRowStyles.svgImg}>
									<ImageFallback {...resource}/>
									{/*<img*/}
									{/*	data-src={resource.imgSrc}*/}
									{/*	alt={resource.altText}*/}
									{/*	className={`${resourcesRowStyles.svgImg} lazyload`}*/}
									{/*	width={resource.width}*/}
									{/*	height={resource.height}*/}
									{/*/>*/}
								</div>
								<div className={resourcesRowStyles.titleContainer}>
									<h1 className={resourcesRowStyles.title}>{resource.title}</h1>
									<p className={resourcesRowStyles.description}>
										{resource.description}
									</p>
								</div>
							</a>
						)}
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default ResourcesRow;
