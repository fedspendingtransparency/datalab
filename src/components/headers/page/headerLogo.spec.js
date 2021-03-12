import React from 'react';
import {render, screen} from '@testing-library/react';
import HeaderLogo from "./headerLogo";

jest.mock('../../glossary/glossary.jsx', () => {
  return <></>;
});

describe('HeaderLogo', () => {
  it('shows the Tagline svg when given no props', () => {
    const {getByTestId, queryByTestId} = render(<HeaderLogo />);
    expect(getByTestId('tagLine')).toBeDefined();
    expect(queryByTestId('tagLineMobile')).toBeNull();
    expect(queryByTestId('noTagLine')).toBeNull();
  });

  it('it shows the NoTagLine svg if given the isSticky prop', () => {
    const {getByTestId, queryByTestId} = render(<HeaderLogo isSticky={true} />);
    expect(getByTestId('noTagLine')).toBeDefined();
    expect(queryByTestId('tagLineMobile')).toBeNull();
    expect(queryByTestId('tagLine')).toBeNull();
  });

  it('shows the TagLineMobile svg if given the isMobileTag prop', () => {
    const {getByTestId, queryByTestId} = render(<HeaderLogo isMobileTag={true} />);
    expect(getByTestId('taglineMobile')).toBeDefined();
    expect(queryByTestId('noTagLine')).toBeNull();
    expect(queryByTestId('tagLine')).toBeNull();
  });
})