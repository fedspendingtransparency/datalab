import React from 'react';
import { Link } from 'gatsby';
import styles from './official-banner.module.scss';

import flag from '../../images/us_flag_small.png';

class OfficialBanner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className={styles.officialBanner}>
				<ul className={styles.siteList}>
					<li className={styles.siteItem}>
						<a className={styles.siteLink} target="_blank" rel="noopener noreferrer" href="https://www.usaspending.gov">
							USAspending.gov
						</a>
					</li>
					<li className={`${styles.siteItem} ${styles.itemSpacer}`} aria-hidden="true">
						|
					</li>
					<li className={styles.siteItem}>
						<Link to="/" className={styles.siteLink}>
							Data Lab
						</Link>
					</li>
					<li className={`${styles.siteItem} ${styles.itemSpacer}`} aria-hidden="true">
						|
					</li>
					<li className={styles.siteItem}>
						<a className={styles.siteLink} target="_blank" rel="noopener noreferrer" href="https://fiscaldata.treasury.gov/">
							FiscalData.gov
						</a>
					</li>
				</ul>
				<div className={styles.wrapper}>
					<div className={styles.text}>
						An official website of the U.S. government
					</div>
					<img
						className={`${styles.flag} lazyload`}
						src={flag}
						alt="Data Lab Logo of an abstract American flag referencing a bar chart"
					/>
				</div>
			</header>
		);
	}
} // end class


export default OfficialBanner;
