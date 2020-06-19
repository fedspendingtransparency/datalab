import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import styleVariables from '../../styles/variables.scss';
import styles from './toc.module.scss';

const inlineStyles = {
	legacy: styleVariables.legacyBlue,
	'colleges-and-universities': styleVariables.cuRed,
	'federal-covid-spending': styleVariables.covidColor,
	'homelessness-analysis': styleVariables.homelessAnalysisPurple,
};

let selectedStyle = inlineStyles.legacy;

if (typeof window !== 'undefined') {
	const pathname = window.location.pathname.replace(/\//g, '');
	const index = Object.keys(inlineStyles).indexOf(pathname);

	if (index > -1) {
		selectedStyle = inlineStyles[pathname];
	}
}

const Anchor = styled.a`
  &:hover {
    color: ${selectedStyle};
    * {
      color: ${selectedStyle} !important;
      text-decoration: underline;
    }
  }
`;

const SectionName = styled.span`
  color: ${selectedStyle};
`;

const Toc = (props) => (
	<section id={styles.TOC}>
		<Grid container className={styles.container}>
			{props.sections.map((item, key) => (
				<Grid item key={key} className={`${styles.tile}`} xs={12} md={6} lg={3}>
					<Anchor href={`#section-${item.anchor}`} className="hover-color">
						<Grid container justify="center" className={styles.content}>
							<Grid item className={styles.a}>
								<Grid container>
									<Grid item xs={2} lg={3} className={`${styles.number}`}>
										{item.number}
									</Grid>
									<Grid item className={`${styles.section}`}>
										<SectionName>{item.section}</SectionName>
									</Grid>
								</Grid>
								<Grid item>
									<div className={`${styles.subblurb}`}>{item.subblurb}</div>
									<div className={`${styles.blurb}`}>{item.blurb}</div>
								</Grid>

							</Grid>
						</Grid>
					</Anchor>
				</Grid>
			))}
		</Grid>
	</section>
);

Toc.propTypes = {
	sections: PropTypes.arrayOf(PropTypes.object),
};

// const TocDownloads = Radium(Toc);

export default Toc;
