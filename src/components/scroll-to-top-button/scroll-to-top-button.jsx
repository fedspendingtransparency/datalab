import React from 'react';
import styles from './scroll-to-top-button.module.scss';

import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ScrollToTopButton = ({ onClick, visible }) => {
	return (
		<div
			id="scroll-to-top"
			className={styles.scrollToTopContainer}
			style={{ opacity: visible ? 1 : 0 }}>
			<IconButton
				aria-label="scroll-to-top"
				className={styles.scrollToTopButton}
				onClick={onClick}
				disabled={!visible}>
				<ExpandLessIcon fontSize="large" />
			</IconButton>
		</div>
	);
};

export default ScrollToTopButton;
