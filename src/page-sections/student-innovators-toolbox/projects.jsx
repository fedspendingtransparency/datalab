import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import styles from '../../pages/student-innovators-toolbox/student-innovators-toolbox.module.scss';
import capstone from '../../images/student-innovators-toolbox/capstone.png';
import masters from '../../images/student-innovators-toolbox/masters.png';

export default {
	title: 'PROJECTS',
	introSentence: <></>,
	data: [
		{
			content: [
				<Grid container justify="space-between" spacing={2}>
					<Grid item xs={12} lg={6}>
						<a
							href="https://raw.githubusercontent.com/USAspendingexplorer/USAspending-explorer/master/Images/Screenshots/Screen%20Shot%202017-06-16%20at%202.57.19%20PM.png"
							target="_blank"
							rel="noopener noreferrer">
							<img
								className={styles.projectImage}
								src={capstone}
								aria-label="The DATA Act Capstone Project"
							/>
						</a>
						<h1>The DATA Act Capstone Project</h1>
						<p>
							Building an open source tool to make federal spending data more
							accessible and easy to navigate.
						</p>
						<p className={styles.sourceInfo}>
							Syracuse University | Maxwell School of Citizenship and Public Affairs
						</p>
					</Grid>
					<Hidden lgUp>
						<Grid item xs={12} className={styles.projectMarginTop}></Grid>
					</Hidden>
					<Grid item xs={12} lg={6}>
						<img className={styles.projectImage} src={masters} />
						<h1>Master's Project: Unspent Funds Across Federal Agencies</h1>
						<p>
							Analysis and policy recommendations to address unspent money in federal
							agencies.
						</p>
						<p className={styles.sourceInfo}>
							Duke University | Sanford School of Public Policy
						</p>
					</Grid>
				</Grid>,
			],
		},
	],
};
