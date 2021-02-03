import React, { useEffect, useState } from 'react';
import downloadsStyles from './downloads.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import styleVariables from 'src/styles/variables.scss';
import FiscalDataLogo from 'src/svgs/powered-by-fiscal-data.svg';
import pageColorMap from '../../../utils/page-color';
import { checkScreenMode, ScreenModeEnum } from '../../../utils/screen-mode';

const Downloads = props => {
	let fillColor = styleVariables.legacy;

	const [screenMode, setScreenMode] = useState(0);

	if (typeof window !== 'undefined') {
		if (pageColorMap[window.location.pathname.split('/').join('')]) {
			fillColor = pageColorMap[window.location.pathname.split('/').join('')];
		}

		const resizeWindow = () => {
			const newMode = checkScreenMode(window.innerWidth);
			if (newMode !== screenMode) {
				setScreenMode(newMode);
			}
		};

		useEffect(() => {
			resizeWindow();
			window.addEventListener('resize', resizeWindow);
			return () => {
				window.removeEventListener('resize', resizeWindow);
			};
		}, []);
	}

	const DownloadsContainer = withStyles(() => ({
		root: {
			padding: 0,
			margin: 0,
			width: 'max-content',
			'& *': {
				color: '#555',
			},
			'&:hover': {
				'& *': {
					color: fillColor,
				},
				'& div': {
					textDecoration: 'underline',
				},
			},
			'& a': {
				'&:focus': {
					'& *': {
						color: fillColor,
					},
					'& div': {
						textDecoration: 'underline',
					},
				},
			},
		},
	}))(Container);

	function exportToJsonFile(jsonData) {
		if (typeof Blob === 'undefined') {
			return <></>;
		}

		const dataStr = JSON.stringify(jsonData);
		const dataBlob = new Blob([dataStr], { type: 'application/json' });
		const dataUri = URL.createObjectURL(dataBlob);
		const exportFileDefaultName = 'data.json';

		return (
			<DownloadsContainer data-testid="downloads-container">
				<a
					className={downloadsStyles.data}
					href={dataUri}
					download={exportFileDefaultName}>
					<FontAwesomeIcon icon={faDownload} width={16} />
					<div data-testid="downloads-container-text">&nbsp;Download</div>
				</a>
			</DownloadsContainer>
		);
	}

	const align =
		screenMode === ScreenModeEnum.mobile || screenMode === ScreenModeEnum.tablet
			? 'center'
			: 'flex-start';

	return (
		<Grid
			container
			alignItems={align}
			justify={props.justify || 'flex-end'}
			direction="row"
			className={downloadsStyles.download}>
			{props.withFiscalDataLogo && (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://fiscaldata.treasury.gov/">
					<FiscalDataLogo
						data-testid="fiscal-data-logo"
						className={downloadsStyles.logo}
					/>
				</a>
			)}
			{props.date ? (
				<span data-testid="updated-date" className={downloadsStyles.fadedModifier}>
					Updated as of {props.date} /{' '}
				</span>
			) : (
				''
			)}
			{props.isJSON ? (
				exportToJsonFile(props.data)
			) : (
				<DownloadsContainer data-testid="downloads-container">
					<a className={downloadsStyles.data} href={props.href}>
						<FontAwesomeIcon icon={faDownload} width={16} />
						<div data-testid="downloads-container-text">&nbsp;Download</div>
					</a>
				</DownloadsContainer>
			)}
		</Grid>
	);
};

Downloads.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object),
	date: PropTypes.string,
	href: PropTypes.string,
};

export default Downloads;
