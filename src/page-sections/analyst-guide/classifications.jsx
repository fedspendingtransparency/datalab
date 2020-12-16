import React from 'react';
import styles from '../../pages/analyst-guide/analyst-guide.module.scss';

export default {
  title: 'CLASSIFICATIONS/HIERARCHIES/SCHEMA QUESTIONS',
  introSentence: <></>,
  data: [
    {
      accordionTitles: [<>What are Product and Service Codes and where is the taxonomy located?</>],
      accordionContent: [
        <p>
          Product and Service Codes (PSC) are a system that describes the type of product or service
          that’s being purchased with a contract. You can find a list of Product Service Codes at
          {' '}
          <a
            href="https://www.acquisition.gov/PSC_Manual"
            target="_blank"
            rel="noopener noreferrer"
          >
            acquisition.gov.
          </a>
          {' '}
          PSCs are only applicable to contracts.
        </p>,
      ],
    },
    {
      accordionTitles: [
        <>How can I find funds related to a particular disaster or national event?</>,
      ],
      accordionContent: [
        <p>
          Each contract has a data element called the National Interest Action, and the values
          in this element are codes that identify the designated disaster that a contract is
          associated with. To learn more about which disaster or national event a contract is
          associated with, use this code.
        </p>,
        <p>
          Currently, financial assistance records — those for loans, grants, direct payments,
          insurance, and other types of assistance — do
          {' '}
          <span className={styles.bold}>not</span>
          {' '}
          have National Interest Actions, although there are discussions ongoing about whether to
          include them.
        </p>,
      ],
    },
  ],
};
