import React from 'react';
import { act, create } from 'react-test-renderer';
import Share from './share';
import shareStyles from './share.module.scss';

describe('Share', () => {
	const title = 'Placeholder Title';
	const text = 'Placeholder Text';
	const location = {
		pathname: '/placeholder/location/',
		href: '/placeholder/location/'
	}

	let component = create();
	act(() => {
		component = create(
      <Share
        title={title}
        text={text}
        location={location}
      />
    );
	});

	const instance = component.root;

	window.open = jest.fn();
	const url = encodeURIComponent(instance.props.location.pathname);

	it('expect the snapshot to match', () => {
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('expects the dropdown to show class when the button is clicked', async () => {
		const button = instance.findAllByType('button')[0];
		const popup = instance.findByProps({ id: 'sharePopup' });
		expect(popup.props.className).not.toContain(shareStyles.show);

		act(() => {
			button.props.onClick();
		});

		expect(popup.props.className).toContain(shareStyles.show);
	});

	it('expects the Facebook button to be open the Facebook share window with the proper url', () => {
		const button = instance.findAllByType('button')[0];
		act(() => {
			button.props.onClick();
		});

		const facebookButton = instance.findByProps({ id: 'facebook-button' });

		act(() => {
			facebookButton.props.onClick({
				target: {
					id: 'facebook-button'
				}
			});
		});

		expect(window.open).toHaveBeenCalledWith(
			`https://www.facebook.com/sharer/sharer.php?u=${url}`,
			'_blank',
			'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'
		);
	})

	it('expects the Twitter button to be open the Twitter share window with the proper url', () => {
		const button = instance.findAllByType('button')[0];
		act(() => {
			button.props.onClick();
		});

		const twitterButton = instance.findByProps({ id: 'twitter-button' });

		act(() => {
			twitterButton.props.onClick({
				target: {
					id: 'twitter-button'
				}
			});
		});

		const twitterText = encodeURIComponent(instance.props.twitter || instance.props.text || instance.title);

		expect(window.open).toHaveBeenCalledWith(
			`https://twitter.com/intent/tweet?text=${twitterText}&url=${url}`,
			'_blank',
			'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'
		);
	})

	it('expects the Reddit button to be open the Reddit share window with the proper url', () => {
		const button = instance.findAllByType('button')[0];
		act(() => {
			button.props.onClick();
		});

		const redditButton = instance.findByProps({ id: 'reddit-button' });

		act(() => {
			redditButton.props.onClick({
				target: {
					id: 'reddit-button'
				}
			});
		});

		expect(window.open).toHaveBeenCalledWith(
			`http://www.reddit.com/submit?url=${url}`,
			'_blank',
			'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'
		);
	})

	it('expects the LinkedIn button to be open the LinkedIn share window with the proper url', () => {
		const button = instance.findAllByType('button')[0];
		act(() => {
			button.props.onClick();
		});
		const linkedinButton = instance.findByProps({ id: 'linkedin-button' });

		act(() => {
			linkedinButton.props.onClick({
				target: {
					id: 'linkedin-button'
				}
			});
		});

		expect(window.open).toHaveBeenCalledWith(
			`https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
			'_blank',
			'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'
		);
	})
});