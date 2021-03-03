import React from 'react';
import renderer from 'react-test-renderer';
import Toc from "./toc";
import {render, getByText, screen} from "@testing-library/react";

describe('Toc', () => {
  const testSections = [
    {
      section: 'One',
      anchor: 'one',
      number: '01',
      subblurb: 'Test Section One',
    },
    {
      section: 'Two',
      anchor: 'two',
      number: '02',
      subblurb: 'Test Section Two',
      isNew: true
    },
    {
      section: 'Three',
      anchor: 'three',
      number: '03',
      subblurb: 'Test Section Three',
      comingSoon: true
    },
  ]

  const renderComponent = () =>
    render(
      <Toc sections={testSections}/>
    )

  it('creates a div and grid element for each member of the array in the' +
    ' sections prop', () => {
    const {getByText} = renderComponent({testSections});
    expect(getByText('One')).toBeTruthy();
    expect(getByText('Two')).toBeTruthy();
    expect(getByText('Three')).toBeTruthy();
  });

  it('shows a "New" message if the section has prop isNew', () => {
    const {getByText} = renderComponent({testSections});
    expect(getByText('New')).toBeTruthy();
  });

  it('shows a "Coming Soon!" message if the section has prop comingSoon', () => {
    const {getByText} = renderComponent({testSections});
    expect(getByText('Coming Soon!')).toBeTruthy();
  });

  it('contains a clickable link for each active section in the toc', () => {
    const {getByText} = renderComponent({testSections});
    const three = getByText('Three');
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '#section-one');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', '#section-two');
    // but not for coming soon section
    expect(three).not.toHaveAttribute('href', '#section-three');
  });

})

describe('Toc at mobile size', () => {
  const testSections = [
    {
      section: 'One',
      anchor: 'one',
      number: '01',
      subblurb: 'Test Section One',
    },
    {
      section: 'Two',
      anchor: 'two',
      number: '02',
      subblurb: 'Test Section Two',
      isNew: true
    },
    {
      section: 'Three',
      anchor: 'three',
      number: '03',
      subblurb: 'Test Section Three',
      comingSoon: true
    },
  ]

  let instance;
  let component;

  // mobile is < 768
  beforeAll(() => {
    global.window.innerWidth = 400;
    component = renderer.create(<Toc sections={testSections}/>);
    instance = component.root;
  });

  it('does not display the subBlurb for any section', () => {
    // the divs showing the section names are there
    const sectionDiv = instance.findAllByProps({className: 'section'});
    expect(sectionDiv).toBeDefined();
    // the divs showing the subBlurbs are not
    const subBlurbDiv = instance.findAllByProps({className: 'subblurb'});
    expect(subBlurbDiv).toStrictEqual([]);
  });
})