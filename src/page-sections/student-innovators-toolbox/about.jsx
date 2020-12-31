import React from 'react';
import styles from '../../pages/student-innovators-toolbox/student-innovators-toolbox.module.scss';

export default {
	title: 'ABOUT THE DATA',
	introSentence: <></>,
	data: [
		{
			accordionTitles: [<>Use the data to learn about something else</>],
			accordionContent: [
				<ul className={styles.numberedList}>
					<li>
						<a href="/analyst-guide" target="_blank" rel="noopener noreferrer">
							Analyst Guide to Federal Spending Data
						</a>
					</li>
					<li>
						<a
							href="https://www.usaspending.gov/#/download_center/data_dictionary"
							target="_blank"
							rel="noopener noreferrer">
							Data Dictionary
						</a>
					</li>
				</ul>,
			],
		},
	],
};
