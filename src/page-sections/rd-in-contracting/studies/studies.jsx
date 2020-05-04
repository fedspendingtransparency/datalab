import React, { useEffect, useState } from 'react';
import styles from './studies.module.scss';
import 'src/styles/index.scss';
import scssVariables from 'src/styles/variables.scss';

import Downloads from 'src/components/section-elements/downloads/downloads';
import GridList from '@material-ui/core/GridList/GridList';
import GridListTile from '@material-ui/core/GridListTile/GridListTile';
import { Hidden } from '@material-ui/core';
import ControlBar from "../../../components/control-bar/control-bar"
import Share from '../../../components/share/share';

export default function Studies(props) {
	const [windowWidth, setWindowWidth] = useState(null);

	function handleResize() {
		setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : '');
	}

	useEffect(() => {
		handleResize();

		window.addEventListener('resize', handleResize);

		return _ => {
			window.removeEventListener('resize', handleResize);
		};

	});

	const chartAltText = 'Line graph showing federal obligations for R&D. Values for 2009: total R&D 144 billion, development 77 billion, basic research 32 billion (continue) applied research 30 billion, R&D plant 3 billion. Values for 2019: total R&D 146 billion, development 58 billion, basic research 43 billion (continue) applied research 39 billion, R&D plant 4 billion.';

	return (<>
		<h2 className='rd-viztitle'>{props.section.viztitle}</h2>
		<ControlBar>
			<Share
				siteUrl={props.location.origin}
				pageUrl={props.location.pathname + '#' + props.sectionId}
				title='Data Lab - R&D in Contract Spending - U.S. Treasury'
				text={`#DYK the federal government is one of the largest and most consistent funding sources for Research & Development in the U.S.? Learn more by visiting #Data Lab's newest analysis, R&D in Contract Spending! #OpenData`}
				hoverColor='#1302d9'
			/>
		</ControlBar>

		<Hidden mdDown>
			<img src='/images/rd/chart3-desktop.svg' className={styles.chart} alt={chartAltText} />
		</Hidden>
		<Hidden only={['xs', 'sm', 'lg', 'xl']}>
			<img src='/images/rd/chart3-tablet.svg' className={styles.chart} alt={chartAltText} />
		</Hidden>
		<Hidden mdUp>
			<img src='/images/rd/chart3-mobile.svg' className={styles.chart} alt={chartAltText} />
		</Hidden>

		<GridList className={styles.legend} cols={windowWidth < parseInt(scssVariables.md) ? 2 : 5} cellHeight='auto'>
			<GridListTile className={styles.legendTile}>
				<div className={`${styles.legendBar} ${styles.one}`}></div>
				<div className={styles.legendText}>Total R&D</div>
			</GridListTile>
			<GridListTile className={styles.legendTile}>
				<div className={`${styles.legendBar} ${styles.two}`}></div>
				<div className={styles.legendText}>Development</div>
			</GridListTile>
			<GridListTile className={styles.legendTile}>
				<div className={`${styles.legendBar} ${styles.three}`}></div>
				<div className={styles.legendText}>Basic Research</div>
			</GridListTile>
			<GridListTile className={styles.legendTile}>
				<div className={`${styles.legendBar} ${styles.four}`}></div>
				<div className={styles.legendText}>Applied Research</div>
			</GridListTile>
			<GridListTile className={styles.legendTile}>
				<div className={`${styles.legendBar} ${styles.five}`}></div>
				<div className={styles.legendText}>R&D Plant</div>
			</GridListTile>
		</GridList>

		<Downloads
			href={'/unstructured-data/rd-in-contracting/r&d_trends_fy2009to2019.csv'}
			date={'December 2019'}
		/>
	</>);
}
