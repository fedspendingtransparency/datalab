import React from 'react';
import numberFormatter from 'src/utils/number-formatter';
import Grid from '@material-ui/core/Grid';
import Bar from '../bars/bar';
import styles from './modal.module.scss';

import LIcon from '../../../../svgs/federal-covid-spending/tracking/l-icon.svg';

export default function CovidModal(props) {
	function Content() {
		// console.log(props);
		if (props.data) {
			return (
				<>
					{props.data.map((i, key) => {
						const _data = [{
							amount: i.Amount_Outlaid,
							percent: i.Percent_Outlaid,
						}, {
							amount: i.Amount_Obligated,
							percent: i.Percent_Obligated_Not_Outlaid,
						}, {
							amount: i.Amount_Unobligated,
							percent: i.Percent_Unobligated,
						}];

						if (props.mobileTablet) {
							return (
								<Grid container key={key} className={styles.items} justify="center">
									<Grid item xs={10} className={styles.account}>{i.Account_Name}</Grid>
									<Grid item xs={2}>
										<div className={styles.amount}>
											<span>{numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}</span>
										</div>
									</Grid>
								</Grid>
							);
						}
						return (
							<div key={key} style={{ paddingRight: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
								<p style={{ marginBottom: '0', marginTop: '0.5rem' }}>
									<span>
										{i.Loan_Program_Account === 'Yes' ? <LIcon /> : <></>}
										{' '}
										<b>
											{' '}
											{i.Account_Name}
										</b>
									</span>
									<span>
										{numberFormatter('dollars suffix', i.Total_Budgetary_Resources)}
									</span>
								</p>
								<Bar
  key={key}
  data={_data}
  isModal
  showDetails
								/>
							</div>
						);
					})}
				</>
			);
		}

		return <></>;
	}

	function accountChecker() {
		if (props.activeAcc === 'All Accounts') {
			return <h2>Breakdown of All Agency Accounts</h2>;
		} if (props.activeAcc === 'Spending Accounts') {
			return <h2>Breakdown of Agency Spending Accounts</h2>;
		}
		return <h2>Breakdown of Agency Loan Program Accounts</h2>;
	}

	function mobileAccountChecker() {
		if (props.activeAcc === 'All Accounts') {
			return <div>Account</div>;
		} if (props.activeAcc === 'Spending Accounts') {
			return <div>Spending Account</div>;
		}
		return <div>Loan Account</div>;
	}

	function ContentHeader() {
		if (props.mobileTablet) {
			return (
				<div style={{ paddingRight: '8px' }}>
					<Bar
						data={props.barData}
						isModal
						showDetails
					/>
					<Grid container className={styles.titles}>
						<Grid item xs={10}>{mobileAccountChecker()}</Grid>
						<Grid item xs={2}>Total Budget</Grid>
					</Grid>
				</div>
			);
		}
		return accountChecker();

	}

	return (
		<div style={{ minWidth: window.innerWidth * 0.6, maxWidth: window.innerWidth * 0.9, overflowX: 'hidden' }}>
			<ContentHeader />
			<Content style={{ overflowX: 'hidden' }} />
		</div>
	);
}
