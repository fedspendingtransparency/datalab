import React from 'react';
import HWCTA from '../../components/hwcta/hwcta';
import styles from '../../components/hwcta/hwcta.module.scss';

export default function CUHWCTA(props) {
  const title = 'FEDERAL INVESTMENT IN HIGHER EDUCATION';

  const methodologies = [{
    content: <>
      <p>
        This analysis was conducted in five phases, listed below. Each step is
        described in more detail below.
        </p>
      <ol className={styles.tocLinks}>
        <li>
          <a href="#cnuStepOne">Identifying institutions of higher education</a>
        </li>
        <li>
          <a href="#cnuStepTwo">Connecting those institutions to federal spending data</a>
        </li>
        <li>
          <a href="#cnuStepThree">Creating a data set that linked institutions to federal spending data</a>
        </li>
        <li>
          <a href="#cnuStepFour">Categorizing federal spending into three investment types</a>
        </li>
        <li>
          <a href="#cnuStepFive">Converting academic year data to align with
              the federal fiscal year, instead of the academic year, for consistency.</a>
        </li>
      </ol>
    </>
  },
  {
    name: <div>Step 1: Identifying Institutions</div>,
    sources:
      <>
        <p>First, we identified educational institutions across the United States
          by downloading data from the <a href='https://nces.ed.gov/ipeds/use-the-data' target='_blank'
            rel='noopener noreferrer'>National Center for Education Statistics’ Integrated Postsecondary Education Data System (IPEDS)</a>.
          We gathered meta-data from IPEDS on all 2-year, 4-year, public and
          private post-secondary institutions, including:
        </p>
        <ul>
          <li>Institution Type: 2yr/4yr, public/private</li>
          <li>Undergraduate Population</li>
          <li>Graduate Population</li>
          <li>State</li>
          <li>OPEID</li>
          <li>UnitID</li>
          <li>Latitude/Longitude</li>
        </ul>
      </>,
    anchor: 'cnuStepOne'
  },
  {
    name: <div>Step 2: Connecting Institutions to Spending</div>,
    sources:
      <>
        <p>Next, we connected the institutions to federal spending data using
            information available on <a href='https://www.usaspending.gov/' target='_blank'
            rel='noopener noreferrer'>USAspending.gov</a> and DUNS numbers. The
            USAspending data output consisted of:
          </p>
        <ul>
          <li>Institution</li>
          <li>Agency/Sub agency</li>
          <li>Procurement/Assistance Obligation</li>
          <li>Product Service Code (PSC)/ Catalog of Federal Domestic Assistance (CFDA)</li>
        </ul>
        <p>
          To begin, we derived a unique identifier between the IPEDS data in
          step 1 and the USAspending.gov data listed above. IPEDS lists several
          unique identifiers for each institution, and we normalized the name
          and state associated with each institution for consistency. To
          normalize the name, we connected any variation of an institution name
          to one common name. Data normalization is a process in which values
          measured on different scales are adjusted to a common scale to enable
          an accurate analysis and/or comparison of values.
          </p>
        <p>
          Next, we normalized the names of the institutions, grouping records
          by their DUNS number and the unique_recipient_id field. To easily
          identify a recipient name as an institution of higher education, the
          records were paired with the IPEDS version of the institution name.
          However, there were two types of instances when a judgement call was
          required:
          </p>
        <ol>
          <li>
            In situations where institutional systems are listed but a specific
            campus is not identified, the record was attributed to the main
            campus of that system. (For example, if listed as Regents of the
            University of California, it is attributed to University of
            California - Berkeley.)
            </li>
          <li>
            If it was not clear whether the recipient name corresponded to an
            institution of higher education but the Business Type field
            indicated the record belonged to a college or university, the
            DUNS number was used in a reverse look up to collect the address
            registered to that DUNS number. The address was then researched.
              <ul>
              <li className={styles.discList}>
                If the address was on a college campus, that campus was used.
                </li>
              <li className={styles.discList}>
                If the address related to a research facility or to a research
                hospital, the main campus was identified as the recipient.
                </li>
            </ul>
          </li>
        </ol>
      </>,
    anchor: 'cnuStepTwo'
  },
  {
    name: <div>Step 3: Identifying Institutions in the USAspending data</div>,
    sources:
      <>
        <p>
          The third step was to identify institutions in the USAspending data. We began by pulling 2017 USASpending
          contract and assistance data. Then, we filtered and isolated the unique recipient name and DUNS number
          combinations into a new data set. Lastly, we identified and standardized the institution names.
          </p>
        <p>
          Once we had the institution names, we filtered the 2017 USASpending data by the Business Type field by:
          higher_education, public_institution_of_higher_education, and private_institiution_of_higher_education.
          For records where it was easy to identify the recipient name as an institution of higher education, the
          names were added to the DUNS list. However, for records where it was not clear if the recipient names
          corresponded with an institution of higher education, we conducted a reverse look up of their DUNS number to
          obtain the address. Two common scenarios emerged:
          </p>
        <ol>
          <li>
            If the address belonged to a college campus, the campus name was normalized to the appropriate
            institution and the DUNS number was collected.
          </li>
          <li>
            If the address belonged to a research center, research hospital, college or university satellite office,
            or some other location, further research was conducted.
              <ul>
              <li className={styles.discList}>
                If the entity website listed the entity as being affiliated with a specific college or university the
                name was normalized to the appropriate institution and the DUNS number was collected.
              </li>
              <li className={styles.discList}>
                If there was no mention of affiliation, the record was not used in this analysis.
              </li>
            </ul>
          </li>
        </ol>
        <p>
          Next, we filtered 2017 USAspending data on the DUNS numbers that were identified in the previous three
          passes, and normalized the names of the selected records. The remaining records were analyzed again to
          ensure no minor or unusual entities were missed.
        </p>
        <ul>
          <li>
            If the record consisted of unusual entities, we did a reverse look up on the DUNS number and researched
            the associated address to determine if the entity is connected with a qualifying institution.
          </li>
        </ul>
        <p>
          To update this data to fiscal year 2018 the process outlined in the above paragraph was repeated and the
          new identifiers were added to the fiscal year 2017 data. We also pulled student aid data for the 2017-2018
          academic year, which included student loan programs, the Federal Pell Grant program, the Teacher Education
          Assistance for College and Higher Education program, and the Iraq Afghanistan Service Grant program. This
          data was converted to fiscal year. For annually reported federal student aid programs such as, Perkins
          loans, Federal Supplemental Educational Opportunity Grants, and Federal Work Study program data, the most
          recent data available is for the 2016-2017 academic year. This data was used as a proxy for 2018 data in
          our calculated totals.
         </p>
      </>,
    anchor: 'cnuStepThree'
  },
  {
    name: <div>Step 4: Sorting Investments by Category</div>,
    sources:
      <>
        <p>
          The fourth step was to sort the USAspending award data into one of three investment categories: contracts,
          grants, and research grants (a subset of grants that were awarded for research purposes).
          </p>
        <p>
          We created a chart with 2 rings that aggregates contracts and grants by category (inner ring) and program
          (outer ring).
          </p>
        <ul>
          <li> The detail table shows the top five awards and the recipient institution by category or program.</li>
          <li>The file available for download includes all data used to form the chart, including the awarding
              federal agency and sub agency.</li>
        </ul>
      </>,
    anchor: 'cnuStepFour'
  },
  {
    name: <div>Step 5: Converting Academic Year Data to Fiscal Year</div>,
    sources:
      <>
        <p>
          The last step was to convert the academic year information into the federal fiscal year. We began by
          retrieving federal student assistance data from the Department of Education, which was organized by quarter
          and re-organizing it according to the federal fiscal calendar.
          </p>
        <p>
          However, we did encounter a few areas where data could not converted, such as institution data for Federal
          Work Study, Perkins Loans, and Federal Supplemental Educational Opportunity Grant programs. In these
          instances, data is reported annually by calendar year.
          </p>
      </>,
    anchor: 'cnuStepFive'
  }
  ]

  const notes = [{
    content:
      <>
        <p>
          For more information on Federal Student Aid, visit: <a
            href='https://studentaid.gov/data-center/student/portfolio' target='_blank'
            rel='noopener noreferrer'>https://studentaid.gov/data-center/student/portfolio</a>.
        </p>
        <p>To join the conversation or share your ideas visit the <a
          href='https://usaspending-help.zendesk.com/hc/en-us/community/topics' target='_blank'
          rel='noopener noreferrer'>USAspending.gov’s Community Page</a>.</p>
      </>
  }];

  return (
    <HWCTA location={props.location} title={title} methodologies={methodologies} notes={notes} />
  )
}
