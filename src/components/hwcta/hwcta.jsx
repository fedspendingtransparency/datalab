import React from 'react';
import Grid from '@material-ui/core/Grid';
import Default from '../../components/layouts/default/default';
import hwctaStyles from './hwcta.module.scss';
import styles from '../layouts/tool/tool.module.scss';
import { DsmHeader } from '../headers/headers';
import { Link } from 'gatsby';

function HWCTA(props) {
	const dataSources = props.dataSources || [];
	const methodologies = props.methodologies || [];
	const notes = props.notes || [];
	let dataPage = '';

	if (props.location) {
		dataPage = props.location.pathname;
		if (dataPage) {
			dataPage = dataPage.substring(0, dataPage.lastIndexOf('methodologies'));
		}
	}

	return (
		<Default>
			<DsmHeader />

			<div id={hwctaStyles.hwctaPage}>
				<div className={hwctaStyles.container}>
					<header className={styles.header}>
						<Grid container justify="space-between" spacing={4}>
							{dataPage ? (
								<Grid item xs={12}>
									<Link to={dataPage} className={hwctaStyles.backButtonHeader}>
										Back
									</Link>
								</Grid>
							) : (
								''
							)}
							<Grid item xs={12} className={hwctaStyles.title}>
								{props.title}
							</Grid>
						</Grid>
					</header>
					<h1 className={hwctaStyles.pageHeaderText}>
						Data Sources and Methodologies
					</h1>
					<section>{props.children}</section>
					<div className={hwctaStyles.sourcesSections}>
						{dataSources && dataSources.length ? (
							<section>
								<h2>Data Sources</h2>
								{dataSources.map((item, key) => {
									return item.content ? (
										<div key={key}>{item.content}</div>
									) : (
										<Grid container key={key} className={hwctaStyles.sourcesContainer}>
											<Grid item md={12} lg={6} className={hwctaStyles.sourcesItem}>
												<h3>{item.name}</h3>
											</Grid>
											<Grid item md={12} lg={6} className={hwctaStyles.sourcesItem}>
												{item.sources}
											</Grid>
										</Grid>
									);
								})}
							</section>
						) : (
							''
						)}
						{methodologies && methodologies.length ? (
							<section>
								<h2>Methodologies</h2>
								{methodologies.map((item, key) => {
									return item.content ? (
										<div key={key}>{item.content}</div>
									) : (
										<div id={item.anchor}>
											<div className="anchor-padding" />
											<Grid container key={key} className={hwctaStyles.sourcesContainer}>
												<Grid item md={12} lg={6} className={hwctaStyles.sourcesItem}>
													<h3>{item.name}</h3>
												</Grid>
												<Grid item md={12} lg={6} className={hwctaStyles.sourcesItem}>
													{item.sources}
												</Grid>
											</Grid>
										</div>
									);
								})}
							</section>
						) : (
							''
						)}
						{notes && notes.length ? (
							<section>
								<h2>Notes</h2>
								{notes.map((item, key) => {
									return item.content ? (
										<div key={key}>{item.content}</div>
									) : (
										<Grid container key={key} className={hwctaStyles.sourcesContainer}>
											<Grid item md={12} lg={6} className={hwctaStyles.sourcesItem}>
												<h3>{item.name}</h3>
											</Grid>
											<Grid item md={12} lg={6} className={hwctaStyles.sourcesItem}>
												{item.sources}
											</Grid>
										</Grid>
									);
								})}
							</section>
						) : (
							''
						)}
					</div>
				</div>
				<section
					className={hwctaStyles.footer}
					id={hwctaStyles.backButtonFooterSection}>
					<Grid container>
						{dataPage && !props.noFooterBackButton ? (
							<Grid item xs={12}>
								<Link to={dataPage} className={hwctaStyles.backButtonFooter}>
									Back
								</Link>
							</Grid>
						) : (
							''
						)}
					</Grid>
				</section>
			</div>
		</Default>
	);
}

export default HWCTA;
