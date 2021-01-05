import React from "react";
import HWCTA from '../../components/hwcta/hwcta';
import styles from '../../components/hwcta/hwcta.module.scss';
import SEO from "../../components/seo";

function HAHWCTA(props) {
  const title = 'HOMELESSNESS ANALYSIS';

  const dataSources = [{
    name: <>Homeless Population by Region:</>,
    sources:
      <>
        <ul>
          <li>
            Federal grant award data from <a
            href='https://beta.usaspending.gov/#/search' target='_blank'
            rel='noopener noreferrer'>USAspending.gov</a>
          </li>
          <li>
            Point-in-Time (PIT) estimates of people experiencing homelessness from the Department of Housing and Urban
            Development's (HUD's) 2018 <a
            href='https://www.hudexchange.info/resource/3031/pit-and-hic-data-since-2007/' target='_blank'
            rel='noopener noreferrer'>Point-in-Time (PIT) Data</a>
          </li>
        </ul>
      </>
  },{
    name: <>Federal Programs that Address Homelessness:</>,
    sources:
      <>
        <ul>
          <li>
            Federal grant award data from <a
            href='https://beta.usaspending.gov/#/search' target='_blank'
            rel='noopener noreferrer'>USAspending.gov</a>
          </li>
          <li>
            Federal program descriptions from the <a
            href='https://www.cfda.gov/' target='_blank'
            rel='noopener noreferrer'>Catalogue of Federal Domestic Assistance</a> (CFDA)
          </li>
          <li>
            PIT estimates of people experiencing homelessness from HUD’s 2018 <a
            href='https://www.hudexchange.info/resource/3031/pit-and-hic-data-since-2007/' target='_blank'
            rel='noopener noreferrer'>PIT Data</a>
          </li>
        </ul>
      </>
  },{
    name: <>Comparing and Clustering Continuum of Care Areas:</>,
    sources:
      <>
        <ul>
          <li>
            Federal grant award data from <a
            href='https://beta.usaspending.gov/#/search' target='_blank'
            rel='noopener noreferrer'>USAspending.gov</a>
          </li>
          <li>
            PIT estimates of people experiences homelessness from HUD's 2018 <a
            href='https://www.hudexchange.info/resource/3031/pit-and-hic-data-since-2007/' target='_blank'
            rel='noopener noreferrer'>PIT Data</a>
          </li>
          <li>
            Area, population, median gross rent, and median income by quintile
            data from the Census Bureau
          </li>
          <li>
            Data on drug use, alcohol abuse, and mental health from the U.S.
            Department of Health and Human Services’ (HHS) <a
            href='https://www.samhsa.gov/data/report/2014-2016-nsduh-substate-region-estimates-%E2%80%93-excel-tables-and-csv-files' target='_blank'
            rel='noopener noreferrer'>National Survey on Drug Use and Health</a>
          </li>
        </ul>
      </>
  }]

  const methodologies = [
    {
      name: <>Selecting Programs</>,
      sources:
        <>
          <SEO
            title="Data Sources and Methodologies for Homelessness Financial Data | U.S. Treasury Data Lab"
            description="This analysis was conducting using federal grant award data from USAspending.gov and Point-in-Tine estimates provided by the Departments of Housing and Urban Development."
          />
          <p>
            To accurately determine the amount the federal government spends addressing homelessness, we reviewed federal
            program descriptions using the CFDA, looking for any mention of keywords related to homelessness.
          </p>
          <p>
            We developed a ranking system to assess whether individuals experiencing homelessness would directly benefit
            from these programs, and categorized these programs by the type of service they provide. To learn more about
            the development of our ranking and categorization systems visit our <a
            href='https://github.com/fedspendingtransparency/datalab' target='_blank'
            rel='noopener noreferrer'>Github page</a>.
          </p>
          <p>
            For example, the Homeless Veterans Reintegration Program provides services to homeless veterans looking for
            jobs, which we classified as employment related. We presented these programs
            to the U.S. Interagency Council on Homelessness, who recommended that we remove several programs where the
            majority of funds went to beneficiaries other than individuals experiencing homelessness.
          </p>
        </>
    },
    {
      name: <>Identifying grants data and linking to continuum of care area.</>,
      sources:
        <>
          <p>
            We used this dataset to identify all grant spending from USAspending.gov for the programs we determined to
            have a direct relation to homelessness. As part of our analysis, we identified three categories of grant
            awards in USAspending.gov data that are relevant to our work:
          </p>
          <ul>
            <li>Grant awards for a CoC area <i>(an administrative region recognized by HUD)</i>, or were awarded to
              organizations within its geographic area;</li>
            <li>Grant awards that didn't have specific location data; and</li>
            <li>Grant awards that supported organizations across a state.</li>
          </ul>
          <p>
            To create our visualization, we mapped funding amounts for the programs that fell within a Continuum of Care
            area using mapping files provided by HUD. The data used in this story was updated as of November 2019.
          </p>
        </>
    },
    {
      name: <>Linking additional data to Continuum of Care areas</>,
      sources:
        <>
          <div className={styles.bold}>Area and population:</div>
          <p>
            Most CoC areas are based on the geographic boundaries of one or more counties. Where that is true for
            counties, the data for counties in the CoC areas were added together to get the total for the CoC area. In
            instances where boundaries were determined by cities or cities and counties, the data for the city was
            subtracted from the surrounding county and the county/city data was allocated to the correct CoC area.
          </p>
          <div className={styles.bold}>Income and Rent:</div>
          <p>
            The lowest geographic area for income was county. For this reason both counties and cities were linked to
            the data for their county. Using the population data previously described, we used a weighted average based
            on median lowest quintile income of the geographic area that make up each CoC area, based on the population
            of each area.
          </p>
          <div className={styles.bold}>Mental Health, illicit drug use, and alcohol dependence or abuse:</div>
          <p>
            The data for these metrics are based upon geographic areas created by HHS. Like CoC areas, these areas are
            largely based upon counties. We linked these geographic areas to counties and created a weighted average
            for each CoC area based upon population.
          </p>
          <p>
            This data was linked to the HUD PIT Count and Housing Inventory Count, as well as the total funding data.
          </p>
        </>
    },
    {
      name: <>Creating clusters</>,
      sources:
        <>
          <p>
            To find the optimal number of clusters to target for this analysis we used a method that looks at the
            percentage of variance explained as a function of the number of clusters. The optimal value comes when the
            marginal gain for adding more clusters begins to level off. We chose five clusters as our target.
          </p>
          <p>
            We tested several unsupervised clustering algorithms, the method we employed was Fuzzy C Means, a data
            clustering technique which allows one piece of data to belong to two or more clusters.
          </p>
          <p>
            The clusters were then further segmented by population density, in an attempt to manage the size of the
            final clusters, but also to visualize areas with similar behavior and conditions for comparison.
          </p>
        </>
    }
  ]

  const notes = [{
    content :
      <>
        <p>
          <span className={styles.bold}>Area: </span>
          Measured in square miles of land area (not including water area); data from 2010 and CoC totals have been
          updated to reflect 2018 CoC area alignment.
        </p>
        <p>
          <span className={styles.bold}>Population: </span>
          Estimated 2018 data
        </p>
        <p>
          <span className={styles.bold}>Median Rent: </span>
         Estimated median gross rent per month
        </p>
        <p>
          <span className={styles.bold}>Income: </span>
          2017 annual income estimates by quintile; we used the lowest quintile
        </p>
        <p>
          <span className={styles.bold}>Drug Use: </span>
          Illicit drug use in the past month among individuals 12 or over, percentages; data from 2016
        </p>
        <p>
          Illicit Drugs include, marijuana/hashish, cocaine (including crack), heroin, hallucinogens, inhalants, or
          prescription-type psychotherapeutics used non-medically, including data from original methamphetamine
          questions, but not including new methamphetamine items added in 2005 and 2006.
        </p>
        <p>
          <span className={styles.bold}>Alcohol Dependence: </span>
          Alcohol dependence or abuse in the past year among individuals age 12 or older, percentages; data from 2016
        </p>
        <p>
          Alcohol dependence or abuse is based on definitions found in the fourth edition of the Diagnostic and
          Statistical Manual of Mental Disorders (DSM-IV).
        </p>
        <p>
          <span className={styles.bold}>Mental Illness: </span>
          Serious mental illness in the past year among adults aged 18 or older, percentages; data from 2016
        </p>
        <p>
          Serious mental illness (SMI) is defined as having a diagnosable mental, behavioral, or emotional disorder,
          other than a developmental or substance use disorder, as assessed by the Mental Health Surveillance Study
          (MHSS) Structured Clinical Interview for the Diagnostic and Statistical Manual of Mental Disorders-Fourth
          Edition-Research Version-Axis I Disorders (MHSS-SCID), which is based on the DSM-IV. SMI included individuals
          with diagnoses resulting in serious functional impairment. For details, see Section B in the "2011-2012
          National Survey on Drug Use and Health: Guide to State Tables and Summary of Small Area Estimation
          Methodology" at <a
          href='http://www.samhsa.gov/data/' target='_blank'
          rel='noopener noreferrer'>http://www.samhsa.gov/data/</a>.
        </p>

        <p>
          <span className={styles.bold}>Notes on the Maps: </span>
          Since the shape file used in the visualization was created, several Continuum of Care's have merged with the
          balance of state Continuum of Care. These Continuum of Care's are: WA-507, which is now a part of WA-501, and
          LA-508, which is now a part of LA-509. We edited the shape file so that the hover over and color for these
          Continuum of Care's reflect the new information, but the boundaries for the old Continuum of Care are still
          included in the map.
        </p>
      </>
  }];

  return (
    <HWCTA location={props.location} title={title} dataSources={dataSources} methodologies={methodologies} notes={notes}/>
  )
}

export default HAHWCTA;
