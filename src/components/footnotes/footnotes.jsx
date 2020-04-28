import React from 'react';
import PropTypes from 'prop-types';
import styles from './footnotes.module.scss';

export default class Footnotes extends React.Component {
	constructor(props) {
		super(props);
	}

	render = () =>
		<div id={styles.footnotes}>
			<div className={styles.headerSpacer}><span className={styles.header}>Footnotes</span></div>
			{this.props.footnotes.map((footnote, i) =>
				<div key={i} className={styles.footnote}>
					<div id={`fn${i + 1}`} className={styles.number}><a href={`#fr${i + 1}`}>{i + 1}</a></div>
					<div className={styles.content}>{footnote}</div>
				</div>
			)}
		</div>
};
