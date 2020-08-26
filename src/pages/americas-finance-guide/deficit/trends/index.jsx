import 'src/libs/ffg/src/globalSass/cg.scss';
import 'src/libs/ffg/src/globalSass/trendsCommon.scss';
import 'src/libs/ffg/src/deficit/trends/deficit-trends.scss';

import React from 'react';
import SEO from 'src/components/seo';
import AfgData from 'src/libs/_data/object_mapping.yml';
import Default from 'src/components/layouts/default/default';
import AccordionList from 'src/components/accordion-list/accordion-list';
import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Tabs from 'src/components/tabs/tabs';
import AfgNav from 'src/components/afg-nav/afg-nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { AFGHeader } from '../../../../components/headers/headers';

function DeficitTrendsPage(props) {
  const tabContainer = '#surplusComponent',
    config = {
      accessibilityAttributes: {
        title: '2019 Federal Deficit Trends over Time',
        desc: 'In 2000 and 2001 the federal government experienced surpluses of $237 billion and $127 billion respectively. Since 2001, the federal government has not had another surplus. While the annual deficit did not exceed $500 billion from 2002 to 2008, the annual deficit increased substantially in response to the Great Recession with annual deficits exceeding $1 trillion from 2009 to 2012. The annual deficit declined from 2012 to 2015, falling below the $500 billion mark in 2015. Since then, however, the annual deficit has grown each year to $984 billion in 2019.'
      },
      tabs: [
        {
          name: 'Surplus',
          selector: '.deficit--surplus__surplus'
        },
        {
          name: 'Balanced Budget',
          selector: '.deficit--surplus__balanced'
        },
        {
          name: 'Deficit',
          selector: '.deficit--surplus__deficit'
        }],
      selectedTabIdx : 0
    };

  return <>
		<Tabs
			tabContainer = {tabContainer}
			config = {config}
		/>

	   <SEO
	     title='Data Lab - Federal Deficit Trends – U.S. Treasury'
	     description='The federal government has run deficits for the last 18 years. A deficit occurs when the government spends more money than it collects.'
	     excerpt='The U.S. has experienced a deficit each year since 2001. Beginning in 2016, increases in spending on Social Security, health care, and interest on federal debt have outpaced the growth of federal revenue.'
	     keywords={[`Deficit, surplus, national deficit, debt, national debt, federal deficit, U.S. deficit, spending, revenue, money going out, money coming in, debtdeficit vs. debt, deficit trends, balanced budget`]}
	   />

	   <Default>
	     <AFGHeader />
	     <AfgNav location={props.location} chapter={'deficit'}></AfgNav>

	     <div className='cg-wrapper trends-common-wrapper deficit-trends-wrapper'>
	       <div className='ffg-wrapper'>
		 <ControlBar>
		   <Share
		     location={props.location}
		     title='Data Lab - Federal Deficit Trends – U.S. Treasury'
		   />
		 </ControlBar>

		 <h1>Federal Deficit Trends Over Time</h1>

		 <img className='deficit-trend' src='/americas-finance-guide/images/deficit-trend.svg' alt='In 2000 and 2001 the federal government experienced surpluses of $237 billion and $127 billion respectively. Since 2001, the federal government has not had another surplus. While the annual deficit did not exceed $500 billion from 2002 to 2008, the annual deficit increased substantially in response to the Great Recession with annual deficits exceeding $1 trillion from 2009 to 2012. The annual deficit declined from 2012 to 2015, falling below the $500 billion mark in 2015. Since then, however, the annual deficit has grown each year to $984 billion in 2019.'></img>

		 <aside className='deficit-aside'>
		   <p>Since {AfgData.last_surplus.value}, the U.S. has experienced a deficit each year. Beginning in 2016, increases in spending on Social Security, health care, and interest on federal debt have outpaced the growth of federal revenue.</p>

		   <section className='accordion'>
		     <AccordionList title='What does it mean when there is a surplus, balanced budget, and deficit?' className='accordion__heading'>
		       <div className='accordion__content'>
			 <div id='surplusComponent'>
			   <div className='deficit--surplus__component--content deficit--surplus__surplus'>
			     <img className='deficit__tabs-image' src='/americas-finance-guide/images/surplus.svg' alt='' role='presentation'></img>
			     A surplus occurs when the government collects more money than it spends. The last surplus for the federal government was in {AfgData.last_surplus.value}.
                           </div>
			   <div className='deficit--surplus__component--content deficit--surplus__balanced'>
			     <img className='deficit__tabs-image' src='/americas-finance-guide/images/balanceBudget.svg' alt='' role='presentation'></img>
			     A balanced budget occurs when the amount the government spends equals the amount the government collects. Sometimes the term balanced budget is used more broadly to refer to instances where there is no deficit.
                           </div>
			   <div className='deficit--surplus__component--content deficit--surplus__deficit'>
			     <img className='deficit__tabs-image' src='/americas-finance-guide/images/deficit.svg' alt='' role='presentation'></img>
			     A deficit occurs when the government spends more money than it collects. The federal government has run deficits for the last {AfgData.consecutive_deficits.value} years.
                           </div>
			 </div>
		       </div>
		     </AccordionList>
		   </section>

		   <section className='tour'>
		     <div className='tour__part-one'>
		       <h1>How does the deficit in the United States compare to other countries?</h1>
		       <p>When you are done here, see how the U.S. deficit compares to other countries.</p>
		     </div>
		     <a href='/americas-finance-guide/deficit/country-comparison/' className='tour__link'>Continue<FontAwesomeIcon icon={faAngleRight} width={7} className='fa fa-angle-right' /></a>
		   </section>
		 </aside>

		 <div className='clearfix'></div>

	       </div>
	     </div>

	     <section className='hwcta deficit-trends__hwcta'>
	       <AccordionList title='Data Sources and Methodology'>
		 <p>The visualization was created using the <a href={AfgData.mts_homepage.value} rel='noopener noreferrer' target='_blank'>Monthly Treasury Statement (MTS)</a> as the data source for federal government revenue and spending of the United States.</p>
		 <div className='afg__download--div'>
		   <div className='afg__download--heading'>Download Source Data</div>
		   <ul>
		     <li><a href='/americas-finance-guide/afgData/federal_deficit_trends.csv' download='federal_deficit_trends.csv'>federal_deficit_trends.csv</a></li>
		   </ul>
		 </div>
	       </AccordionList>
	     </section>
	   </Default>
	 </>
  ;
}

export default DeficitTrendsPage;
