import React from 'react';

export default {
  title: 'GENERAL QUESTIONS',
  introSentence: <></>,
  data: [
    {
      accordionTitles: [
        <>What is the difference between a contract and a grant?</>,
        <>Also, what is the difference between the data structure?</>,
      ],
      accordionContent: [
        <p>
          The federal government uses contracts to buy the things it needs,
          from office furniture to airplanes. It also uses contracts to buy
          services ranging from telecommunications to research and development.
          Federal Agencies and their sub-agencies are responsible for issuing
          contracts and categorizing the goods and services they purchase
          using Product and Service Codes (PSC).
        </p>,
        <p>
          Although contracts and grants share some similarities, each serves a
          different purpose. Generally, contracts allow the government to
          purchase goods and services directly to benefit the public.
        </p>,
        <p>
          Grants are a form of financial assistance, where a federal agency
          transfers a thing of value (either money or in kind) to the recipient
          in order to carry out activities or projects that benefit the public.
        </p>,
        <p>
          For example, the Air Force uses contracts to acquire fighter jets
          to execute its mission, while the Federal Highway Administration
          uses grants to provide funds to states for public roads.
        </p>,
        <p>
          Because of these differences, contract and financial assistance
          data have different structures, fields, and categorization systems.
          For example, financial assistance awards are categorized by the Catalogue
          of Federal Domestic Assistance (CFDA) tags, where contracts are categorized
          with Product and Service Codes. Furthermore, contract and financial assistance
          data are provided to USAspending.gov from two distinct feeder systems.
          Contract data is entered into a system called the Federal Procurement Data
          System (FPDS), which is managed by GSA, while financial assistance data is
          entered directly into a Treasury-managed system called the Broker.
        </p>,
      ],
    },
    {
      accordionTitles: [<>What’s the difference between an obligation and an outlay?</>],
      accordionContent: [
        <p>
          An obligation is a promise made by the government to spend funds immediately or at
          a later date as a result of a series of actions. An outlay takes place when those
          funds are actually spent, or paid out. For example, when the government enters into
          a contract or grant, typically, the entire value of the contract or grant is obligated.
          This is done because the government expects to make payments totaling that amount, so
          long as the agreed-to actions take place. When the government actually makes payments
          to a contractor or grantee, then the obligation to pay becomes an outlay.
        </p>,
      ],
    },
    {
      accordionTitles: [<>What are negative obligations?</>],
      accordionContent: [
        <p>
          Negative obligations, or de-obligations, occur when agencies decrease previous
          obligations to correct errors or to reflect new information (for example, that
          the price of a project was lower than expected).
        </p>,
        <p>
          De-obligations are common in instances where the scope of a project changes.
          For example, if the government awards a contract for $1 million, but later
          decides that it only requires work totaling $400,000, it would de-obligate
          $600,000, which would show up as negative $600,000 in USAspending data.
        </p>,
      ],
    },
    {
      accordionTitles: [<>How do I find the meanings of particular terms and field names?</>],
      accordionContent: [
        <p>
          There are a number of sources you can use to find definitions of terms and field names.
          Our Glossary (linked in the top navigation of USAspending.gov) lists plain-language
          definitions of terms used throughout the site. To learn more about contract data,
          you can reference the
          {' '}
          <a
            href="https://www.fpds.gov/downloads/Version_1.5_specs/FPDSNG_DataDictionary_V1.5.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            FPDS data dictionary (PDF)
          </a>
          , which details the structures of different fields. You can find more information about
          financial assistance award data in
          {' '}
          <a
            href="https://www.usaspending.gov/#/download_center/data_dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            the Data Dictionary.
          </a>
        </p>,
      ],
    },
    {
      accordionTitles: [<>Are outlays included in awards data?</>],
      accordionContent: [
        <p>
          Outlays are not included in awards data provided to USAspending by FPDS (see “What
          is the difference between a contract and a grant” above). However, Treasury has given
          federal agencies the opportunity to report outlays related to contracts and financial
          assistance on an optional basis. This data is not currently available for download,
          but we are working to make it available in the coming months.
        </p>,
      ],
    },
    {
      accordionTitles: [
        <>
          Is there a data dictionary, glossary of terms, or other meta
          information on the fields available for download?
        </>,
        <>How can I get agency data?</>,
      ],
      accordionContent: [
        <p>
          USAspending offers resources to help you get the most out of using the site. The
          {' '}
          <a
            href="https://www.usaspending.gov/#/download_center/data_dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data Dictionary
          </a>
          {' '}
          contains definitions of the hundreds of different
          data elements used in the DATA Act schema.
        </p>,
        <p>
          Metadata for USAspending.gov is available on
          {' '}
          <a
            href="http://fedspendingtransparency.github.io/data-model/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>,
        <p>
          Finally, USAspending’s
          {' '}
          <a
            href="https://usaspending-help.zendesk.com/hc/en-us/sections/115000739433-Frequently-Ask-Questions-"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ page
          </a>
          {' '}
          provides additional advice for getting the most out of the site.
        </p>,
      ],
    },
    {
      accordionTitles: [<>I’d like to use the API — where can I learn more about it?</>],
      accordionContent: [
        <p>
          The
          {' '}
          <a
            href="https://api.usaspending.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            API page
          </a>
          {' '}
          on USAspending.gov offers general API guidance, tutorials, request recipes, and more;
          it also
          {' '}
          <a
            href="https://github.com/fedspendingtransparency/usaspending-api/wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            links to the most current API documentation.
          </a>
        </p>,
      ],
    },
    {
      accordionTitles: [<>How can I access the database?</>],
      accordionContent: [
        <p>
          To access the database, click on
          {' '}
          <a
            href="https://aws.amazon.com/public-datasets/usaspending/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Database Snapshots
          </a>
          {' '}
          in the Download Center drop-down (top nav).
        </p>,
      ],
    },
    {
      accordionTitles: [<>How can I use the bulk download?</>],
      accordionContent: [
        <p>
          To perform bulk downloads, visit the
          {' '}
          <a
            href="https://www.usaspending.gov/#/download_center/custom_award_data"
            target="_blank"
            rel="noopener noreferrer"
          >
            Custom Award Data page
          </a>
          {' '}
          (Download Center drop-down in the top nav) or the
          {' '}
          <a
            href="https://www.usaspending.gov/#/download_center/award_data_archive"
            target="_blank"
            rel="noopener noreferrer"
          >
            Award Data Archive
          </a>
          . You may also be interested in downloading the
          {' '}
          <a
            href="https://files.usaspending.gov/agency_submissions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            raw agency submission files
          </a>
          , which require a greater degree of data manipulation to format into a dataset.
          {' '}
        </p>,
      ],
    },
    {
      accordionTitles: [<>How can I see data connections between File C and File D data?</>],
      accordionContent: [
        <p>
          To see linkages between award financial data (File C) and procurement (File D1) and
          financial assistance data (File D2) data, you can use the following Structured Query
          Langue (SQL) commands
          {' '}
          <a
            href="https://github.com/fedspendingtransparency/usaspending-api/tree/dev/usaspending_api/etl/management/sql/c_file_linkage"
            target="_blank"
            rel="noopener noreferrer"
          >
            found here on our Github page
          </a>
          . More information about all data files, including Files C and D, can be found on the
          {' '}
          <a
            href="https://www.fiscal.treasury.gov/data-transparency/DAIMS-current.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            DATA Act Information Model Schema (DAIMS)
          </a>
          {' '}
          portion of the Bureau of the Fiscal Service website.
        </p>,
      ],
    },

  ],
};
