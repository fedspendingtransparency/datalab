import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Downloads from './downloads';
import { legacyBlue } from 'src/styles/variables.scss'

describe('Downloads component', () => {
  const date = 'August 2020';
  const color = legacyBlue;
  
  it('expect the component to have text indicating the last updated date', () => {
    const { getByTestId } = render(<Downloads date={date} />)
    const updatedDate = getByTestId('updated-date');
    expect(updatedDate).toHaveTextContent(`Updated as of ${date}`);
  });
  
  it('expect the component to display unique analysis color on hover', () => {
    const { getByTestId } = render(<Downloads date={date} />)
    const downloadsContainer = getByTestId('downloads-container');
    expect(downloadsContainer).toHaveStyle({ color: '#555' });
    fireEvent(downloadsContainer, new MouseEvent('mouseOver'));
    expect(downloadsContainer).toHaveStyle({ color });
  })

  it('expect the text to be underlined on hover', () => {
    const { getByTestId } = render(<Downloads date={date} />)
    const downloadsContainer = getByTestId('downloads-container');
    const downloadsContainerText = getByTestId('downloads-container-text');
    fireEvent(downloadsContainer, new MouseEvent('mouseOver'));
    expect(downloadsContainerText).toHaveStyle('text-decoration: underline');
  })

});