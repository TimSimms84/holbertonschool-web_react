import App from './App';
import { shallow } from 'enzyme';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
  it('Tests that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // should contain the Notifications component
  it('Tests that App renders a Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });

  // should contain the Header component
  it('Tests that App renders a Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  // should contain the Login component
  it('Tests that App renders a Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login').exists()).toBe(true);
  });

  // should contain the Footer component
  it('Tests that App renders a Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').exists()).toBe(true);
  });
  // check that CourseList is not displayed when isLoggedIn is false
  it('Tests that App does not render a CourseList component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find('CourseList').exists()).toBe(false);
  });
  it('test that App renders with Login component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Login);
    expect(element.exists()).toBe(false);
  });

  it('test that App renders with Notifications component', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={true} />);
    const element = wrapper.find(Notifications);
    expect(element.exists()).toBe(true);
  });


  it('test that App renders with Footer component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Footer);
    expect(element.exists()).toBe(true);
  });

  it('test that App renders with CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={true} />);
    const element = wrapper.find(CourseList);
    expect(element.exists()).toBe(false);
  });
});

describe('<App /> with isLoggedIn', () => {
  // Login component is not displayed when isLoggedIn is true
  it('Tests that App does not render a Login component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login').exists()).toBe(false);
  });
  // CourseList component is displayed when isLoggedIn is true
  it('Tests that App renders a CourseList component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList').exists()).toBe(true);
  });
  it('test that App renders with Header component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Header);
    expect(element.exists()).toBe(true);
  });
  it('test that App renders with Login component', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={true} />);
    const element = wrapper.find(Login);
    expect(element.exists()).toBe(true);
  });
  
  it('test that App renders with Notifications component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Notifications);
    expect(element.exists()).toBe(true);
  });
  it('test that App renders with CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(CourseList);
    expect(element.exists()).toBe(true);
  });

});
