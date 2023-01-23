import React from 'react';
import Footer from './Footer';
import { shallow, mount } from 'enzyme';
import chai, { assert } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

chai.use(require('chai-string'));

describe('Footer Renders', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });


  it('without crashing', () => {
    const footer = shallow(<Footer />);
    assert.equal(footer.length, 1);
  });

  it('"Copyright" within the p element', () => {
    const footer = shallow(<Footer />);
    assert.startsWith(footer.find('p').text(), 'Copyright');
  });

  it('without a Contact Us link when user is not logged in', () => {
    const footer = shallow(<Footer />);
    assert.equal(footer.find('a').length, 0);
  });

  it('with a "Contact Us" link with correct href when user is logged in', () => {
    const loginFooter = mount(
      <AppContext.Provider value={{
        user: {
          isLoggedIn: true,
        }
      }}>
        <Footer />
      </AppContext.Provider>
    );
    assert.equal(loginFooter.find('a').length, 1);
    assert.equal(loginFooter.find('a').text(), 'Contact Us');
  });
});
