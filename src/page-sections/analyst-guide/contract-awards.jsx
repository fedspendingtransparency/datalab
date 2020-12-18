import React from 'react';
import styles from '../../pages/analyst-guide/analyst-guide.module.scss';

export default {
  title: 'QUESTIONS ABOUT CONTRACT AWARDS AND TRANSACTIONS',
  introSentence: <></>,
  data: [
    {
      accordionTitles: [
        <>How do I uniquely identify contracts, since there are several modifications?</>,
      ],
      accordionContent: [
        <p>
          You can use a few data elements to help you identify contracts. These are the Procurement
          Instrument Identifier (PIID), the Parent Award Identifier (PAID), and the awarding
          sub-tier agency. All contracts have a PIID. If a given PIID has been reused (used by
          multiple agencies), you’ll need to use both the PIID and the PAID to identify a contract.
          (Note: To uniquely identify a transaction, you’ll need the PIID, Parent PIID, awarding
          sub-tier agency, modification, and transaction number.)
        </p>,
        <p>
          It’s important to keep in mind that one record in USAspending.gov does not necessarily
          equal one contract; rather, one record equals one action taken on a contract (be that
          the creation of a contract or the modification to an existing contract).
        </p>,
      ],
    },
    {
      accordionTitles: [
        <>How do I view all contracts under a given recipient for a particular time frame?</>,
      ],
      accordionContent: [
        <p>
          Each contract recipient has a recipient identifier known as a DUNS number. For most
          recipients, viewing all contracts is as simple as identifying and filtering by that DUNS
          number.
        </p>,
        <p>
          Larger entities with multiple locations or departments may have multiple DUNS numbers,
          which makes it complicated to use this identifier alone to view all the contracts
          associated with a particular recipient (and within a particular timeframe). Viewing by
          Global Parent DUNS Number can be a good alternative for these recipients. You can also
          filter or subset contract data by:
          <span className={styles.bold}>AwardeeOrRecipientLegalEntityName</span>
          , or
          {' '}
          <span className={styles.bold}>
            Vendor Doing As Business Name and grant data by: UltimateParentLegalEntityName.
          </span>
        </p>,
        <p>
          Recipient Profiles, which are coming soon to USAspending.gov, will compile all the
          contracts for a given recipient, making the data easier to navigate and use.
        </p>,
      ],
    },
    {
      accordionTitles: [
        <>What is the definition of PIID and PAID and when do I need to use them? </>,
      ],
      accordionContent: [
        <p>
          A PIID is a unique identifier assigned to a federal contract, purchase order, basic
          ordering agreement, basic agreement, and/or blanket purchase agreement. It’s used to
          track the contract and any modifications or transactions related to it. Per the FAR,
          starting in October 2017 PIIDs for new contracts are unique across government; the new
          PIID format includes the Office Code, which renders it unique from all other PIIDs.
        </p>,
        <p>
          The PAID is the Parent Award Identifier (PAID). Not all PIIDs have PAIDs. If a given
          PIID has been reused (used by multiple agencies), you’ll need to use both the PIID and
          the PAID to identify a contract.
        </p>,
      ],
    },
    {
      accordionTitles: [
        <>What are the cases for when they'll be complete/empty?</>,
      ],
      accordionContent: [
        <p>
          The PIID field should never be blank — all awards have PIIDs. The PAID field might be
          blank, and this is nothing to be concerned about; the PAID field will be blank if the
          award has a unique PIID (in other words, one that hasn’t been reused). Keep in mind that
          if an award does not have a unique PIID, you’ll need to use the PAID to differentiate it
          from other awards.
        </p>,
      ],
    },
    {
      accordionTitles: [
        <>What are IDVs? Do they involve double-counting with contracts under them?</>,
      ],
      accordionContent: [
        <p>
          Indefinite Delivery Vehicles (IDVs) are vehicles that facilitate the delivery of supply
          and service orders. Types of IDVs include:
        </p>,
        <>
          <ul>
            <li>Blanket Purchase Agreement (BPA)</li>
            <li>Basic Ordering Agreement (BOA)</li>
            <li>Government-Wide Acquisition Contract (GWAC)</li>
            <li>Multi-Agency Contract</li>
            <li>Indefinite Delivery Contract (IDC)</li>
            <li>Federal Supply Schedule (FSS)</li>
            <li>Other Transaction (OT) Indefinite Delivery Vehicle (IDV)</li>
          </ul>
        </>],
    },
    {
      accordionTitles: [
        <>
          Which fields of transactions should be summed up to find the current value of a contract?
        </>,
      ],
      accordionContent: [
        <p>
          As we stated previously, a record doesn’t necessarily represent a single contract; rather,
          one record represents one action taken on a contract.
        </p>,
        <p>
          If a contract is represented by a single record (that is, if it has no modifications), you
          can look at that record to determine its current value (the action obligation elements).
        </p>,
        <p>
          If a contract is represented by several records (that is, if it has modifications), you’ll
          need the total action obligations for the original contract plus all of the modifications
          to determine the current value.
        </p>,
        <p>
          Finally, it’s worth noting that if all initially obligated money isn’t used, the last
          modification will display a negative amount. For example, if an initial contract was made
          for $10,000 and an agency only used $9,000 of that initial obligation, the last record
          would display an amount of -$1,000.
        </p>,
      ],
    },
  ],
};
