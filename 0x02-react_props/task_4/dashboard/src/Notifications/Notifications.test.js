import Notifications from './Notifications';
import { shallow } from 'enzyme';
import React from 'react';

describe('notification', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  // renders NotificationItem component for each element in the list
  it('renders NotificationItem component for each element in the list', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').length).toBe(3);
  });

  it('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });

  // renders first element
  it('renders first element', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').first().html()).toBe(
      '<li data-priority="default">New course available</li>'
    );
  });
  // check that the menu item is being displayed when displayDrawer is false
  it('check that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });
  // check that the div.Notifications is not being displayed when displayDrawer is false
  it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  // check that the menu item is being displayed when displayDrawer is true
  it('check that the menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  // check that the div.Notifications is being displayed when displayDrawer is true
  it('check that the div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });

});
