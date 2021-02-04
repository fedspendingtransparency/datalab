import React from 'react';
import '../../styles/index.scss';
/* components */
import Mapviz from '../../components/visualizations/federal-employees/mapviz/mapviz';
import Downloads from '../../components/section-elements/downloads/downloads';

const employeesData = require('../../../static/unstructured-data/federal-employees/employees.json');

function Where(props) {
	return (
		<>
			<h2>Federal Employees Density Map</h2>
			<Mapviz
				sectionId={props.sectionId}
				dataSource={props.dataSource}
				location={props.location}
			/>
			<Downloads data={employeesData} isJSON={true} />
		</>
	);
}

export default Where;
