import React from 'react';
import { render } from '@testing-library/react';
import AfgNav from './afg-nav';

describe('AfgNav', () => {
  it('expect the 5 chevrons to be rendered', () => {
    const { getByText } = render(<AfgNav />);

    expect(getByText('Overview')).toBeTruthy();
    expect(getByText('Revenue')).toBeTruthy();
    expect(getByText('Spending')).toBeTruthy();
    expect(getByText('Deficit')).toBeTruthy();
    expect(getByText('Debt')).toBeTruthy();
  });

  it('expect there to be an extension on the overview section with no active section', () => {
    const { getByTestId, queryByTestId } = render(<AfgNav />);
    expect(getByTestId('overview-extension')).toBeTruthy();
    expect(queryByTestId('revenue-extension')).toBeNull();
  });

  it('expect there to be an extension on the active section', () => {
    const { getByTestId, queryByTestId } = render(<AfgNav chapter="revenue" />);
    expect(getByTestId('revenue-extension')).toBeTruthy();
    expect(queryByTestId('overview-extension')).toBeNull();
  });

  it('expect all sections to be closed on the overview page', () => {
    const { getByTestId } = render(<AfgNav />);
    expect(getByTestId('revenue-subpages')).toHaveStyle({ width: 0 });
  });

  it('expect only the active section to be open on a specific page', () => {
    const { getByTestId } = render(<AfgNav chapter="revenue" />);
    expect(getByTestId('revenue-subpages')).toHaveStyle({ width: '551px' }); // width specified when sections are created
    expect(getByTestId('spending-subpages')).toHaveStyle({ width: 0 });
  });
});
