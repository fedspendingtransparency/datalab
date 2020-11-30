import React from 'react';
import renderer from 'react-test-renderer';
import MoreAnalyses from './more-analyses';
import moreAnalysesStyles from './more-analyses.module.scss';

describe('More Analyses', () => {
	const analysesHeading = 'More Analyses';
	let instance;
	let component;

	// we need to go to a route before we create the component
	// as `showAnything` wont run and our images and links wont render.
	beforeAll(() => {
		window.history.pushState(
			{},
			'Federal Account Explorer',
			'/federal-account-explorer'
		);
		component = renderer.create(<MoreAnalyses />);
		instance = component.root;
	});

	xit('expect heading to be in place', () => {
		expect(
			instance.findByProps({ className: moreAnalysesStyles.heading }).children[0]
		).toBe(analysesHeading);
	});

	xit('expect four images to be rendered', () => {
		const images = instance.findAllByType('img');
		expect(images.length).toBe(4);
	});

	xit('expect four links to be rendered', () => {
		const links = instance.findAllByType('a');
		expect(links.length).toBe(4);
	});

	xit('expect title to exist with className of title for $legacyBlue CSS', () => {
		let titles = instance.findAllByProps({ className: 'title' });
		expect(titles[0].props.className).toBe('title');
	});

	xit('expect four links and four images to exist on mobile/tablet', () => {
		renderer.act(() => {
			global.window.innerWidth = 767;
			component = renderer.create(<MoreAnalyses />);
			global.dispatchEvent(new Event('resize'));
		});
		const links = instance.findAllByType('a');
		const images = instance.findAllByType('img');
		expect(links.length).toBe(4);
		expect(images.length).toBe(4);
	});
});
