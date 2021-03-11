import React from 'react';
import { render, screen } from '@testing-library/react';
import PageHeader from "./page";

describe('PageHeader', () => {
  /* needs to receive several props
    headerItems = the names of the five things, array of strings
    megamenuItems = tha content of each of the five things, array of objs, one
     for each of the five things, although there is a sixth thing, express,
      which is not visible yet; the content contains header and link, except ing
       afg which contains it;s own header as well
     also an isHome prop

   */

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
                  isHome={true}
      />
    )

  it('shows the five things in the nav', () => {
    const { getByText } = renderComponent({});

    expect(getByText('Analyses')).toBeTruthy();
  });

  it('shows the logo with tagline when on home page', () => {

  });

  it('shows the logo without tagline if not on home page', () => {

  });

  it('makes the navbar sticky when not on home page', () => {

  });

  it('adds classes to make the nav skinnier when not on home page', () => {
    // styles.skinnyTop
    // styles.tight
    // styles.skinnySub
  });

  it('shows the burger button when width is < 992', () => {

  });

  it('uses the mobile version of menu when width is < 475', () => {

  });

})