import React, { Component } from "react";
import SEO from "../../components/seo";
import "../../styles/index.scss";
import './homelessness-analysis.scss';
import styleVars from 'src/styles/variables.scss';
import DataModule from "../../components/visualizations/federal-employees/util/data-module";

/* components */
import StoryLayout from "../../components/layouts/story/story";
import FinalThoughts from "../../page-sections/homelessness-analysis/final-thoughts";
import StorySection from "../../components/section-elements/story-section/story-section";

import loadable from '@loadable/component';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Footnotes from "../../components/footnotes/footnotes"
import { Grid } from "@material-ui/core"

const Geography = loadable(() => import('src/page-sections/homelessness-analysis/geography'),
  {
    fallback: <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>
  });

const FederalPrograms = loadable(() => import('src/page-sections/homelessness-analysis/federal-programs'),
  {
    fallback: <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>
  });

const ContinuumCare = loadable(() => import('../../page-sections/homelessness-analysis/continuum-care'),
  {
    fallback: <div className='progress_wrapper'>
      <CircularProgress className='progress' size={70} color='inherit' />
    </div>
  });

export default class HomelessnessPage extends Component {

  sectionComponents = {
    geography: Geography,
    federalPrograms: FederalPrograms,
    continuumCare: ContinuumCare,
    finalThoughts: FinalThoughts
  }

  render() {
    const sections =
      [
        {
          section: "Geography",
          anchor: "geography",
          number: "01",
          subtext: "Geography",
          subblurb: "How individuals experiencing homelessness are counted",
          sectionTeaser: ["How individuals experiencing homelessness ", <span key='teaser-callout' className='homeless-analysis-header-callout'>are counted</span>],
          introBlurb: <div><p>People experiencing homelessness are counted once a year (in late January) by grantees who
          receive funding from the U.S Department of Housing and Urban Development's (HUD) Continuum of Care program. This program is the largest federal
            program related to homelessness.<a id='fr1' href='#fn1' className='footnoteref'>1</a> It requires grantees to collect reliable data on the total
            number of people experiencing homelessness who reside in the grantee's geographic area.<a id='fr2' href='#fn2' className='footnoteref'>2</a></p>
            <p>State and local governments create the Continuum of Care regions. These regional divisions reflect how each community organizes
            itself and applies for funding from HUD's Continuum of Care program. HUD allows Continuum of
            Care grantees to use multiple approaches to complete their count, if necessary. Grantees may use a
              census approach, a sampling approach, or a combination of the methods.<a href='#fn3' id='fr3' className='footnoteref'>3</a></p></div>,
          tagName: "geography",
        },
        {
          section: "Federal Programs",
          anchor: "federal-programs",
          number: "02",
          subtext: "Federal Programs",
          subblurb: "Federal programs that address homelessness",
          sectionTeaser: ["Federal programs that ", <span key='teaser-callout' className='homeless-analysis-header-callout'>address homelessness</span>],
          introBlurb: <div>
            <p>The Department of Housing and Urban Development plays a lead role in federal efforts to
            address homelessness, although multiple federal agencies manage programs that provide
              services including education, employment, housing resources, and more.</p>
            <p>Our analysis identified 33 federal programs that explicitly flagged homeless individuals
            as beneficiaries. These included programs that named homeless individuals as primary
              targets of services or as one of the program's target recipient groups.<a id='fr4' href='#fn4'
                className='footnoteref'>4</a> We found that
            programs targeting homelessness focus either on all individuals experiencing homelessness,
            or on a subset, such as veterans or youth. These programs provide various types of assistance,
            which we divided into six categories: housing, food, education, employment, health, and support
              services.</p>
            <p>
              Federal funding is just one piece of the puzzle - states, municipalities, and other organizations play a large
              role in providing funds to address homelessness. While we did not conduct a comprehensive analysis of the relationship
              between federal, state, local, and private funding sources for programs that alleviate homelessness across the country,
              numerous examples show federal funding works as part of a larger network of support.
            </p>
            <p>
              For example, the city of New York spent $3.2 billion on homelessness programs in 2019,<a id='fr5' href='#fn5' className='footnoteref'>5</a> compared with about $134
              million from federal programs (including those where homeless individuals are one of several beneficiaries).
            </p>
            <p>
              The city of San Francisco expects to spend $305 million on similar programs in 2019,<a id='fr6' href='#fn6' className='footnoteref'>6</a> compared to the $43 million
              they received in federal funding.<a id='fr7' href='#fn7' className='footnoteref'>7</a>
            </p>
            <p>
              And, to cite an example of private funding, the Church of Latter Day Saints donated $42 million between 2007 and 2017 to build housing
              in Salt Lake City for people experiencing chronic homelessness.<a id='fr8' href='#fn8' className='footnoteref'>8</a>
            </p>
          </div>,
          tagName: "federalPrograms",
        },
        {
          section: "Continuum Care",
          anchor: "continuum-care",
          number: "03",
          subtext: "Continuum Care",
          subblurb: "Which Continuum of Care areas are similar to each other?",
          sectionTeaser: ["Which Continuum of Care areas are similar ", <span key='teaser-callout' className='homeless-analysis-header-callout'>to each other?</span>],
          introBlurb: <div>
            <p>While the previous section allows you to compare Continuum of Care areas that are neighbors geographically, we wanted to explore if Continuum of Care areas were similar along characteristics other than geography.
            It may be helpful for those working in the field to know what types of funding their neighbors receive and to know what regions are similar to their own, regardless of location. Using an unsupervised machine-learning
              algorithm, we clustered Continuum of Care areas based on a variety of attributes, such as population, income, and the prevalence of mental illness.</p>
          </div>,
          tagName: "continuumCare",
        },
        {
          section: "Final Thoughts",
          anchor: "final-thoughts",
          number: "04",
          subtext: "Final Thoughts",
          subblurb: "Why we conducted this analysis",
          sectionTeaser: ["Why we ", <span key='teaser-callout' className='homeless-analysis-header-callout'>conducted this analysis</span>],
          introBlurb: <div><p>
            As these visualizations depict, thousands of people are homeless across the United States.
            We hope that this analysis shows how federal funding impacts homelessness and can serve as a useful tool for state and local governments,
            as well as private institutions, who are working to reduce homelessness.
            In addition, we chose to conduct this analysis because it features data from across multiple federal agencies, in one dataset.
          </p><p>
              Analysts and users who have ideas for other types of analyses, whether featuring contracts or financial assistance across the federal government,
              can use the Data Lab's Analyst Guide for guidance and hints as they use the data.
          </p><p>
              Do you want to provide feedback or ask a question? Send feedback&nbsp;
              <a className='homelessness-link' href='https://usaspending-help.zendesk.com/hc/en-us/community/topics'>here!</a>
            </p></div>,
          tagName: "finalThoughts",
        },
      ];

    return (
      <div id='homelessnessPage'>
        <StoryLayout
          title={'Homelessness Analysis'}
          introSentence={'On a single night in 2018, more than 550,000 people experienced homelessness in the United States.'}
          contextStatement={['Multiple federal, state, and local programs offer support to people facing homelessness. Our visualizations display federal financial data to show the breakdown of funding spent to address this problem.']}
          sectionToc={sections}
          hwctaLink={this.props.location.pathname + '/methodologies'}
          pageColor={styleVars.homelessAnalysisPurple}
        >

          <SEO
            title="U.S. Treasury Data Lab - Homelessness Analysis"
            description="The U.S. Treasury’s Data Lab presents an analysis showing where people experience homelessness across America and the federal programs to assist them. On a single night in 2018 more than 550,000 people experienced homelessness in the United States."
            keywords={[`homelessness`, `federal spending`, `housing`, `federal programs`, `homeless`, `government programs`,
              `homeless housing`, `homeless shelter`, `homeless people`, `choropleth`, `bar chart`, `tree map`]}
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

          <Grid container justify="center">
            <Grid item xl={10}>
              <Footnotes footnotes={[<a href='https://www.usich.gov/resources/uploads/asset_library/2016_Budget_Fact_Sheet_on_Homelessness_Assistance.pdf' rel='noreferrer noopener' target='_blank'>United States Interagency Council on Homelessness.</a>,
              <>The Point-in-Time (PIT) count is a count of sheltered and unsheltered homeless persons on a single night in January. HUD requires that Continuums of Care conduct an annual count of homeless persons who are sheltered in emergency shelters, transitional housing, and Safe Havens on a single night. Continuums of Care also must conduct a count of unsheltered homeless persons every other year (odd numbered years). Each count is planned, coordinated, and carried out locally. - <a href='https://www.hudexchange.info/programs/hdx/guides/pit-hic/#general-pit-guides-and-tools' rel='noreferrer noopener' target='_blank'>Department of Housing and Urban Development.</a></>,
              <a href='https://www.hudexchange.info/programs/hdx/guides/pit-hic/#general-pit-guides-and-tools' rel='noreferrer noopener' target='_blank'>Department of Housing and Urban Development.</a>,
              <>As an example, we included a program managed by the Department of Health and Human Services called Grants for New and Expanded Services under the Health Center Program, which provides funding for expanded and sustained national investment in health centers, even though people experiencing homelessness were one type of beneficiary listed, along with migrant workers, public housing residents, and others. We did not include programs intended to address poverty, or that provide resources for low-income individuals, if homeless individuals were not specifically mentioned as a type of beneficiary.</>,
              <>West, Melanie. <a href='https://www.wsj.com/articles/new-york-citys-spending-on-homeless-hits-3-2-billion-this-year-11558562997' rel='noreferrer noopener' target='_blank'>"New York City’s Spending on Homelessness Hits $3.2 Billion this Year."</a> <i>The Wall Street Journal.</i></>,
              <>Markovich, Matt, <a href='https://komonews.com/news/local/san-francisco-and-seattle-a-tale-of-two-cities-mired-in-a-homeless-crisis' rel='noreferrer noopener' target='_blank'>"San Francisco and Seattle: A tale of two cities mired in a homeless crisis."</a> KOMO News</>,
              <>Federal, state, and local fiscal years do not always align to the same time frame; the purpose here is to make a broad comparison.</>,
              <>Walch, Tad. <a href="https://www.deseret.com/2017/4/6/20609792/over-a-decade-lds-church-has-given-42-million-to-homeless-relief-in-salt-lake" rel="noreferrer noopener" target="_blank">Over a decade, LDS Church has given $42 million to homeless relief in Salt Lake.</a> <i>Deseret News</i></>]}
              />
            </Grid>
          </Grid>
        </StoryLayout>
      </div>
    )
  }
}
