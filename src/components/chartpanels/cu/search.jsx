import styles from './search.module.scss';
import vizStyles from '../viz-control.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default class SearchPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: this.props.initShow,
		};
		this.filteredList = this.props.searchList;
	}

	toggleSearch = () =>
		this.setState(prevState => ({ expanded: !prevState.expanded }));

	filterSearch(event) {
		const filter = new RegExp(event.target.value, 'i');
		this.filteredList = this.props.searchList.filter(
			i => i.heading.search(filter) !== -1 || i.subheading.search(filter) !== -1
		);
		this.forceUpdate();
	}

	selectItem(id) {
		if (this.props.onSelect) {
			if (this.props.showCollapse) {
				this.setState({ expanded: false });
			}
			this.props.onSelect(id);
		}
	}

	onFocus = () => {
		if (this.props.showCollapse) {
			this.setState({ expanded: true });
		}
	};

	// detect if searchList prop changed (since it isn't in state)
	shouldComponentUpdate(nextProps) {
		if (nextProps.searchList !== this.props.searchList) {
			this.filteredList = nextProps.searchList;
		}
		return true;
	}

	render = () => (
		<div className={vizStyles.container}>
			<OutlinedInput
				placeholder={'Search ' + this.props.listDescription}
				inputProps={{ title: 'Search ' + this.props.listDescription }}
				variant="outlined"
				fullWidth
				onFocus={this.onFocus}
				onChange={event => this.filterSearch(event)}
				endAdornment={
					this.props.showCollapse ? (
						<InputAdornment position="end">
							<IconButton aria-label="search" onClick={this.toggleSearch}>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					) : (
						''
					)
				}
			/>
			<List
				aria-label={'List of ' + this.props.listDescription}
				className={
					styles.searchlist + (this.state.expanded ? ' ' + styles.expanded : '')
				}>
				{this.filteredList.map(i => (
					<ListItem
						key={i.id}
						button
						divider
						className={styles.listItem}
						onClick={() => this.selectItem(i.id)}>
						<ListItemText primary={i.heading} secondary={i.subheading} />
					</ListItem>
				))}
			</List>
		</div>
	);
}

/*
  Notes on props:
  searchList is expected to be an array of {id, heading text, subheading text}
  id values are arbitrary, but must be unique within the list to indicate which is selected (expected but not enforced by SearchPanel)
  e.g. [
    {
      id: 1,
      heading: 'R&D',
      subheading: 'R&D'
    }, {
      id: 2,
      heading: 'Education',
      subheading: 'Education'
    }, {
      id: 'dfsak3729',
      heading: 'Education',
      subheading: 'Adult Education - Basic Grants to States'
    }
  ]

  initShow is true if it should be open when initialized
  showCollapse is simply whether to show the icon to expand/collapse to the right of the search box, don't include if you use another method to hide list
  onSelect is parent callback when an item is selected, passes back id value only
*/

SearchPanel.propTypes = {
	searchList: PropTypes.arrayOf(PropTypes.object).isRequired,
	listDescription: PropTypes.string.isRequired,
	initShow: PropTypes.bool,
	showCollapse: PropTypes.bool,
	onSelect: PropTypes.func,
};
