import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
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
})

describe('AfgNav tablet and mobile', () => {
  let instance;
  let component;

  // behavior is the same at any size < 992
  beforeAll(() => {
    global.window.innerWidth = 400;
    component = renderer.create(<AfgNav />);
    instance = component.root;
  });

  it('sets the Overview section to its active class and the four chapters are not visible by default', () => {
    const overview = instance.findByProps({'data-testid': 'overview'});
    const revenue = instance.findByProps({'data-testid': 'revenue-mobile'});
    expect(overview.props.className).toContain('activeSection');
    expect(revenue.props.className).toContain('closed');
  });

  it('when the menu button is clicked, draws the four chapters', () => {
    const menuButton = instance.findByType('button');
    renderer.act(() => {
      menuButton.props.onClick();
    });
    const revenue = instance.findByProps({'data-testid': 'revenue-mobile'});
    expect(revenue.props.className).not.toContain('closed');
  });

  it('shows the links to the subchapters when a chapter is chosen', () => {
    const deficit = instance.findByProps({'data-testid': 'deficit-mobile'});
    // the deficit chapter is open (they all are)
    expect(deficit.props.className).not.toContain('closed');
    const deficitSubPagesUl = instance.findByProps({'data-testid': 'deficit-subPages'});
    // subPages is currently closed
    expect(deficitSubPagesUl.props.className).toContain('closed');

    const mockEvent = {
      key: '',
      target: {
        textContent: 'Deficit'
      }
    }

    // click the Deficit chapter
    renderer.act(() => {
      deficit.props.children[1].props.onClick(mockEvent);
    });
    // subPages is open
    expect(deficitSubPagesUl.props.className).not.toContain('closed');
    // links are present
    const links = deficitSubPagesUl.findAllByType('a');
    expect(links.length).toBe(3);
    // and this is an unneeded comment so i can commit after merging dev into this branch
  });
})
