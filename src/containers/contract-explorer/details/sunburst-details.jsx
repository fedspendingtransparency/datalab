import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import formatNumber from 'src/utils/number-formatter/number-formatter';
import PropTypes from 'prop-types';
import styles from './sunburst-details.module.scss';

const SunburstDetails = (props) => {
	function SubagencyTotal(props) {
		if (props.showAmount) {
			return (
				<Grid item xs={12}>
					<div className={styles.subheading}>{props.details.contractBySubagencyHeading}</div>
					<div className={styles.totalAmount}>{formatNumber('dollars', props.details.contractTotal)}</div>
				</Grid>
			);
		}
		return null;
	}

	return (
		<Grid
  container
  spacing={4}
  className={styles.container}
		>
			<Grid item xs={12}>
				<div className={styles.heading}>{props.details.name}</div>
			</Grid>
			<SubagencyTotal showAmount={props.details && props.details.type === 'recipient'} details={props.details} />
			<Grid item xs={12}>
				<div className={styles.subheading}>Total Contracts</div>
				<div className={styles.totalAmount}>{formatNumber('dollars', props.details.total)}</div>
			</Grid>
			<Grid item xs={12}>
				<div className={styles.subheading}>{props.details.label}</div>
			</Grid>
			<Grid item xs={12}>
				<div className={styles.subheading}>{props.details.subheading}</div>
			</Grid>
			<Grid
  container
  className={styles.listItems}
			>
				{props.details.top5.map((item, key) => (
					<Grid item xs={12} sm={12} md={12} lg={6} className={styles.listItem} key={key}>
						<div className={styles.text}>{item.name}</div>
						<div className={styles.heading}>{formatNumber('dollars', item.obligation)}</div>
					</Grid>
				))}
				{props.details.allItems.map((item, key) => (
					<Grid item xs={12} sm={12} md={12} lg={6} className={styles.listItem} key={key}>
						<div className={styles.text}>{item.psc}</div>
						<div className={styles.heading}>{formatNumber('dollars', item.obligation)}</div>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default SunburstDetails;

SunburstDetails.propTypes = {
	name: PropTypes.string,
	details: PropTypes.object.isRequired,
	label: PropTypes.string,
};
