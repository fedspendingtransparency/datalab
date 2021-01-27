import React from 'react';
import siteFooterStyles from './site.module.scss';
import Hidden from '@material-ui/core/Hidden';

const SiteFooter = () => {
	return (
		<footer className={siteFooterStyles.siteFooter}>
			<div className={siteFooterStyles.content}>
				<Hidden smDown>
					<div>
						&copy;&nbsp;2020&nbsp;USAspending.gov
						<Hidden lgUp>
							<br />
						</Hidden>
						<Hidden mdDown>&nbsp;|&nbsp;</Hidden>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.usaspending.gov/#/about/accessibility">
							Accessibility
						</a>{' '}
						|&nbsp;
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.usaspending.gov/#/about/privacy">
							Privacy&nbsp;Policy
						</a>{' '}
						|&nbsp;
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.usaspending.gov/#/about/foia">
							Freedom&nbsp;of&nbsp;Information&nbsp;Act
						</a>
					</div>
					<div className={siteFooterStyles.note}>
						<b>NOTE:</b>{' '}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://beta.usaspending.gov/#/db_info">
							You must click here for very important D&B information.
						</a>
					</div>
				</Hidden>
				<Hidden mdUp>
					&copy;&nbsp;2020&nbsp;USAspending.gov
					<br />
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.usaspending.gov/#/about/accessibility">
						Accessibility
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.usaspending.gov/#/about/privacy">
						Privacy&nbsp;Policy
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.usaspending.gov/#/about/foia">
						Freedom&nbsp;of&nbsp;Information&nbsp;Act
					</a>
					<br />
					<div className={siteFooterStyles.note}>
						<b>NOTE:</b>{' '}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://beta.usaspending.gov/#/db_info">
							You must click here for very important D&B information.
						</a>
					</div>
				</Hidden>
			</div>
		</footer>
	);
};

export default SiteFooter;
