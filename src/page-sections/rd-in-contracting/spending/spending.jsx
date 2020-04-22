import React from 'react';
import Downloads from '../../../components/section-elements/downloads/downloads';

export default function Spending() {
	return (<>
		<p>spending chart</p>
		<Downloads
			href={'/unstructured-data/rd-in-contracting/r&d_funding_by_agency_fy2019_created_20200316.csv'}
			date={'December 2019'}
		/>
	</>);
}