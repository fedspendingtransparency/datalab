import React from 'react';

import Switch from '@material-ui/core/Switch';
import withStyles from '@material-ui/styles/withStyles';

import toggleStyles from './toggle.module.scss';

const StyledSwitch = withStyles(() => ({
	root: {
		width: 45,
		height: 24,
		padding: 0,
		display: 'flex',
		margin: '0 1rem',
	},
	switchBase: {
		padding: 2,
		color: '#fff',
		'&$checked': {
			transform: 'translateX(21px)',
			color: '#fff',
			'& + $track': {
				opacity: 1,
				backgroundColor: '#e6e6e6',
			},
		},
	},
	thumb: {
		width: 20,
		height: 20,
		boxShadow: 'none',
		border: 'solid 2px #555',
	},
	track: {
		opacity: 1,
		backgroundColor: '#e6e6e6',
		borderRadius: 12,
	},
}))(Switch);

const Toggle = ({ first, second, handleToggle, checked }) => {
	// Simulate click here because StyledSwitch shouldn't change from uncontrolled to controlled when you click on either of the labels
	const handleLabelClick = e => {
		e.preventDefault();
		// Only keys that should trigger the click are Enter and Space
		if (e.charCode && e.charCode !== 13 && e.charCode !== 32) return;
		const s = document.getElementById('toggle-switch');
		if (
			(e.currentTarget.id === 'toggle-label-first' && checked) ||
			(e.currentTarget.id === 'toggle-label-second' && !checked) ||
			e.target.id === 'toggle-switch'
		) {
			s.click();
		}
	};

	return (
		<div className={toggleStyles.toggleContainer}>
			<div
				id="toggle-label-first"
				className={
					checked ? toggleStyles.toggleLabelInactive : toggleStyles.toggleLabelActive
				}
				onClick={handleLabelClick}
				onKeyPress={handleLabelClick}
				tabIndex={0}>
				{first.icon}
				<p>{first.name}</p>
			</div>
			<div id={toggleStyles.toggleSwitchContainer}>
				<StyledSwitch
					id="toggle-switch"
					checked={checked}
					onChange={handleToggle}
					onKeyPress={handleLabelClick}
					color="default"
					focusVisibleClassName={toggleStyles.toggleSwitchFocused}
				/>
			</div>
			<div
				id="toggle-label-second"
				className={
					checked ? toggleStyles.toggleLabelActive : toggleStyles.toggleLabelInactive
				}
				onClick={handleLabelClick}
				onKeyPress={handleLabelClick}
				tabIndex={0}>
				{second.icon}
				<p>{second.name}</p>
			</div>
		</div>
	);
};

export default Toggle;
