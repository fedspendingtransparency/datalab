import React from 'react';
import { render } from '@testing-library/react';
import Reset from './reset';

describe('Reset', () => {
  const color = '#555'
  
	it('expect the component to have the default color',  () => {
    const { getByTestId } = render(<Reset />);
    const buttonIcon = getByTestId('reset-button-icon');
    const buttonText = getByTestId('reset-button-text');
    expect(buttonIcon).toHaveStyle({ color: '#555' })
    expect(buttonText).toHaveStyle({ color: '#555' })
	});

});