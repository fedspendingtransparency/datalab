import React from 'react';
import styles from '../../pages/analyst-guide/analyst-guide.module.scss';

export default {
  title: 'LOAN-RELATED QUESTIONS',
  introSentence: <></>,
  data: [
    {
      accordionTitles: [
        <>How is federal spending on loans/loan guarantees (“loan,” for short) captured? </>,
        <>
          These awards don’t appear to use the Federal Action Obligation field that other award
          types do.
        </>,
      ],
      accordionContent: [
        <p>
          In the federal award landscape, spending is captured by the Federal Action Obligation
          field—
          <span className={styles.bold}>
            except in the case of loans.
          </span>
        </p>,
        <p>
          There are two data elements associated with loans: the Face Value and the Subsidy Cost.
          Because federal loans are expected to be repaid, the amount loaned out (the principal
          or Face Value) is not considered federal spending. It only becomes federal spending if
          and when the loan becomes unrecoverable in whole or part (through default, bankruptcy,
          loan forgiveness, and so on). This is where subsidy cost comes in. Subsidy cost is an
          estimation, made by the government, of what the loan will cost it over time; it’s
          calculated based on a credit model specific to the program and, in some cases, the
          recipient’s characteristics or credit history. Subsidy cost allows the government to
          budget for potential defaults on loans. It is the loan equivalent of federal spending,
          and when estimated accurately (especially if eventually updated based on the real-world
          performance of the loan), amounts to the same thing.
        </p>,
      ],
    },
    {
      accordionTitles: [
        <>How do I understand spending on loans?</>,
        <>What is a subsidy cost of zero?</>,
      ],
      accordionContent: [
        <p>
          When an agency reports a loan subsidy cost of zero, it means that the government agency
          has assessed a zero probability of the loan not being repaid — in effect, the loan won’t
          cost the government any money. Note that subsidy cost only takes into account the loan
          itself and does not include administrative costs.
        </p>,
      ],
    },
    {
      accordionTitles: [
        <>Do agencies update an award’s subsidy cost if a recipient defaults?</>,
        <>Can I see what the ultimate cost to the government was?</>,
      ],
      accordionContent: [
        <p>
          Currently, it’s uncommon for agencies to update subsidy cost data on USAspending, even if
          new information comes to light or a loan recipient defaults; this means that loan spending
          data is generally less accurate than that of other award types.
        </p>,
        <p>
          Because of this, we’ve identified loans as an area of data quality concern. We are taking
          steps, through agency outreach and seeking policy change, to improve the accuracy of this
          data as a measure of federal spending.
        </p>,
      ],
    },
  ],
};
