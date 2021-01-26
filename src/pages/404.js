import React from 'react';
import './404.scss';

import HeaderOnly from '../components/layouts/header-only/header-only';
import SEO from '../components/seo';
import { Link } from 'gatsby';


const NotFoundPage = () => {
	return (
		<HeaderOnly _containerClass='four-oh-four' _headerClass='four-oh-four__header'>
			<SEO
				title='404: Not found'
				description="The Data Lab is a U.S. Treasury Department website of topic-based analyses and visualizations to help the public understand government spending." />
			<div id='four-oh-four'>
				<div className='four-container'>
					<h1>Oops!</h1>
					<h4>Looks like you got lost in the data.
						<div><span>It happens.</span> Find your way back.</div>
					</h4>
					<div id='btn-container'>
						<div id='back-btn'><Link to={'/'}>BACK</Link></div>
						<div id='home-btn'><Link to={'/'}>HOME</Link></div>
					</div>
				</div>
			</div>
		</HeaderOnly>
	)
};

export default NotFoundPage;
