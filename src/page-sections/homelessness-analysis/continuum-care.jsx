import React from 'react';
import Treemap from '../../components/visualizations/homelessness-analysis/treemap/treemap';

export default function ContinuumCare() {
	return (
		<>
			<div className="homelessness-subheading">
				Clustering Administrative Regions
			</div>
			<div className="homelessness-subheading2">
				Using multiple data sources to discover similarities between regions
			</div>
			<Treemap />
		</>
	);
}
