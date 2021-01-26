import React from 'react';
import StorySectionHeading from '../../../components/section-elements/story-section-heading/story-section-heading';
import storyHeadingStyles from '../../../components/section-elements/story-section-heading/story-section-heading.module.scss';
import defaultImage from '../../../images/default-image.jpg';
import Grid from '@material-ui/core/Grid';

export default class SectionThree extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<StorySectionHeading
					number={'03'}
					title={'Major Players'}
					teaser={[
						'What Organizations received ',
						<span key="teaser-callout" className={storyHeadingStyles.headingOrange}>
							the most funding?
						</span>,
					]}
					blurb={
						'More than 130 people die every day in the US due to an opioid related overdose. What is this epidemic that has\n' +
						'        led to over 400,000 deaths in the United States since 2000? The opioid epidemic, also referred to as the opioid\n' +
						'        crisis, is a term that refers to the rapid increase in the use of prescription and nonprescription opioid drugs.\n' +
						'        According to the National Institute on Drug Abuse, an opioid is a class of drugs that can include the illegal\n' +
						'        drug heroin, synthetic opioids such as fentanyl, and prescribed pain relievers such as oxycodone, hydrocodone,\n' +
						'        codeine, and morphine.'
					}
				/>

				<Grid container justify="center">
					<section id="section-three-viz">
						<img src={defaultImage} />
					</section>
				</Grid>
			</>
		); // end return
	}
}
