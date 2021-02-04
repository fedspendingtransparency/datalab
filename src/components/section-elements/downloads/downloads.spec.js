import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import Downloads from './downloads';

describe('Downloads component', () => {
  const date = 'August 2020';
  const defaultColor = '#555'
  const analysisColor = '#2272CE';

  it('expect the component to have text indicating the last updated date', () => {
    const { getByTestId } = render(<Downloads date={date} />)
    const updatedDate = getByTestId('updated-date');
    expect(updatedDate).toHaveTextContent(`Updated as of ${date} /`);
  });

  it('expect the component not to have the "Updated as of" element if no date is provided', () => {
    const { queryByTestId } = render(<Downloads />)
    expect(queryByTestId('updated-date')).not.toBeInTheDocument();
  })

  it('expect the component to display default color', () => {
    const { getByTestId } = render(<Downloads date={date} />)
    const link = getByTestId('downloads-container').firstChild;
    expect(link).toHaveStyle({ color: defaultColor });
  })

  it('expect the Fiscal Data logo to be there if it is provided', () => {
    const { getByTestId } = render(<Downloads withFiscalDataLogo />)
    const logo = getByTestId('fiscal-data-logo');
    expect(logo).toBeInTheDocument();
  })

});