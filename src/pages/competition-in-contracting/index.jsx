import React, { Component } from "react";
import "src/styles/index.scss";

/* components */
import SEO from "src/components/seo";
import AccordionList from "src/components/accordion-list/accordion-list";
import ToolLayout from "src/components/layouts/tool/tool";
import loadable from "@loadable/component";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import ControlBar from "../../components/control-bar/control-bar";
import Reset from "../../components/reset/reset";
import Share from "../../components/share/share";

const CompetitionInContractingContainer = loadable(() => import('src/containers/competition-in-contracting/competition-in-contracting-container'),
  {
    fallback: <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>
  });

class CompetitionInContractingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'quantity',
      unit: 'dollars'
    }
  }

  render() {
    const pageTitle = 'Competition in Contracting';
    const introSentence = 'In FY 2017, over 60 percent of federal contracts were competitively awarded.';
    const contextSentence = 'How often do federal agencies compete for contracts? In FY 2017 more than 60% of federal contracts were competitively awarded.';
    const sectionTitle = 'Why does the government use competition when awarding contracts?';
    const sectionText = '<p>Competition is a healthy component of maintaining the integrity of the federal procurement process.  '
      + 'Competition generates better quality and lower costs for goods and services purchased in support of agency services to the American taxpayer.</p>'
      + '\t\t\t\t<p>The 1984 Competition in Contracting Act requires full and open competition while also allowing for exceptions in certain situations. '
      + 'In many cases, federal agencies will pursue competition even when an exception to the law applies, as competition may help to provide innovative '
      + 'solutions or better prices.</p>';
    const shareText = 'Data Lab – Competition in Contracting – U.S. Treasury ';
    const chartRef = React.createRef();

    function reset() {
      if (chartRef && chartRef.current) { chartRef.current.resetFn(); }
    }

    return (<>
      <ToolLayout title={pageTitle}
        introSentence={introSentence}
        contextStatement={contextSentence}
        sectionTitle={sectionTitle}
        sectionText={sectionText}
        hwctaLink={this.props.location.pathname + '/methodologies'}>
        <SEO title="U.S. Treasury Data Lab – Competition in Contracting"
             description="The U.S. Treasury’s Data Lab presents an analysis conducted on competition in government contracting. In FY 2017 more than 60% of federal contracts were competitively awarded."
             keywords={[`federal contracts`, `competition`, `awards`, `federal procurement`, `1984 Competition in Contracting Act`,
							 `federal agencies`, `government contracts`, `government procurement`, `government agencies`, `bar chart`]} />

        <AccordionList
          title="Instructions">
          <ul>
            <li>Click the toggle to switch between raw numbers and percent for each agency</li>
            <li>Click the toggle to switch between total dollars obligated and the number of contracting actions</li>
            <li>Click the check box beside each agency to remove or add it to the visualization and re-scale the
              horizontal axis.
              </li>
          </ul>
        </AccordionList>
        <ControlBar>
          <Reset _resetClick={reset} />
          <Share location={this.props.location}
                 title={shareText} />
        </ControlBar>
        <CompetitionInContractingContainer
          chartRef={chartRef}
        />

      </ToolLayout>
    </>
    )
  }
}

export default CompetitionInContractingPage;