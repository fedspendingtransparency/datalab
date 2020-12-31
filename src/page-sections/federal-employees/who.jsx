import React from 'react';
import '../../styles/index.scss';

import ControlBar from 'src/components/control-bar/control-bar';
import Share from 'src/components/share/share';
import Treemap from 'src/components/visualizations/federal-employees/treemap/treemap';
import Downloads from 'src/components/section-elements/downloads/downloads';

export default function Who(props) {
	// re-structure data for download
	const { agencies, employeesSalaries } = props.dataSource.mem;
	const downloadableData = JSON.parse(
		JSON.stringify(employeesSalaries.children)
	);

	downloadableData.forEach(function(item) {
		item['agencyName'] = agencies[item.agencyId].name;
		item['agencyAbbrv'] = agencies[item.agencyId].abbreviation;
		delete item.agencyId;
	});

	return (
		<>
			<h2>Spending by Agency</h2>
			<ControlBar isFed={true}>
				<Share
					location={props.location}
					facebook=""
					reddit=""
					linkedin=""
					tumblr=""
					email=""
				/>
			</ControlBar>
			<Treemap sectionId={props.sectionId} dataSource={props.dataSource} />
			<Downloads data={downloadableData} isJSON={true} />
		</>
	);
}
