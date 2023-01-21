import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';



class Notifications extends Component {

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const style = StyleSheet.create({
      close_btn: {
        border: 0,
        background: 'white',
        position: 'absolute',
        right: '25px',
        top: '45px',
        '@media (max-width: 900px)': {
          top: '20px',
        }
      },
      menuItem: {
        marginRight: '1rem',
        '@media (max-width: 900px)': {
          display: 'none',
        }
      },
      noteBox: {
        border: '1px red dashed',
        padding: '1rem',
        margin: '1rem',
        '@media (max-width: 900px)': {
          border: 'none',
          padding: 0,
          margin: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
        },
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        position: 'absolute',
        padding: 0,
        margin: 0,
        right: 0,
        '@media (max-width: 900px)': {
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
        },
      },
      ul: {
        '@media (max-width: 900px)': {
          margin: 0,
          padding: 0,
        },
      }
    });


    const displayDrawer = this.props.displayDrawer;
    const listNotifications = this.props.listNotifications;
    return (
      <div className={`Notfication-menu ${css(style.wrapper)}`}>
        <div className={`menuItem ${css(style.menuItem)}`}>Your notifications</div>
        {displayDrawer && (
          <div className={`Notifications ${css(style.noteBox)}`}>
            {listNotifications.length ? (
              <ul className={css(style.ul)}>
              {/* enject list of notifications */}
              {this.props.listNotifications.map((note) =>
                note.html ?
                  <NotificationItem key={note.id} id={note.id} type={note.type} html={note.html} />
                : <NotificationItem key={note.id} id={note.id} type={note.type} value={note.value} />
              )}
            </ul>
            ) : (
              <p>No new notification for now</p>
            )}
            {/* {listNotifications ? (
              listNotifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  type={notif.type}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={() => this.markAsRead(notif.id)}
                />
              ))
            ) : (
              <tr>No course available yet</tr>
            )} */}

            <button
              style={{
                border: 0,
                background: 'white',
                position: 'absolute',
                right: '35px',
                top: '50px',
              }}
              aria-label='Close'
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={closeIcon} height='15px' width='15' alt='close icon' />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};



export default Notifications;
