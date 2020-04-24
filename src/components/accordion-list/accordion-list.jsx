/*
	Text and UL-only accordion variant; in the future this should just use <Accordion>
*/

import React from 'react';
import PropTypes from 'prop-types';
import accordionStyles from './accordion-list.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default class AccordionList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			closed: true
		};

		this.toggle = this.toggle.bind(this);
	}

  /* props notes
    title: shows in the top box, collapsed or open
    color: theme color for border, collapsed background, and highlighted text within
    backgroundColor: background of collapsed box
  */
	static propTypes = {
		'title': PropTypes.string.isRequired,
		'color': PropTypes.string,
		'backgroundColor': PropTypes.string
	};

	toggle(e) {
		e.stopPropagation();
		this.setState(state => ({ closed: !state.closed }));
	}

	styleOverrides() {
		const styles = {};
		if (this.props.color) {
			styles.color = this.props.color;
		}
		if (this.state.closed && this.props.backgroundColor) {
			styles.backgroundColor = this.props.backgroundColor;
		}
		return styles;
	}

	render() {
		return (
			<div className={this.props.containerClass ? this.props.containerClass : accordionStyles.container}>
				<div className='row'>
					<div className='col-xs-12'>
						<section
							className={!this.state.closed ? `${accordionStyles.accordion} ${accordionStyles.open} accordion--open` : `${accordionStyles.accordion}`}
							style={this.props.color ? { 'borderColor': this.props.color } : {}}
						>
							<h1
								onClick={this.toggle}
								className={accordionStyles.heading}
								style={this.styleOverrides()}
							>
								{this.props.title}
								<button onClick={this.toggle} className={accordionStyles.toggle}>
									<FontAwesomeIcon icon={faPlus} className={accordionStyles.plus} style={this.props.color ? { 'color': this.props.color } : {}} />
									<FontAwesomeIcon icon={faMinus} className={accordionStyles.minus} style={this.props.color ? { 'color': this.props.color } : {}} />
									<span className='sr-only'>toggle contents</span>
								</button>
							</h1>
							<div className={accordionStyles.content}>
								{this.props.children}
							</div>
						</section>
					</div>
				</div>
			</div>
		);
	}
}
