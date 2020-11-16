import React from 'react';
import pageFooterStyles from './page.module.scss';
import { Link } from 'gatsby';

import { Grid } from '@material-ui/core';
import DataLab from '../logos/datalab';
import Github from '../logos/github';
import Dataworld from '../logos/dataworld';
import Twitter from '../logos/twitter';
import Facebook from '../logos/facebook';
import LinkedIn from '../logos/linkedin';

export default class PageFooter extends React.Component {
	constructor(props) {
		super(props);
	}

	calculateLogoWidth = () => {
		let width = 200;
		if (typeof window !== 'undefined') {
			width = '15%';
		}
		return width;
	};

	render = () => (
		<div className={pageFooterStyles.pageFooter}>
			<Grid container className={pageFooterStyles.content}>
				<Grid item xs={12} lg={3} className={pageFooterStyles.logo}>
					<Link to="/">
						<DataLab fillColor="#666" />
					</Link>
				</Grid>
				<Grid item xs={12} lg={2} className={pageFooterStyles.ourSites}>
					<div>
						<div className={pageFooterStyles.title}>About</div>
						<a target="_blank" rel="noopener noreferrer" href="/about">
							About Data Lab
						</a>
					</div>
				</Grid>
				<Grid item xs={12} lg={2} className={pageFooterStyles.ourSites}>
					<div>
						<div className={pageFooterStyles.title}>Our Sites</div>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.usaspending.gov/#/">
							USAspending
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://fiscaldata.treasury.gov/">
							Fiscal Data
						</a>
					</div>
				</Grid>
				<Grid item xs={12} lg={2} className={pageFooterStyles.ourSites}>
					<div>
						<div className={pageFooterStyles.title}>Help</div>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="mailto: USAspending.Help@Fiscal.Treasury.gov?subject=Data Lab - Contact Us">
							Contact Us
						</a>
					</div>
				</Grid>

				<Grid item xs={12} lg={3} className={pageFooterStyles.social}>
					<div className={pageFooterStyles.title}>Join the Conversation</div>
					<p>
						Visit our{' '}
						<a
							href="https://usaspending-help.zendesk.com/hc/en-us/community/topics"
							target="_blank"
							rel="noopener noreferrer">
							Community Page today.
						</a>
					</p>
					<div className={pageFooterStyles.contents}>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/fedspendingtransparency"
							aria-label="Github">
							<Github />
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://data.world/usaspending"
							aria-label="Dataworld">
							<Dataworld />
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://twitter.com/usaspending"
							aria-label="Twitter">
							<Twitter />
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.facebook.com/fiscalservice/"
							aria-label="Facebook">
							<Facebook />
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/company/united-states-department-of-the-treasury-bureau-of-public-debt/"
							aria-label="LinkedIn">
							<LinkedIn />
						</a>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
