import React from 'react';
import SEO from 'src/components/seo';
import ToolLayout from 'src/components/layouts/tool/tool';
import AccordionList from 'src/components/accordion-list/accordion-list';
import loadable from '@loadable/component';
import ControlBar from '../../components/control-bar/control-bar.jsx';
import Reset from '../../components/reset/reset';
import Share from '../../components/share/share';

import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

const BudgetFunctionContainer = loadable(
	() => import('src/containers/budget-function/budget-function-container'),
	{
		fallback: (
			<div className="progress_wrapper">
				<CircularProgress className="progress" size={70} color="inherit" />
			</div>
		),
	}
);

function BudgetFunctionPage(props) {
	return (
		<>
			<SEO
				title="Budget Function - Federal Spending by Budget Category | U.S. Treasury Data Lab"
				description="Data Lab presents an analysis on federal spending related to the government’s main functions. This visualization sheds light on both budget functions and object classes."
			/>

			<ToolLayout
				title="BUDGET FUNCTION"
				introSentence="Understanding federal spending related to the government's main functions."
				contextStatement="The U.S. Treasury’s Data Lab presents an analysis on federal spending related to the government’s
        main functions. This visualization sheds light on both budget functions and object classes."
				sectionTitle="Categorization Systems"
				sectionText="<p>Budget Functions are used by Congress to categorize federal spending, and are also useful for the
        public to understand the different missions, or functions of the federal government. Though Budget Functions have
        evolved over time, the use of Budget Functions is nothing new: Congress has been tracking federal spending using a
        version of these categories for more than 200 years.</p>
        <p>The Object Classification system, which was created in the 1920s, explains what the government
        received in exchange for spending. For example, the Object Classification system captures spending on
        salaries for federal employees, rent payments for federal buildings, and spending on federal contracts.</p>"
				hwctaLink={props.location.pathname + '/methodologies'}>
				<AccordionList title="Instructions">
					<ul>
						<li>
							This Sankey diagram shows Budget Functions on the left and Object Classes
							on the right.
						</li>
						<li>
							Hover over a Budget Function category on the left to see how spending
							breaks down into Object Class categories.
						</li>
						<li>
							Hover over an Object Class on the right to see how spending breaks down
							into Budget Functions.
						</li>
						<li>
							Click and drag any Budget Function or Object Class color bar to
							vertically rearrange the ordering of that category.
						</li>
					</ul>
				</AccordionList>

				<ControlBar>
					<Reset id="resetBtn" />
					<Share location={props.location} />
				</ControlBar>
				<BudgetFunctionContainer />
			</ToolLayout>
		</>
	);
}

export default BudgetFunctionPage;
