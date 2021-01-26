import React from 'react';
import Popover from '@material-ui/core/Popover';
import withStyles from '@material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import styles from './tooltip.module.scss';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';

const inlineStyles = () => ({
	popover: {
		pointerEvents: 'none',
	},
	paper: {
		padding: '20px',
		'background-color': 'rgba(255,255,255,.95)',
		'border-radius': '0',
	},
});

class MouseOverPopover extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			anchorEl: null,
			openedPopoverId: null,
		};
	}

	componentDidMount() {
		window.addEventListener('resize', this.handlePopoverClose);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handlePopoverClose);
	}

	handlePopoverOpen = (event, popoverId, ref2) => {
		this.setState({
			openedPopoverId: popoverId,
			anchorEl: event.currentTarget,
			ref: ref2,
		});
	};

	handlePopoverClose = () => {
		this.setState({
			openedPopoverId: null,
			anchorEl: null,
		});
	};

	isOpen = id => {
		const { openedPopoverId } = this.state;
		return openedPopoverId === id;
	};

	keyUpHandler = e => {
		if (e.keyCode === 13) {
			this.handlePopoverClose();
			this.props.clearSelection(this.state.anchorEl);
		}
	};

	render() {
		const { classes, title, id } = this.props;
		const { anchorEl, openedPopoverId } = this.state;

		return (
			<div className={styles.tooltip}>
				<Popover
					className={`mouse-over-popover ${classes.popover}`}
					classes={{
						paper: classes.paper,
					}}
					open={this.isOpen(id)}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					onClose={this.handlePopoverClose}>
					<Grid container direction="row">
						<div className={styles.title} onClick={this.handlePopoverClose}>
							<span>{title}</span>
							<span id="closeButton">
								<CloseIcon
									tabIndex="0"
									className={styles.close}
									onClick={this.handlePopoverClose}
									onKeyUp={this.keyUpHandler}
								/>
							</span>
						</div>
						{this.props.rows.map((item, key) => {
							return (
								<Grid item key={`grid-item-${key}`} className={styles.container}>
									<div className={styles.label}>{Object.keys(item)}</div>
									<div className={styles.value}>{item[Object.keys(item)]}</div>
								</Grid>
							);
						})}
					</Grid>
				</Popover>
			</div>
		);
	}
}

export default withStyles(inlineStyles)(MouseOverPopover);

MouseOverPopover.propTypes = {
	classes: PropTypes.object.isRequired,
	rows: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
