import React from 'react';
import styles from './filter.module.scss';

import withStyles from '@material-ui/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

const Filter = ({ title, options, activeFilter, handleDropdownChange }) => {
	const InputComponent = withStyles(() => ({
		input: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			color: '#666',
			fontSize: 26,
			fontWeight: 300,
			padding: '10px 26px 10px 12px',
			borderBottom: 'solid 1px #666',
			'&:focus': {
				backgroundColor: 'transparent',
				boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
			},
		},
	}))(InputBase);

	return (
		<div className={styles.container}>
			<div className={styles.heading}>{title}</div>
			<FormControl>
				<InputLabel id={styles.dropdownLabel} />
				<Select
					labelId={styles.dropdownLabel}
					className={styles.dropdown}
					input={<InputComponent />}
					value={activeFilter}
					onChange={handleDropdownChange}
					MenuProps={{
						anchorOrigin: {
							vertical: 'bottom',
							horizontal: 'left',
						},
						transformOrigin: {
							vertical: 'top',
							horizontal: 'left',
						},
						getContentAnchorEl: null,
					}}>
					{options.map(option => (
						<MenuItem
							key={option.name}
							value={option.name}
							className={styles.dropdownItem}>
							{option.icon} {option.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default Filter;
