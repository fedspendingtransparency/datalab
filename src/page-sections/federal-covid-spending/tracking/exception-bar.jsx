import React from 'react';
import PropTypes from 'prop-types';
import styles from './bar.module.scss';
import CalloutBar from './callouts/callout-bar';

export default class ExceptionBar extends React.Component {
	/* props notes
		data: outlay, obligated and unobligated as {'amount': amount [in desired format], 'percent': percentage value}
	*/
	static propTypes = {
		'data': PropTypes.arrayOf(PropTypes.object).isRequired
	};

	constructor(props) {
		super(props);
	}

	render = () => <>
		<div className={styles.exceptionBar}>Reported values cannot be displayed.</div>
		<svg width='100%' height='56px'>
			<CalloutBar
				outlaid={0}
				obligated={50}
				unobligated={100}
				data={this.props.data}
			/>
			{/*		
								<svg width='100%' height='56px'>
						<Hidden smDown>
							<CalloutBar
								outlaid={parseFloat(this.props.data[0].percent)}
								obligated={parseFloat(this.props.data[1].percent)}
								unobligated={parseFloat(this.props.data[2].percent)}
								data={this.props.data}
							/>
						</Hidden>
						 <PercentBar
							outlaid={parseFloat(this.props.data[0].percent)}
							obligated={parseFloat(this.props.data[1].percent)}
							unobligated={parseFloat(this.props.data[2].percent)}
							barHeight={barHeight}
						/> 
						*/}
		</svg>
	</>;
}
