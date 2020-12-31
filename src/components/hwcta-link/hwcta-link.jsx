import React from 'react';
import PropTypes from 'prop-types';
import hwctaLinkStyles from './hwcta-link.module.scss';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/styles/withStyles';
import Sources from '../logos/sources';
import { Link } from 'gatsby';
import { legacy } from '../../styles/variables.scss';

const HWCTALink = props => {
	const LinkWrapper = withStyles(() => ({
		root: {
			'&:hover': {
				'& .hover-color': {
					color: props.fillColor,
				},
			},
			'& a': {
				'&:focus': {
					'& .hover-color': {
						color: props.fillColor,
					},
				},
			},
		},
	}))(Container);

	return (
		<div className={hwctaLinkStyles.hwcta + ' ' + props._mainClass}>
			<LinkWrapper>
				<Link
					data-testid="hwctaLink"
					to={`${props.url.replace(/\/\//g, '/')}/`}
					style={{ textDecorationColor: props.fillColor }}>
					<Grid container alignItems="center">
						<Grid item className={hwctaLinkStyles.icon}>
							<Sources data-testid="dsmSvg" fillColor={props.fillColor} />
						</Grid>
						<Grid item data-testid="dsmText">
							Data Sources and{' '}
							<Hidden mdUp>
								<br />
							</Hidden>
							Methodologies
						</Grid>
						<Grid item className={hwctaLinkStyles.arrow}>
							<FontAwesomeIcon
								data-testid="dsmArrow"
								icon={faChevronRight}
								width={20}
								color={props.fillColor}
							/>
						</Grid>
					</Grid>
				</Link>
			</LinkWrapper>
		</div>
	);
};

HWCTALink.propTypes = {
	fillColor: PropTypes.string,
};

HWCTALink.defaultProps = {
	fillColor: legacy,
};

export default HWCTALink;
