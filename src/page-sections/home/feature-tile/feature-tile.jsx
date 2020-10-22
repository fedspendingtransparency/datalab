import React from "react"
import { Link } from "gatsby"
import flag from "src/images/home/new-data-flag.svg"

import featuredAnalysesTitleStyles from "./feature-tile.module.scss"
import PropTypes from "prop-types"

const hiddenDate = "12/06/2020"

const FeatureTile = props => {
	function DisplayedImg() {
		if (props && props.isMain) {
			if (Date.parse(hiddenDate) > Date.now()) {
				return (
					<div>
						<img
							style={{
								position: "absolute",
								marginTop: "10px",
								marginLeft: "-9px",
							}}
							src={flag}
							role="presentation"
							alt=""
						/>
						<img
							className={`${featuredAnalysesTitleStyles.image} lazyload`}
							src={props.imgSrc}
							alt={props.imgAlt}
						/>
					</div>
				)
			} else {
				return (
					<img
						className={`${featuredAnalysesTitleStyles.image} lazyload`}
						src={props.imgSrc}
						alt={props.imgAlt}
					/>
				)
			}
		} else {
			return (
				<img
					className={`${featuredAnalysesTitleStyles.image}`}
					src={props.imgSrc}
					alt={props.imgAlt}
				/>
			)
		}
	}

	return (
		<section className={featuredAnalysesTitleStyles.featured}>
			<Link
				to={props.href}
				className="primary__link"
				ga-on="click"
				ga-event-category="Data Lab Home Page"
				ga-event-action={"Clicked " + props.heading}>
				<h1 className={featuredAnalysesTitleStyles.headingMobile}>
					{props.heading}
				</h1>

				<DisplayedImg />
			</Link>

			<div className={featuredAnalysesTitleStyles.content}>
				<h2 className={featuredAnalysesTitleStyles.heading}>{props.heading}</h2>

				<p className={featuredAnalysesTitleStyles.text}>{props.body}</p>

				<p className={featuredAnalysesTitleStyles.textMobile}>
					{props.mobileBody}
				</p>
			</div>
		</section>
	)
}

export default FeatureTile

FeatureTile.propTypes = {
	href: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	mobileBody: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	isMain: PropTypes.bool,
}
