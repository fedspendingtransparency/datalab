import React from 'react';
import '../../styles/index.scss';

import ControlBar from '../../components/control-bar/control-bar';
import Reset from '../../components/reset/reset';
import Share from '../../components/share/share';
import BarChart from '../../components/visualizations/federal-employees/bar-chart/bar-chart';
import Downloads from '../../components/section-elements/downloads/downloads';

export default function What(props) {
	// re-structure data for download
	const {
		employeeCounts,
		agencies,
		occupationCategories,
	} = props.dataSource.mem;
	const downloadableData = JSON.parse(JSON.stringify(employeeCounts));

	downloadableData.forEach(function(item) {
		item['agencyName'] = agencies[item.agencyId].name;
		item['occupationCategory'] =
			occupationCategories[item.occupationCategoryId].name;
		delete item.agencyId;
		delete item.occupationCategoryId;
	});

	return (
		<>
			<h2>Federal Employee Bar Chart</h2>
			<ControlBar isFed={true}>
				<Reset />
				<Share
					location={props.location}
					facebook=""
					reddit=""
					linkedin=""
					tumblr=""
					email=""
				/>
			</ControlBar>
			<BarChart sectionId={props.sectionId} dataSource={props.dataSource} />
			<Downloads data={downloadableData} isJSON={true} />
		</>
	);
}
