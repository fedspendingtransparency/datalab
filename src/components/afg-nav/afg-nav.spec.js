import React from 'react';
import renderer from 'react-test-renderer';
import AfgNav from './afg-nav';
import styles from './afg-nav.module.scss';

describe('AfgNav', () => {
  let component = renderer.create();
  renderer.act(() => {
    component = renderer.create(<AfgNav />);
  });

  const instance = component.root;

  // it('expect the snapshot to match', () => {
  //   expect(component.toJSON()).toMatchSnapshot();
  // });

  it('expect the 5 chevrons to be rendered', () => {
    console.log(instance.findByProps({ className: styles.chapterNavPrimaryList }));
    // console.log(instance.findByProps({ className: styles.chapterNavOverview }).children[0]);
    // console.log(instance.findByProps({ className: styles.chapterNavRevenue }).children[0]);
    // console.log(instance.findByProps({ className: styles.chapterNavSpending }).children[0]);
    // console.log(instance.findByProps({ className: styles.chapterNavDeficit }).children[0]);
    // console.log(instance.findByProps({ className: styles.chapterNavDebt }).children[0]);
  })
})