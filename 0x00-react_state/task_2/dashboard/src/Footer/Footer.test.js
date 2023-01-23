import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Footer', () => {
  it('Footer renders without crashing', () => {
    shallow(<Footer />);
  });

  it('Footer renders copyright', () => {
    const wrapper = shallow(<Footer />);
    assert.match(wrapper.text(), /Copyright/);
  });
});
