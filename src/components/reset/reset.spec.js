import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Reset from './reset';

describe('Reset', () => {
  const color = '#555'
  const legacy = '#2272CE'
  const resetClick = jest.fn()

	it('expect the component to have the default color',  () => {
    const { getByTestId } = render(<Reset />);
    const buttonIcon = getByTestId('reset-button-icon');
    const buttonText = getByTestId('reset-button-text');
    expect(buttonIcon).toHaveStyle({ color });
    expect(buttonText).toHaveStyle({ color });
  });

  it('expect the component to call the reset function when clicked', () => {
    const { getByTestId } = render(<Reset _resetClick={resetClick} />);
    const button = getByTestId('reset-button');

    fireEvent(button, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    expect(resetClick).toHaveBeenCalled();
  })

  it('expect the component to call the reset function when focused and the Enter key is pressed', () => {
    const { getByTestId } = render(<Reset _resetClick={resetClick} />);
    const button = getByTestId('reset-button');

    fireEvent.keyDown(button, {
      key: 'Enter',
      code: 'Enter',
    })

    expect(resetClick).toHaveBeenCalled();
  })

});