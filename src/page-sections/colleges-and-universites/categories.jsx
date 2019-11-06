// import '../../styles/index.scss'
import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Accordion from '../../components/accordion/accordion';
import Downloads from '../../components/section-elements/downloads/downloads';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import SearchPanel from '../../components/chartpanels/search';
import StoryHeading from '../../components/section-elements/story-heading/story-heading';
import SunburstIcon from '../../images/sunburst_icon.svg';
import VizControlPanel from '../../components/chartpanels/viz-control';
import VizDetails from '../../components/chartpanels/viz-detail';

import loadable from '@loadable/component';
const Sunburst = loadable(() => import('../../components/visualizations/sunburst/sunburst'));

const Categories = () => {
  const switchView = view => alert('switch to ' + view + ' mode');

  const [fundingType, setFundingType] = useState('contracts');

  function onTypeChange(e) {
    setFundingType(e.currentTarget.value);
  };

  const titlesByType = {
    contracts: {
      categoryLabel: 'Contract',
      dataType: 'PSC',
      centerText: 'Total FY2018 Contract Funding'
    },
    grants: {
      categoryLabel: 'Grant',
      dataType: 'CFDA',
      centerText: 'Total FY2018 Grant Funding'
    },
    research: {
      categoryLabel: 'Research Grant',
      dataType: 'CFDA',
      centerText: 'Total FY2018 Research Grants Funding'
    }
  }

  const levels = ['family', 'Program_Title'];
  const leaf = { name: 'Recipient', size: 'Obligation' };
  const wedgeColors = ['#881e3d', '#daa200', '#D25d15', '#082344', '#004c40'];
  const centerColor = 'rgba(0, 0, 0, 0)';

  const _data = useStaticQuery(graphql`
    query {
      contracts: allInvestmentSectionContractsV2Csv {
        nodes {
          Agency
          Obligation
          Program_Title
          Recipient
          Subagency
          family
        }
      }
      grants: allInvestmentSectionGrantsV2Csv {
        nodes {
          Agency
          Obligation
          Program_Title
          Recipient
          Research
          Subagency
          family
        }
      }
      research: allInvestmentSectionGrantsV2Csv(filter: {Research: {eq: "y"}}) {
        nodes {
          Agency
          Obligation
          Program_Title
          Recipient
          Research
          Subagency
          family
        }
      }
      top5Agencies: allTop5AgenciesPerInvestmentTypeV2Csv {
        nodes {
          source
          target
          value
        }
      }
      top5InvestmentTypes: allTop5InstitutionsPerInvestmentTypeV2Csv {
        nodes {
          source
          target
          value
        }
      }
      contractsSearch: allInvestmentSectionContractsV2Csv {
        group(field: Program_Title) {
          nodes {
            family
            Program_Title
          }
        }
      }
      grantsSearch: allInvestmentSectionGrantsV2Csv {
        group(field: Program_Title) {
          nodes {
            family
            Program_Title
          }
        }
      }
      researchSearch: allInvestmentSectionGrantsV2Csv(filter: {Research: {eq: "y"}}) {
        group(field: Program_Title) {
          nodes {
            family
            Program_Title
          }
        }
      }
    }
  `);

 const searchSort = (a, b) => {
    if (a.heading > b.heading) return 1;
    if (a.heading < b.heading) return -1;
    if (a.subheading > b.subheading) return 1;
    if (a.subheading < b.subheading) return -1;
    return 0;
  };

  // due to how GraphQL groups, we only want the first of each unique group
  const searchList = {
    contracts: _data.contractsSearch.group
      .map(n => ({
        id: n.nodes[0].id,
        heading: n.nodes[0].family,
        subheading: n.nodes[0].Program_Title
      }))
      .sort(searchSort),
    grants: _data.grantsSearch.group
      .map(n => ({
        id: n.nodes[0].id,
        heading: n.nodes[0].family,
        subheading: n.nodes[0].Program_Title
      }))
      .sort(searchSort),
    research: _data.researchSearch.group
      .map(n => ({
        id: n.nodes[0].id,
        heading: n.nodes[0].family,
        subheading: n.nodes[0].Program_Title
      }))
      .sort(searchSort)
  };

  const controlPanelRef = React.createRef();
  const searchItemSelected = id => {
    controlPanelRef.current.bubbleClick(searchList.filter(i => i.id === id));
  }

  const detailPanelRef = React.createRef();
  let currentDetails = {};
  const getClickedDetails = d => {
    if (!d) {
      detailPanelRef.current && detailPanelRef.current.closeDetails();
    } else {

      const agenciesTop5 = {};
      _data.top5Agencies.nodes
        .filter(i => i.source === d.name)
        .forEach(j => {
          agenciesTop5[j.target] = j.value;
        })
        ;

      const invTop5 = {};
      _data.top5InvestmentTypes.nodes
        .filter(i => i.source === d.name)
        .forEach(j => {
          invTop5[j.target] = j.value;
        })
        ;

      currentDetails = {
        'header': {
          'title': 'Category',
          'itemName': d.parent.name,
          'label': 'Sub-Category',
          'subItemName': d.name,
          'totalLabel': 'Total $ of Funding',
          'totalValue': d.value
        },
        'tables': [
          {
            'col1Title': 'Funding Agencies' + (Object.keys(agenciesTop5).length > 5 ? ' (Top 5)' : ''),
            'col2Title': 'Total Investment',
            'rows': agenciesTop5
          },
          {
            'col1Title': 'Institution' + (Object.keys(invTop5).length > 5 ? ' (Top 5)' : ''),
            'col2Title': 'Total Investment',
            'rows': invTop5
          }
        ]
      };
      detailPanelRef.current.updateDetails(currentDetails);
    }
  };

  return (
    <>
      <StoryHeading
        number={'03'}
        title={'Investment Categories'}
        teaser={'How was the money used?'}
        blurb={`Now that we know how much money was invested in higher education, are you curious to know how the money was used? This visualization allows you to discover the various categories the government uses to classify funding. Note: Product and Service Codes (PSCs) are used to categorize contract purchases of products and services and Federal Assistance Listings are used to categorize grant funding.`}
      />

      <Hidden lgUp>
        <SearchPanel
          searchList={searchList[fundingType]}
          listDescription='Categories'
          showCollapse
          onSelect={searchItemSelected}
        />
      </Hidden>

      <Accordion title='Accordion Title'>
        <ul>
          <li>Select an investment type: contracts, grants, or research grants</li>
          <li>Hover over each section to determine the category</li>
          <li>Click on a specific section to display the total awards for that category</li>
          <li>Click the center section to return to the original display</li>
        </ul>
      </Accordion>
      
      <Grid container>
        <Grid item>
          <Hidden mdDown>
            <VizControlPanel
              searchList={searchList[fundingType]}
              listDescription='Categories'
              onSelect={searchItemSelected}
              switchView={switchView}
            >
              <img src={SunburstIcon} />
            </VizControlPanel>
          </Hidden>
        </Grid>
        <Grid item>
          <form id='sunburstRadio'>
            <Grid container>
              <Grid item>
                <input type='radio'
                  id='cuContracts'
                  name='FundingType'
                  value='contracts'
                  onChange={onTypeChange}
                  checked={fundingType === 'contracts'}
                />
                <label htmlFor='cuContracts'>&nbsp;Contracts</label>
              </Grid>
              <Grid item>
                <input type='radio'
                  id='cuGrants'
                  name='FundingType'
                  value='grants'
                  onChange={onTypeChange}
                  checked={fundingType === 'grants'}
                />
                <label htmlFor='cuGrants'>&nbsp;Grants</label>
              </Grid>
              <Grid item>
                <input type='radio'
                  id='cuResearch'
                  name='FundingType'
                  value='research'
                  onChange={onTypeChange}
                  checked={fundingType === 'research'}
                />
                <label htmlFor='cuResearch'>&nbsp;Research Grants</label>
              </Grid>
            </Grid>
          </form>

          <Sunburst
            items={_data[fundingType].nodes}
            title={titlesByType[fundingType]}
            levels={levels}
            leaf={leaf}
            wedgeColors={wedgeColors}
            centerColor={centerColor}
            showDetails={getClickedDetails}
          />
        </Grid>
        <Grid item>
          <VizDetails
            showDetails={getClickedDetails}
            details={currentDetails}
            ref={detailPanelRef}
          />
        </Grid>
      </Grid >

      <Downloads
        href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
        date={'March 2019'}
      />
    </>
  )
}

export default Categories;
