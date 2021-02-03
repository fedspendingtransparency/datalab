import React from 'react';
import StorySectionHeading from '../../../components/section-elements/story-section-heading/story-section-heading';
import storyHeadingStyles from '../../../components/section-elements/story-section-heading/story-section-heading.module.scss';
import storySectionHeadingStyles from '../../../components/section-elements/story-section-heading/story-section-heading.module.scss';
import defaultImage from '../../../images/default-image.jpg';
import Grid from '@material-ui/core/Grid';

export default class SectionFive extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const rawBlurb = (
			<>
				<p className={storySectionHeadingStyles.blurbText}>
					More than 130 people die every day in the US due to an opioid related
					overdose. What is this epidemic that has led to over 400,000 deaths in the
					United States since 2000? The opioid epidemic, also referred to as the
					opioid crisis, is a term that refers to the rapid increase in the use of
					prescription and nonprescription opioid drugs. According to the National
					Institute on Drug Abuse, an opioid is a class of drugs that can include the
					illegal drug heroin, synthetic opioids such as fentanyl, and prescribed
					pain relievers such as oxycodone, hydrocodone, codeine, and morphine.
				</p>
				<p className={storySectionHeadingStyles.blurbText}>
					This crisis has had an undeniable effect on the United States. In 2017, the
					Department of Health and Human Services declared the opioid crisis a public
					health emergency and created a strategy focusing on five major priorities.
					More than 130 people die every day in the US due to an opioid related
					overdose. What is this epidemic that has led to over 400,000 deaths in the
					United States since 2000? The opioid epidemic, also referred to as the
					opioid crisis, is a term that refers to the rapid increase in the use of
					prescription and nonprescription opioid drugs. According to the National
					Institute on Drug Abuse, an opioid is a class of drugs that can include the
					illegal drug heroin, synthetic opioids such as fentanyl, and prescribed
					pain relievers such as oxycodone, hydrocodone, codeine, and morphine.
				</p>
			</>
		);
		return (
			<>
				<StorySectionHeading
					number={'05'}
					title={'Mitigating and Solving the Crisis'}
					teaser={[
						'Where to find ',
						<span key="teaser-callout" className={storyHeadingStyles.headingOrange}>
							treatment?
						</span>,
					]}
					blurb={rawBlurb}
				/>

				<Grid container justify="center">
					<section id="section-five-viz">
						<img src={defaultImage} />
					</section>
				</Grid>
			</>
		); // end return
	}
}
