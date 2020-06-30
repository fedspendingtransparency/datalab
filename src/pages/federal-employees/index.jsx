import React, { Component } from 'react';
import SEO from '../../components/seo';
import fedEmpStyles from './index.module.scss';

import DataModule from '../../components/visualizations/federal-employees/util/data-module';
import StoryLayout from '../../components/layouts/story/story';
import StorySection from '../../components/section-elements/story-section/story-section';
import loadable from "@loadable/component";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const Who = loadable(() => import('src/page-sections/federal-employees/who'),  {
  fallback: <div className='progress_wrapper'>
    <CircularProgress className='progress' size={70} color='inherit' />
  </div>
});

const Where = loadable(() => import('src/page-sections/federal-employees/where'),  {
  fallback: <div className='progress_wrapper'>
    <CircularProgress className='progress' size={70} color='inherit' />
  </div>
});

const What = loadable(() => import('src/page-sections/federal-employees/what'),  {
  fallback: <div className='progress_wrapper'>
    <CircularProgress className='progress' size={70} color='inherit' />
  </div>
});

export default class FederalEmployeesPage extends Component {

	sectionComponents = {
		who: Who,
		where: Where,
		what: What
	}

	render() {
		const sections =
			[
				{
					section: 'Who',
          anchor: 'Who',
          number: '01',
					subtext: 'Who',
					subblurb: 'How much do agencies spend on personnel?',
					sectionTeaser: ['How much do agencies spend ', <span key='teaser-callout' className={fedEmpStyles.headingBlue}>on personnel?</span>],
					introBlurb: 'In Fiscal Year 2017 (FY 2017), the largest 24 federal agencies - known as CFO Act Agencies* - obligated a total of $115 billion in personnel compensation. Government-wide spending on personnel compensation (base salaries) is distributed across these agencies, with the largest amount of personnel spending made by the Department of Defense, followed by the Department of Veterans Affairs.',
					tagName: 'who',
				},
				{
					section: 'Where',
          anchor: 'Where',
          number: '02',
					subtext: 'Where',
					subblurb: 'Where do federal employees work?',
					sectionTeaser: ['Where do ', <span key='teaser-callout' className={fedEmpStyles.headingBlue}>federal employees work?</span>],
					introBlurb: "CFO Act agencies employ 1.9 million people across the nation. The largest number of employees live and work in the District of Columbia, California, Virginia, Maryland, and Texas. Nearly a quarter of CFO Act agency employees (407,000 people) are located in 'the DMV area' -the District of Columbia, Maryland, or Virginia.",
					tagName: 'where',
				},
				{
					section: 'What',
          anchor: 'What',
          number: '03',
					subtext: 'What',
					subblurb: 'What do federal employees do?',
					sectionTeaser: ['What do ', <span key='teaser-callout' className={fedEmpStyles.headingBlue}>federal employees do?</span>],
				  introBlurb: ['Federal employees serve in highly varied occupations. The following interactive visualization lists the main occupational categories, each of which includes several job types that are grouped by function - for example, administrative, medical, legal, or engineering. The occupation data also makes a distinction between blue-collar jobs (for example, warehousing) and white-collar jobs (for example, information technology). Across all CFO Act agencies, the top two occupation categories are Administrative and Clerical and Medical, Hospital, Dental, and Public Health.', <br/>, <br/>,
						'To explore the distribution of workers across occupation categories for each agency, select an agency from the menu.'],
					tagName: 'what',
				},
			];

		return (
			<StoryLayout
				title={'Federal Employees'}
				introSentence={'In 2017, the largest 24 federal agencies employed nearly 2 million people.'}
				contextStatement={["The U.S. Treasury’s Data Lab presents an analysis exploring federal employees using federal financial data and employment data from the Office of Personnel Management (OPM). In 2017, the 24 CFO Act Agencies employed nearly 2 million people."]}
				sectionToc={sections}
				hwctaLink={this.props.location.pathname + '/methodologies'}
			>
				<SEO
					title='U.S. Treasury Data lab – Federal Employee Analysis'
					description="In 2017, the 24 CFO Act Agencies employed nearly 24 people. This analysis explores federal employees using federal financial data and employment data from OPM."
					keywords={[`Federal Employees`, `federal spending`, `Federal finances`, `work`, `personnel`, `CFO Act Agencie`, `states`, `occupation categories`, `government finances`, `government employees`, `tree map`, `bar chart`, `choropleth`]}
				/>
				{sections.map((item, key) => {
						const SectionTag = this.sectionComponents[item.tagName];
						return (
							<StorySection key={key} header={item}>
								<SectionTag sectionId={`section-${item.section}`} dataSource={DataModule} location={this.props.location} />
							</StorySection>
						)
					})
				}
			</StoryLayout>
		)
	}
}
