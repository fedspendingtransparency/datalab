import React from 'react';
import flag from 'src/images/home/new-data-flag.svg';

import featuredAnalysesTitleStyles from './feature-tile.module.scss';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const hiddenDate = '03/04/2021';

const FeatureTile = props => {
	function imageFallback() {
		return (
			<picture>
				<source type="image/webp" srcSet={props.imgSrc} />
				<source type="image/jpeg" srcSet={props.imgSrcFallBack} />
				<img
					className={`${featuredAnalysesTitleStyles.image} lazyload`}
					src={props.imgSrcFallBack}
					alt={props.imgAlt}
					width={props.width}
					height={props.height}
				/>
			</picture>
		);
	}

	function DisplayedImg() {
		if (props && Date.parse(hiddenDate) > Date.now()) {
			return (
				<div>
					<img
						style={{
							position: 'absolute',
							marginTop: '10px',
							marginLeft: '-9px',
							width: 'unset',
						}}
						src={flag}
						role="presentation"
						alt=""
					/>
					{imageFallback()}
				</div>
			);
		} else {
			return <>{imageFallback()}</>;
		}
	}

	return (
		<section className={featuredAnalysesTitleStyles.featured}>
			<a
				href={props.href}
				className="primary__link"
				ga-on="click"
				ga-event-category="Data Lab Home Page"
				ga-event-action={'Clicked ' + props.heading}>
				<h1 className={featuredAnalysesTitleStyles.headingMobile}>
					{props.heading}
				</h1>

				<DisplayedImg />
			</a>

			<div className={featuredAnalysesTitleStyles.content}>
				<a href={props.href}>
					<h2 className={featuredAnalysesTitleStyles.heading}>{props.heading}</h2>

					<p className={featuredAnalysesTitleStyles.text}>{props.body}</p>
				</a>
				<p className={featuredAnalysesTitleStyles.textMobile}>{props.mobileBody}</p>
			</div>
		</section>
	);
};

export default FeatureTile;

FeatureTile.propTypes = {
	href: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	mobileBody: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	isMain: PropTypes.bool,
};
