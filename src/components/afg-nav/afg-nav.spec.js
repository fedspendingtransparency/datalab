import React from 'react';
import { render, screen } from '@testing-library/react';
import AfgNav from './afg-nav';

describe('AfgNav', () => {
  const renderComponent = ({chapter}) =>
    render(
      <AfgNav chapter={chapter}/>
    )

  it('expects the 5 chevrons to be rendered', () => {
    const { getByText } = renderComponent({});

    expect(getByText('Overview')).toBeTruthy();
    expect(getByText('Revenue')).toBeTruthy();
    expect(getByText('Spending')).toBeTruthy();
    expect(getByText('Deficit')).toBeTruthy();
    expect(getByText('Debt')).toBeTruthy();
  });

  it('expects there to be an extension and link on the overview section and no other sections to be active', () => {
    const { getByTestId, queryByTestId } = renderComponent({});
    expect(getByTestId('overview-extension')).toBeTruthy();
    expect(screen.getByRole('link', {name: "Overview"})).toBeDefined();
    expect(queryByTestId('revenue-extension')).toBeNull();
  });

  it('expects all sections to be closed on the overview page', () => {
    const { getByTestId } = renderComponent({});
    expect(getByTestId('revenue-subpages')).toHaveStyle({ width: 0 });
    expect(getByTestId('spending-subpages')).toHaveStyle({ width: 0 });
    expect(getByTestId('deficit-subpages')).toHaveStyle({ width: 0 });
    expect(getByTestId('debt-subpages')).toHaveStyle({ width: 0 });
  });

  it('expects there to be an extension and links on the active section', () => {
    const { getByTestId, queryByTestId } = renderComponent({chapter: "revenue"});
    expect(getByTestId('revenue-extension')).toBeTruthy();
    expect(queryByTestId('overview-extension')).toBeNull();
    //there are multiples of these in the DOM right now for some reason, so have to use 'getAll...'
    expect(screen.getAllByRole('link', {name: "Revenue and GDP"})).toBeDefined();
    expect(screen.getAllByRole('link', {name: "Revenue Categories"})).toBeDefined();
    expect(screen.getAllByRole('link', {name: "Federal Revenue Trends"})).toBeDefined();
    expect(screen.getAllByRole('link', {name: "Country Comparison"})).toBeDefined();
  });

  it('expects only the active section to be open on a specific page', () => {
    const { getByTestId } = renderComponent({chapter: "revenue"});
    expect(getByTestId('revenue-subpages')).toHaveStyle({ width: '551px' }); // width specified when sections are created
    expect(getByTestId('spending-subpages')).toHaveStyle({ width: 0 });
    expect(getByTestId('deficit-subpages')).toHaveStyle({ width: 0 });
    expect(getByTestId('debt-subpages')).toHaveStyle({ width: 0 });
  });
});
