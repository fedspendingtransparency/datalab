/*
	This creates a set of formatted, hanging-indented, numbered footnotes starting with #1 (currently cannot support more than one per Web page)
	To use: pass footnotes prop as array of strings or HTML/JSX elements, one for each footnote
	Each footnote number is rendered as an anchor ("fn#") and hyperlink to referring text ("fr#")
	Also there is a global style (footnoteref) to consistently style fn links to footnotes, e.g. <a id='fr3' href='#fn3' className='footnoteref'>3</a>
*/

import React from 'react';
import PropTypes from 'prop-types';
import FootnotePadding from './footnote-padding';
import styles from './footnotes.module.scss';

export default class Footnotes extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		footnotes: PropTypes.array
	};

	render = () =>
		<div id='footnotes'>
			<div className={styles.headerSpacer}><span className={styles.header}>Footnotes</span></div>
			{this.props.footnotes.map((footnote, i) =>
				<div key={i} className={styles.footnote}>
					<div className={styles.number}>
						<FootnotePadding footnoteId={`fn${i + 1}`} />
						<a href={`#fr${i + 1}`}>{i + 1}</a>
					</div>
					<div className={styles.content}>{footnote}</div>
				</div>
			)}
		</div>
};
