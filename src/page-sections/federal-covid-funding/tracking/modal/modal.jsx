import React from 'react';
import numberFormatter from 'src/utils/number-formatter/number-formatter';
import Grid from '@material-ui/core/Grid';
import Bar from '../bars/bar';
import ScaleLine from '../../../../svgs/federal-covid-funding/tracking/scale-line.svg';

import styles from './modal.module.scss';

export default function CovidModal(props) {
	function Content() {
		if (props.data) {
			return (
				<>
					{props.mobileTablet && (
						<>
							<div id="covid-modal">{props.mainBar}</div>
							<div className={styles.mobileHeading}>
								<div className={styles.mobileHeadingLabel}>Agency</div>
								<div className={styles.mobileHeadingLabel}>Total Budget</div>
							</div>
						</>
					)}
					{props.data.map((i, key) => {
						const _data = [
							{
								amount: i.Amount_Outlayed,
								percent: i.Percent_Outlayed,
							},
							{
								amount: i.Amount_Obligated,
								percent: i.Percent_Obligated_Not_Outlayed,
							},
							{
								amount: i.Amount_Unobligated,
								percent: i.Percent_Unobligated,
							},
						];

						if (props.mobileTablet) {
							return (
								<Grid container key={key} className={styles.items} justify="center">
									<Grid item xs={10} className={styles.account}>
										{i.Agency}{' '}
									</Grid>
									<Grid item xs={2}>
										<div className={styles.amount}>
											<span>
												{numberFormatter('dollars suffix', i.Total_Budgetary_Resources, 3)}
											</span>
										</div>
									</Grid>
								</Grid>
							);
						}
						return (
							<div
								key={key}
								id="covid-modal"
								style={{ paddingRight: 10, paddingBottom: 27 }}>
								<p style={{ marginBottom: 4, marginTop: 5 }}>
									<span>
										<span className={styles.agencyName}>{i.Agency} </span>
									</span>
									<span>
										{numberFormatter('dollars suffix', i.Total_Budgetary_Resources, 3)}
									</span>
								</p>
								<Bar key={key} data={_data} isModal showDetails />
							</div>
						);
					})}
				</>
			);
		}
		return <></>;
	}

	return (
		<div
			style={{
				minWidth: window.innerWidth * 0.6,
				maxWidth: window.innerWidth * 0.9,
				overflowX: 'hidden',
			}}>
			<ScaleLine />
			<Content style={{ overflowX: 'hidden' }} />
		</div>
	);
}
