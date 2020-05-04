import React from 'react';
import HWCTA from '../../components/hwcta/hwcta';

function DTSHWCTA(props) {
  const title = 'DTS';

  const dataSources = [
    {
      content:
      <ul>
        <li>
          Bureau of the Fiscal Service’s Daily Treasury Statement
        </li>
      </ul>
    }
  ];

  const methodologies = [
    {
      content:
      <>
        <p>
          The data used to create the Daily Spending Tracker is sourced from the Bureau of the Fiscal Service’s Daily Treasury Statement (DTS) archive. The download and transformation scripts come from the Federal Treasury API, developed for the treasury.io tool. The data goes through three stages of cleaning prior to reaching its completed state: download, parse, and aggregate.
        </p>
        <p>
          On our first download, our team downloaded each text file from the DTS archive and stored them in a local folder. Each subsequent pull downloads only the most recently posted DTS. Once each file is downloaded, we run a parsing script, which parses each DTS into eight comma-separated value (CSV) files – one for each table in the DTS. (Table III was broken into three separate files.) The CSV files were then aggregated based on their table, creating eight lifetime CSV files. The Table II lifetime CSV file is the backbone of our tool, as it holds the federal government’s daily deposit and withdrawal data.
        </p>
        <p>
          Once the lifetime CSV file was aggregated, we transformed and filtered the data in order to ensure data fidelity while reducing the file size. We then filtered out deposits, which established the final file on which we built our spending tool.
        </p>
        <p>
          To create the DTS visualization, we first parsed the aggregated CSV file with Javascript and used the d3 data visualization library to render it to the screen. All daily, month-to-date (MTD), and fiscal year-to-date (FYTD) values were multiplied by 1,000,000, since the DTS archives are rounded to millions of dollars.
        </p>
        <p>
          The bar chart and table view visible on the page is for total spending by fiscal year. These use the same dataset as the larger visualization. Only the previous nine years are shown.
        </p>
        <p>
Lastly, we used the last recorded data entry to update the text below the page title to communicate to the user when the dataset was last updated. Below that, we also specify the total amount spent for the LRDE in the dataset.
        </p>
      </>
    }
  ];

  return <HWCTA location={props.location} title={title} dataSources={dataSources} methodologies={methodologies}/>;
};

export default DTSHWCTA;
