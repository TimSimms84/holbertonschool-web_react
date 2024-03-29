import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    margin: '1rem',
  },
  mainContent: {
    borderTop: '3px #e0354b solid',
    paddingLeft: '4rem',
    '@media (min-width: 900px)': {
      paddingLeft: '0',
    },
  },
  footer: {
    borderTop: '3px #e0354b solid',
    position: 'absolute',
    bottom: 0,
    width: '97.5%',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.state = {
      displayDrawer: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      const { logOut } = this.props;
      logOut();
    }
  };

  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: '1', name: 'ES6', credit: 60 },
      { id: '2', name: 'Webpack', credit: 20 },
      { id: '3', name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    const handleHideDrawer = this.handleHideDrawer;
    const handleDisplayDrawer = this.handleDisplayDrawer;
    const { displayDrawer } = this.state;

    return (
      <div className={css(styles.body)}>
        <Notifications
          handleHideDrawer={handleHideDrawer}
          handleDisplayDrawer={handleDisplayDrawer}
          displayDrawer={displayDrawer}
          listNotifications={listNotifications}
        />
        <Header />
        <main className={css(styles.mainContent)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi repudiandae ullam modi consequatur est sint unde aspernatur voluptas? Odit impedit libero ad earum quas error numquam ea facere nobis?

            </p>
          </BodySection>
        </main>
        <footer className={css(styles.footer)}>
          <Footer />
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => console.log('No logOut function passed to App'),
};

export default App;
