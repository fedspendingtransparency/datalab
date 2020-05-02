import React, { Component } from "react";
import SEO from "../../components/seo";
import "../../styles/index.scss";

import AccordionList from "../../components/accordion-list/accordion-list";
import Reset from '../../components/reset/reset';
import Share from "../../components/share/share";
import ToolLayout from "../../components/layouts/tool/tool";
import ControlBar from "../../components/control-bar/control-bar";


import loadable from '@loadable/component';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
const DendroContainer = loadable(() => import("src/containers/fed-acct/fed-acct-container"),
  {
    fallback: <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>
  });

class FederalAccountExplorerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fiscalYearVal: 'fy19', // default fy19
    };
  }

  render() {
    return (
      <ToolLayout
        title='Federal Account Explorer'
        introSentence='Did you know that the government has almost 2,000 federal spending accounts?'
        contextStatement="Ever wonder who's getting federal contracts and what agencies are awarding them? This tool lets you explore contract-related information for FY 17, including which organizations received federal contracts, contract amounts, awarding agencies and sub-agencies, and the types of goods or services contract recipients provided to the federal government."
        sectionTitle='How do agencies receive and spend money?'
        sectionText="<p>Every fiscal year, Congress decides how much money to give the federal government through its budgeting and appropriations process. These funds, or appropriations, are then designated for specific purposes and placed in specific federal accounts for each agency to use.</p>
            <p>Federal agencies are responsible for spending these funds to carry out their programs and operations, which the Treasury Department assists with by managing the federal government's accounts. All federal agencies have their own financial accounting systems to track money flowing in and out of accounts, and the Treasury Department is responsible for maintaining current and accurate information about the balances of agency accounts. This applies to accounts designated for paying individuals receiving Social Security, providing Medicare reimbursements, or paying for grants for roads and bridges.</p>"
        hwctaLink={this.props.location.pathname + '/methodologies'}
      >

        <SEO
          title="U.S. Treasury Data Lab - Federal Account Explorer – U.S. Treasury"
          description="The U.S. Treasury’s Data Lab presents a tree-style visualization exploring nearly 2,000 federal government spending accounts and the amounts spent."
          keywords={[`contracts`, `federal contracts`, `contractors`, `federal agencies`, `agencies`, `spending`, `federal account`, `dendrogram`]}
        />

        <AccordionList title="Instructions">
          <ul>
            <li>On the first branch, click any agency to reveal how that agency is organized into sub-agencies.</li>
            <li>On the second branch, click any sub-agency to reveal that sub-agency's federal accounts.</li>
            <li>On the third branch, click any any federal account to go to its Federal Account Profile on USAspending.gov. There, you will find an account description, how much money flowed in and out of the account in a fiscal year, and more.</li>
            <li>Click and drag the visualization to re-center.</li>
            <li>Use the reset button at the top left corner to reset the visualization.</li>
          </ul>
        </AccordionList>

        <ControlBar>
          <Reset id='resetBtn' />
          <Share location={this.props.location} />
        </ControlBar>

        <DendroContainer />
      </ToolLayout>
    );
  }
}

export default FederalAccountExplorerPage;

