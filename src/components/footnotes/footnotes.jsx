import React from 'react';
import styles from './footnotes.module.scss';

export default class Footnotes extends React.Component {
	constructor(props) {
		super(props);
	}

	render = () =>
		<div id={styles.footnotes}>
			<div className={styles.headerSpacer}><span className={styles.header}>Footnotes</span></div>
			{this.props.footnotes.map((footnote, i) => <p key={i}>
				<span id={`fn${i + 1}`} className={styles.number}><a href={`#fr${i + 1}`}>{i + 1}</a></span>
				<span className={styles.text}>{footnote}</span>
			</p>
			)}
		</div>
};
