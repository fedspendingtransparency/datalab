import React, { Component } from 'react';

import AccordionList from 'src/components/accordion-list/accordion-list';
import SEO from 'src/components/seo';
import Share from 'src/components/share/share';
import ToolLayout from 'src/components/layouts/tool/tool';
import ControlBar from "src/components/control-bar/control-bar";

import loadable from '@loadable/component';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const SunburstDetailsContainer = loadable(() => import('src/containers/contract-explorer/contract-explorer-container'),
  {
    fallback: <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>
  });


export default class ContractExplorerPage extends Component {
	constructor(props) {
		super(props);
	}

  render = () => <>
		<SEO title='U.S. Treasury Data Lab – Contract Explorer'
				 description="The U.S. Treasury’s Data Lab presents an analysis showing how the federal government uses contracts to buy the things it needs, spending approximately $500 billion on contracts each year."
				 keywords={[`contracts`, `contractors`, `federal agencies`, `agencies`, `spending`, `government agency`, `government contract`,
					 `appropriations`, `federal procurement`, `government procurement`, `sunburst`]} />

		<ToolLayout title='Contract Federal Explorer'
			introSentence="The federal government spends about $500 billion each year on contracts - that's roughly the size of Sweden's economy."
			contextStatement="Ever wonder who's getting federal contracts and what agencies are awarding them? This tool lets you explore contract-related information for FY 18, including which organizations received federal contracts, contract amounts, awarding agencies and sub-agencies, and the types of goods or services contract recipients provided to the federal government."
			sectionTitle='How does the government buy things?'
			sectionText='<p>The federal government uses contracts to buy the things it needs, from office furniture to airplanes. It also uses contracts to buy services ranging from internet to research and development. Federal agencies and their sub-agencies are responsible for issuing contracts and categorizing the goods and services they purchase using Product and Service Codes (PSC).</p>
			<p>Although contracts and grants share some similarities, each serves a different purpose. Generally, contracts allow the government to purchase goods and services it will use to execute its mission, while grants allow the government to provide goods and services directly to the public. For example, the Air Force uses contracts to acquire fighter jets to execute its mission, while the Federal Highway Administration uses grants to provide funds to states for public roads.</p>'
			hwctaLink={this.props.location.pathname + '/methodologies'}
		>
			<AccordionList
				title='Instructions'>
				<p>
					This diagram has three rings. The inner ring represents federal agencies, like the Department of Defense, which are sized by the total dollar amounts they spent on contracts in FY 17. The middle ring represents sub-agencies, like the Air Force, which in most cases actually award contracts to contractors. The outer ring represents the contractors who receive awards from those sub-agencies.
				</p>
				<ul>
					<li>Hover over any part of the diagram to get a preview of the information featured in the next layer</li>
					<li>Click on an agency (inner ring), sub-agency (middle ring), or contractor (outer ring) to zoom in on that entity and get more detailed information about it</li>
					<li>Click the white center circle to reset the sunburst</li>
					<li>To find a specific agency or contractor by name, type the name into the search bar.</li>
				</ul>
			</AccordionList>
      <ControlBar>
        <Share location={this.props.location} />
      </ControlBar>

      <SunburstDetailsContainer />

		</ToolLayout>
	</>

}


