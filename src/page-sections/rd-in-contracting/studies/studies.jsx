import React, { useEffect, useState } from 'react';
import styles from './studies.module.scss';
import AccordionList from 'src/components/accordion-list/accordion-list';
import GridList from '@material-ui/core/GridList/GridList';
import GridListTile from '@material-ui/core/GridListTile/GridListTile';
import Downloads from 'src/components/section-elements/downloads/downloads';
import 'src/styles/index.scss';

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

	return (<>
		<h2 className='rd-viztitle'>{props.section.viztitle}</h2>
		<AccordionList title='Instructions'>
			<ul>
				<li>instructions here</li>
			</ul>
		</AccordionList>

		<img
		src='/images/viz/rd/chart3.svg'
		alt='Line graph showing federal obligations for R&D from 2009 to 2019 broken out into categories for Basic research, applied research, development, R&D plant, and total R&D.'
		className={styles.chart}
		/>
		<GridList className={styles.legend} cols={windowWidth < 768 ? 2 : 5} cellHeight='auto'>
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
