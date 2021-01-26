import React from 'react';
import Grid from '@material-ui/core/Grid';
import storySectionStyles from './story-section.module.scss';
import StorySectionHeading from '../story-section-heading/story-section-heading';

function StorySection(props) {
	return (
		<Grid
			container
			justify="center"
			className={`${storySectionStyles.storySection} ${props.firstSection ? storySectionStyles.firstSection : ''}`}
		>
			<Grid item xs={12} xl={10}>
				<section id={`section-${props.header.anchor}`}>
					<div className="anchor-padding" />
					<StorySectionHeading
						header={props.header.header}
						number={props.header.number}
						title={props.header.subtext}
						teaser={props.header.sectionTeaser}
						blurb={props.header.introBlurb}
						accordion={props.header.accordion}
						sectionId={props.header.anchor}
						readMoreOnMobile={props.header.readMoreOnMobile}
						readMoreStyle={props.header.readMoreStyle}
					/>
					<Grid container justify="center">
						<Grid item xs={12}>
							<div className={storySectionStyles.alignLeft}>{props.children}</div>
						</Grid>
					</Grid>
				</section>
			</Grid>
		</Grid>
	);
}

export default StorySection;
