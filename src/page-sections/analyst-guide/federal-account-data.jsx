import React from 'react';
import styles from '../../pages/analyst-guide/analyst-guide.module.scss';

export default {
  title: 'QUESTIONS ABOUT FEDERAL ACCOUNT DATA',
  introSentence: <></>,
  data: [
    {
      accordionTitles: [
        <>What are federal accounts?</>,
      ],
      accordionContent: [
        <p>
          Federal accounts are found in the budget that the President submits to Congress for
          approval. Each federal account is comprised of a “family,” or grouping, of specific
          account numbers known as Treasury Account Symbols (TAS), through which spending
          actually occurs. The accounts give you an idea of how agencies receive and spend
          congressional funding to carry out their programs, projects, and activities.
          {' '}
          <a
            href="https://www.usaspending.gov/#/federal_account/020-0550"
            target="_blank"
            rel="noopener noreferrer"
          >
            Interest on the Public Debt
          </a>
          ,
          {' '}
          <a
            href="https://www.usaspending.gov/#/federal_account/024-8135"
            target="_blank"
            rel="noopener noreferrer"
          >
            Civil Service Retirement and Disability Fund
          </a>
          , and
          {' '}
          <a
            href="https://www.usaspending.gov/#/federal_account/091-0200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Student Financial Assistance
          </a>
          {' '}
          are examples of the more than 2,000 unique federal accounts of the U.S. government.
          Federal accounts also have associated Federal Account Symbols to identify them. For
          example, Student Financial Assistance has the Federal Account Symbol 091-0200.
        </p>,
      ],
    },
    {
      accordionTitles: [
        <>
          With the size of the federal government, how are you be able to identify unique accounts?
        </>,
      ],
      accordionContent: [
        <p>
          Federal accounts are uniquely identified by the Agency Identifier and the Main Account
          Code. These codes are required for agency financial reporting.
        </p>,
        <>
          <ul>
            <span className={styles.bold}>Agency Identifier (AID)</span>
            : This is a 3-digit number that identifies the agency responsible for a
            Treasury account (“091” in the Student Financial Assistance example above).
          </ul>
          <ul>
            <span className={styles.bold}>Main Account Code (MAC)</span>
            : This 4-digit number forms the basis of the federal account (“0200”
            in the Student Financial Assistance example above).
          </ul>
        </>,
        <p>
          Each Agency Identifier should have at least one federal account associated with it, so
          the agency can conduct its function and carry out its mission. Despite the name, there
          are instances where an Agency Identifier is shared among more than one agency. In these
          cases, each agency within the shared Agency Identifier will still have at least one
          federal account of its own.
        </p>],
    },
    {
      accordionTitles: [<>What does the TAS acronym mean?</>],
      accordionContent: [
        <p>
          A Treasury Account Symbol (TAS) is a code that identifies critical information about each
          transaction that agencies report, such as the length of time that the specific account is
          available for use by the agency. Like federal accounts, each TAS has an Agency Identifier
          and a Main Account Code, along with several other codes:
        </p>,
        <>
          <ul>
            <li>
              <span className={styles.bold}>Agency Identifier (AID)</span>
              : 3 digits, Identifies the agency responsible for a Treasury account.
              Assigned by Congress.
            </li>
            <li>
              <span className={styles.bold}>Main Account Code (MAC)</span>
              : 4 digits, identifies the TAS type and purpose. It cannot be blank.
            </li>
            <li>
              <span className={styles.bold}>Sub Account Code (SAC)</span>
              : 3 digits, Identifies a sub-division of the TAS. It cannot be blank. A
              sub-account code of "000" means that the TAS is the parent account.
            </li>
            <li>
              <span className={styles.bold}>Allocation Transfer Agency ID (ATA)</span>
              : 3 digits, Identifies an agency that receives funds
              through an allocation (non-expenditure) transfer.
            </li>
            <li>
              <span className={styles.bold}>Beginning Period of Availability (BPOA)</span>
              : 4 digits, Identifies the first year that an appropriation
              account may incur new obligations. This is for annual and multi-year funds only.
              <ul className={styles.ulNoMargin}>
                <i>AND</i>
              </ul>
            </li>
            <li>
              <span className={styles.bold}>Ending Period of Availability (EPOA)</span>
              : 4 digits, Identifies the last year that an appropriation
              account may incur new obligations. This is for annual and multi-year funds only.
              <ul className={styles.ulNoMargin}>
                <i>OR (if no BPOA or EPOA)</i>
              </ul>
            </li>
            <li>
              <span className={styles.bold}>Availability Type Code (ATC)</span>
              : 1 digit, Instead of specific years, this one-letter code identifies the availability
              (or time period) for obligations to be made on the appropriation account. A TAS will
              have an “X” if there is an unlimited or indefinite period to incur new obligations.
            </li>
          </ul>
        </>,
        <p>
          In some cases, there may be multiple TASs in one federal account. In these instances, you
          can roll up to the federal account level by combining activity from all TASs that share a
          Main Account Code and Agency Identifier.
        </p>],
    },
    {
      accordionTitles: [<>How exactly is a TAS different from a federal account?</>],
      accordionContent: [
        <p>
          Federal accounts are comprised of a TAS or multiple TASs. Let’s break it down to a
          relatable scenario. Say you have a bank account and in that account you have checking,
          growth, and savings. In this scenario, your bank account is the federal account and the
          checking, growth, and savings are your TASs. Checking, growth, and savings have different
          purposes and are at the level where transactions actually take place. These “TASs” would
          be grouped under your account based on your Social Security Number, the same way a federal
          account has a Federal Account Symbol. Just like checking, growth, and savings, the Student
          Financial Assistance federal account has several related TASs that have different
          obligation amounts.
        </p>,
      ],
    },
    {
      accordionTitles: [
        <>What does it mean when one agency’s TAS are part of a second agency’s submissions?</>,
      ],
      accordionContent: [
        <p>
          Sometimes the funding associated with a TAS is executed by another agency than the one
          indicated by the Agency Identifier. When this occurs, quite often the executing agency
          will submit the financial and award information associated with the TAS. Since the funding
          was assigned by Congress to the agency indicated by the Agency Identifier, we group by
          Agency Identifier so that users can see both the budgetary resources assigned to the
          agency as well as the spending that flows from the related accounts.
        </p>,
      ],
    },
    {
      accordionTitles: [
        <>What data is used to populate the federal accounts page on USAspending.gov?</>,
      ],
      accordionContent: [
        <p>
          The information that displays on the federal account page on USAspending.gov comes from
          the quarterly agency submissions. The account snapshot at the beginning of the page is
          data from the Appropriation Account Detail File (File A). The “Spending Over Time” and
          “Spending By Category” sections come from the information in the Object Class and Program
          Activity Detail File (File B). The “Spending by Award” section is from the Award Financial
          Detail File (File C) and the Award and Awardee attribute files (Files D1 and D2).
        </p>,
      ],
    },
    {
      accordionTitles: [<>Can I download the federal account data?</>],
      accordionContent: [
        <p>
          The federal account data comes from agency submissions. This information can be downloaded
          from the
          {' '}
          <a
            href="https://www.usaspending.gov/#/download_center/custom_account_data"
            target="_blank"
            rel="noopener noreferrer"
          >
            Custom Account Data page
          </a>
          .
        </p>,
      ],
    },
    {
      accordionTitles: [<>How can I see the federal accounts for prior years?</>],
      accordionContent: [
        <p>
          Prior to May 2017, agencies were not required to submit their financial data to be
          published on USAspending. The DATA Act of 2014 required that agency financial data be
          available to the public, to begin by May 2017. However, you may see agency financial data
          for 2017 and since then, by filtering by fiscal year. In addition, you can see similar –
          but not exactly the same – information in
          {' '}
          <a
            href="https://www.whitehouse.gov/omb/appendix/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Office of Management and Budget (OMB) budget appendices
          </a>
          .
        </p>,
      ],
    },
  ],
};
