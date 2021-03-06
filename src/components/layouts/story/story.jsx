import styles from './story.module.scss';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Default from '../default/default';
import Grid from '@material-ui/core/Grid';
import HWCTALink from '../../hwcta-link/hwcta-link';
import MoreAnalyses from '../../more-analyses/more-analyses';
import { StorypageHeader } from '../../headers/headers';
import Toc from '../../toc/toc';
import pageColorMap from 'src/utils/page-color';
import legacyBlue from '../../../styles/variables.scss';
import ScrollingCircles from '../../scrolling-circles/scrolling-circles';

const StoryLayout = props => {
	let header, toc;

	if (!props.isCustomHeader) {
		header = (
			<Grid container justify="center" className={styles.headerContainer}>
				<Grid item md={10}>
					<header className={styles.headerHero}>
						<p className={styles.title}>{props.title}</p>
						<p className={styles.introSentence}>{props.introSentence}</p>
						{props.contextStatement && (
							<p className={styles.contextStatement}>{props.contextStatement}</p>
						)}
					</header>
				</Grid>
			</Grid>
		);

		toc = props.sectionToc ? <Toc sections={props.sectionToc} /> : <></>;
	}

	const scrollingToc = props.scrollingToc ? (
		<ScrollingCircles sections={props.sectionToc} />
	) : (
		<></>
	);
	const [color, setColor] = useState(legacyBlue);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setColor(pageColorMap[window.location.pathname.split('/').join('')]);
		}
	}, [props.color]);

	return (
		<Default>
			<StorypageHeader />
			<div className={styles.storyPage}>
				{header}
				{toc}
				{scrollingToc}
				{props.children}

				<div className={styles.hwcta}>
					<HWCTALink url={props.hwctaLink || '#'} fillColor={color} />
				</div>
				<MoreAnalyses />
			</div>
		</Default>
	);
};

export default StoryLayout;

StoryLayout.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	introSentence: PropTypes.string.isRequired,
	hwctaLink: PropTypes.string.isRequired,
	contextStatement: PropTypes.string,
	toc: PropTypes.array,
};
