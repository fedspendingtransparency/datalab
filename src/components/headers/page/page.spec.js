import React from 'react';
import {getAllByText, render, screen} from '@testing-library/react';
import PageHeader from "./page";

jest.mock('../../glossary/glossary.jsx', () => {
  return <></>;
});

describe('PageHeader', () => {
  // these will need to change when the props used in genericHeader.jsx change
  const headerItems=['Analyses', "America's Finance Guide", 'Resources', 'About' +
      ' Us', 'Glossary'];
  const megamenuItems = [
    {
      analyses: [
        { name: 'COVID-19 Funding', link: '/federal-covid-funding/' },
        { name: 'Federal Account Explorer', link: '/federal-account-explorer/' },
      ]
    },
    {
      ffg: [
        { header: 'Overview', name: "America's Finance Guide", link: '/americas-finance-guide/' },
      ]
    },
    {
      resources: [
        { name: 'Analyst Guide', link: '/analyst-guide/' },
      ]
    },
    {
      about: [
        { name: 'About Us', link: '/about/' },
      ],
    },
    {
      glossary: [
        { name: 'Glossary', link: '#' },
      ],
    },
  ];

  const renderComponent = () =>
    render(
      <PageHeader headerItems={headerItems}
                  megamenuItems={megamenuItems}
      />
    )

  it('shows the five buttons in the nav bar, the scroll to top button and the' +
    ' floating glossary button', () => {
    const { getByText, getAllByText } = renderComponent({isHome: true});
    const buttonList = screen.getAllByRole('button');
    //there are two glossary buttons but with different classNames
    const glossaryButtons = getAllByText('Glossary');

    expect(getByText('Analyses')).toBeTruthy();
    expect(getByText('America\'s Finance Guide')).toBeTruthy();
    expect(getByText('Resources')).toBeTruthy();
    expect(getByText('About Us')).toBeTruthy();
    expect(glossaryButtons.length).toBe(2);
    expect(buttonList[5].className).toContain('glossary');
    expect(buttonList[6].className).toContain('scrollToTopButton');
    expect(buttonList[7].className).toBe('afgFloatingGlossaryButton');
  });

  it('adds classes to three elements to make the nav skinnier when not on home' +
    ' page', () => {
    const { getByTestId } = renderComponent({isHome: false});
    const mainDiv = getByTestId('mainDiv');
    const nav = getByTestId('nav');
    const dropDown = getByTestId('dropDown');
    expect(mainDiv.className).toContain('tight');
    expect(nav.className).toContain('tight');
    expect(dropDown.className).toContain('tight');
    // screen.debug();
  });

  it('shows the burger button when width is < 992', () => {

  });

  it('uses the mobile version of menu when width is < 475', () => {

  });

})