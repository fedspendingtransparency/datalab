import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withStyles from '@material-ui/styles/withStyles';
import TabPanel from './tab-panel';
import { legacyBlue } from 'src/styles/variables.scss';

const StyledTabs = withStyles({
	root: {
		borderBottom: 'solid 1px #ddd',
	},
	indicator: {
		backgroundColor: legacyBlue,
		height: 4,
	},
})(Tabs);

const StyledTab = withStyles({
	root: {
		padding: 0,
		textTransform: 'capitalize',
		color: '#555',
		'&:focus': {
			color: `${legacyBlue} !important`,
		},
	},
})(props => <Tab disableRipple {...props} />);

const TabsWrapper = ({ tabs, handleTabChange, activeTab }) => {
	const [value, setValue] = useState(activeTab < 0 ? 0 : activeTab);

	const handleChange = (_, newValue) => {
		setValue(newValue);
		if (handleTabChange) {
			handleTabChange(newValue);
		}
	};

	const activeStyle = {
		color: legacyBlue,
		fontWeight: 600,
	};

	const inactiveStyle = {
		color: '#555',
	};

	return (
		<>
			<StyledTabs value={value} onChange={handleChange} variant="fullWidth">
				{tabs.map((tab, index) => (
					<StyledTab
						value={index}
						label={tab.label}
						aria-label={tab.label}
						style={value === index ? activeStyle : inactiveStyle}
					/>
				))}
			</StyledTabs>
			{tabs.map((tab, index) => (
				<TabPanel value={value} index={index}>
					{tab.component}
				</TabPanel>
			))}
		</>
	);
};

export default TabsWrapper;
