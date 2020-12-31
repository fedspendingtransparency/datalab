import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import './data-table.scss';

export default class Paginator extends React.Component {
	static propTypes = {
		rowCount: PropTypes.number.isRequired,
		rowsPerPage: PropTypes.number.isRequired,
		currentPage: PropTypes.number,
		onPageChange: PropTypes.func.isRequired,
	};
	static defaultProps = {
		currentPage: 1,
	};

	constructor(props) {
		super(props);
		this.state = {
			numPages: Math.ceil(props.rowCount / this.props.rowsPerPage),
		};
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.rowCount !== prevProps.rowCount ||
			this.props.rowsPerPage !== prevProps.rowsPerPage
		) {
			this.setState({
				numPages: Math.ceil(this.props.rowCount / this.props.rowsPerPage),
			});
		}
	}

	handlePaginationChange = (e, { activePage }) =>
		this.props.onPageChange(activePage);

	render = () => (
		<Pagination
			activePage={this.props.currentPage}
			role="navigation"
			aria-label="table page navigator"
			totalPages={this.state.numPages}
			firstItem={null}
			lastItem={null}
			prevItem={{
				content: <ChevronLeft />,
				icon: true,
				disabled: this.props.currentPage === 1,
			}}
			nextItem={{
				content: <ChevronRight />,
				icon: true,
				disabled: this.props.currentPage === this.state.numPages,
			}}
			ellipsisItem={{ content: '...', icon: true, className: 'disabled' }}
			onPageChange={this.handlePaginationChange}
		/>
	);
}
