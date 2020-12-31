/* PLEASE DO NOT DELETE this file
  This code is used to transform the sunburst data in to code that's usable by Vega.  This should be handled on the data analyst
  side but hasn't been rewritten yet due to the analyst backlog being long. */

import csvData
  from '../../../../../static/unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv';
import * as _ from 'lodash';

function convertCsvToJson() {
  let id = 1, existingItem;

  let tree = [{
    "id": id,
    "name": "flare",
    "colorHex": "#fff"
  }];

  const wedgeColors = ['#881e3d', '#daa200', '#D25d15', '#082344', '#004c40'];

  const agencies = [
    "Department of Defense",
    "Department of Veterans Affairs",
    "Department of Energy",
    "National Aeronautics and Space Administration",
    "Department of Health and Human Services",
    "Agency for International Development",
    "Department of State",
    "Department of Transportation",
    "Department of Agriculture",
    "General Services Administration",
    "Department of Homeland Security",
    "Office of Personnel Management",
    "Department of the Treasury",
    "Department of Justice",
    "Department of Commerce",
    "Department of the Interior",
    "Social Security Administration",
    "National Science Foundation",
    "Department of Education",
    "Department of Housing and Urban Development",
    "Department of Labor",
    "The Judicial Branch",
    "Environmental Protection Agency",
    "Smithsonian Institution",
    "Peace Corps",
    "Broadcasting Board of Governors",
    "Nuclear Regulatory Commission",
    "Securities and Exchange Commission",
    "Small Business Administration",
    "National Gallery of Art",
    "National Archives and Records Administration",
    "Pension Benefit Guaranty Corporation",
    "Executive Office of the President",
    "Government Accountability Office",
    "Equal Employment Opportunity Commission",
    "Consumer Financial Protection Bureau",
    "Federal Trade Commission",
    "Commodity Futures Trading Commission",
    "Consumer Product Safety Commission",
    "Federal Communications Commission",
    "Millennium Challenge Corporation",
    "Overseas Private Investment Corporation",
    "Court Services and Offender Supervision Agency",
    "Export-Import Bank of the United States",
    "Railroad Retirement Board",
    "United States Trade and Development Agency",
    "Corporation for National and Community Service",
    "National Labor Relations Board",
    "Armed Forces Retirement Home",
    "International Trade Commission",
    "Denali Commission",
    "Federal Election Commission",
    "National Transportation Safety Board",
    "Inter-American Foundation",
    "Federal Mediation and Conciliation Service",
    "National Endowment for the Arts",
    "Selective Service System",
    "Federal Mine Safety and Health Review Commission",
    "Surface Transportation Board",
    "Merit Systems Protection Board",
    "United States Chemical Safety Board",
    "Institute of Museum and Library Services",
    "National Endowment for the Humanities",
    "Morris K. Udall and Stewart L. Udall Foundation",
    "Office of Special Counsel",
    "Election Assistance Commission",
    "Access Board",
    "Federal Labor Relations Authority",
    "Occupational Safety and Health Review Commission",
    "Federal Maritime Commission",
    "Defense Nuclear Facilities Safety Board",
    "Committee for Purchase from People Who Are Blind or Severely Disabled",
    "U.S. Postal Service",
    "Privacy and Civil Liberties Oversight Board",
    "The Council of the Inspectors General on Integrity and Efficiency",
    "Gulf Coast Ecosystem Restoration Council",
    "National Mediation Board",
    "Federal Housing Finance Agency",
    "Office of Government Ethics",
    "Advisory Council on Historic Preservation",
    "Library of Congress",
    "American Battle Monuments Commission",
    "Administrative Conference of the U.S.",
    "Northern Border Regional Commission",
    "The Legislative Branch",
    "Commission of Fine Arts",
    "U.S. Tax Court"];

  csvData.forEach(function (row) {
    Object.keys(row).forEach(function(key) {

      if(key === 'subagency') {
        existingItem = _.filter(tree, _.matches({ 'name' : row[key], 'type' : key, 'agency': row['agency']}));
      } else {
        existingItem = _.filter(tree, _.matches({ 'name' : row[key], 'type' : key}));
      }

      if(key === 'obligation') {
        return;
      }

      // DO NOT SUM, ELSE ARCS WILL NOT BE CALCULATED CORRECTLY
      // const index = tree.indexOf(existingItem[0]);
      // tree[index]['size'] += parseInt(row['obligation']);

      if (existingItem.length < 1 || key === 'recipient') {

        const newObj = {
          "id": ++id,
          "name": row[key],
          "type": key,
          "parent": null,
          "agency": row['agency'],
          "colorHex": wedgeColors[agencies.indexOf(row['agency']) % 5]
        };

        // Set parent id
        switch (key) {
          case 'agency':
            newObj.parent = 1;
            break;
          case 'subagency':
            const tempSubAgencyParent = _.filter(tree, _.matches({ 'name' : row['agency'], 'type' : 'agency'}));
            const tempSubAgencyParentId = tempSubAgencyParent[0]['id'];
            newObj.parent = tempSubAgencyParentId;
            break;
          case 'recipient':
            newObj['size'] = parseInt(row['obligation']);
            const tempRecipientParent = _.filter(tree, _.matches({ 'name' : row['subagency'], 'type' : 'subagency', 'agency' : row['agency']}));
            if(tempRecipientParent && tempRecipientParent.length > 0) {
              const tempRecipientParentId = tempRecipientParent[0]['id'];
              newObj.parent = tempRecipientParentId;
            } else {
              console.log(tree);
              console.log(row);
            }
            break;
        }

        tree.push(newObj);

      }
    });
  });

  console.log(tree);

  return tree;

}

export default convertCsvToJson;
