import React from 'react';
import styles from '../../pages/analyst-guide/analyst-guide.module.scss';

export default {
  title: 'QUESTIONS ABOUT FINANCIAL ASSISTANCE AWARDS AND TRANSACTIONS',
  introSentence: <></>,
  data: [
    {
      accordionTitles: [
        <>How do I view all grants under a unique recipient in a given time period?</>,
      ],
      accordionContent: [
        <p>
          To view all the grants under a unique recipient within a given time period, you can use
          the same method provided for viewing unique contracts for a given recipient.
        </p>,
      ],
    },
    {
      accordionTitles: [
        <>What is a FAIN and what is a URI and how do I know when to use them?</>,
      ],
      accordionContent: [
        <p>
          FAINs and URIs are types of unique identifiers — unique (within a given agency) sequences
          of characters that are tied to each financial assistance award throughout its lifespan.
        </p>,
        <p>
          The FAIN (Federal Award Identification Number) is an identification code assigned to a
          specific financial assistance award by an agency for tracking purposes. The FAIN is tied
          to that award (and all future modifications to that award) throughout the award's life,
          which allows users to track all the spending made on a single award. Within an agency,
          FAINs are unique; a new award must be issued a new FAIN. The FAIN may contain both numbers
          and letters.
        </p>,
        <p>
          The URI is similar to the FAIN, but its
          {' '}
          <span className={styles.bold}>only</span>
          {' '}
          intended use is as a unique identifier for an aggregate record. Aggregate records display
          awards made to individual recipients by county, state, or foreign country in order to
          protect the recipients’ personally identifiable information. Because they are themselves
          aggregations covering a particular time period, aggregate awards are typically not
          modified with future transactions. As such, URIs (in their capacity as the unique award
          identifier of aggregate records) are generally only used once.
        </p>,
      ],
    },
  ],
};
