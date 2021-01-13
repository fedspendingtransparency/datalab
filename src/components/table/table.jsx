import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'data-transparency-ui';
import 'data-transparency-ui/dist/data-transparency-ui.css';
import './demo.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faAngleRight,
	faAngleLeft,
	faCaretDown,
	faCaretUp,
	faInfo,
	faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import formatNumber from '../../utils/number-formatter/number-formatter';

library.add(
	faAngleRight,
	faAngleLeft,
	faCaretDown,
	faCaretUp,
	faInfo,
	faInfoCircle
);

const DataTable = props => {
	const [page, changePage] = useState(1);
	const [pageSize, changeLimit] = useState(10);
	const [data, setData] = useState(props.data);
	const [currentList, changeCurrentList] = useState(null);
	const [field, updateField] = useState(props.defaultField);
	const [direction, updateDirection] = useState(props.defaultDirection);

	useEffect(() => {
		changeCurrentList(updateData(props.data));
		setData(props.data);
	}, [props.data]);

	const formatDollars = list => {
		if (list && list.length > 0) {
			list.forEach((x, i) => {
				Object.keys(x).forEach(key => {
					if (typeof list[i][key] === 'number') {
						list[i][key] = formatNumber('dollars', list[i][key]);
					}
				});
			});
			return list;
		}
	};

	const updateData = list => {
		if (list) {
			if (list.length < pageSize - 1) {
				return formatDollars(list);
			} else {
				return formatDollars(list.slice(0, pageSize));
			}
		} else {
			return null;
		}
	};

	const handlePageChange = pg => {
		changePage(pg);
		changeCurrentList(formatDollars(paginate(data, pg)));
	};

	let currentSort = { field, direction };

	const updateSort = (field, direction) => {
		updateField(field);
		updateDirection(direction);
		currentSort = {
			field,
			direction,
		};

		const sortedList =
			direction === 'desc' ? sortDesc(data, field) : sortAsc(data, field);

		changeCurrentList(formatDollars(paginate(sortedList, page)));
	};

	const sortDesc = (list, fieldName) => {
		return list.sort((a, b) => (a[fieldName] < b[fieldName] ? 1 : -1));
	};

	const sortAsc = (list, fieldName) => {
		return list.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1));
	};

	const paginate = (list, pageNumber) => {
		const startIndex = (pageNumber - 1) * 10;
		const endIndex =
			startIndex + pageSize < list.length - 1
				? startIndex + pageSize
				: list.length;
		return data.slice(startIndex, endIndex);
	};

	const { columns } = props;

	return (
		<>
			<Table
				columns={columns}
				rows={currentList}
				updateSort={updateSort}
				currentSort={currentSort}
				expandable
			/>
			<Pagination
				resultsText
				currentPage={page}
				changePage={handlePageChange}
				pageSize={10}
				totalItems={data ? data.length : 0}
			/>
		</>
	);
};

export default DataTable;
