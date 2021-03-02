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
      subtext: 'One',
      subblurb: 'Test Section One',
      sectionTeaser: (
        <div>
          Section One Teaser
        </div>
      ),
      blurb: (
        <div>
          Section One Blurb
        </div>
      ),
      tagName: 'one',
      readMoreOnMobile: true,
    }
  ]

  const renderComponent = () =>
    render(
      <Toc sections={testSections}/>
    )

  it('dummy test', () => {
    const {getByText} = renderComponent({testSections});
    expect(getByText('One')).toBeTruthy();

    screen.debug();
  })

  it('creates a div or grid element for each member of the array in the' +
    ' sections prop', () => {
  });

  it('shows a New message if the section has isNew = true', () => {

  });

  it('shows a Coming Soon message is the section has comingSoon = true', () => {

  });

  it('contains a clickable link for the entire section in the toc', () => {

  });

  it('does not display the sub-title at mobile size', () => {

  });
})