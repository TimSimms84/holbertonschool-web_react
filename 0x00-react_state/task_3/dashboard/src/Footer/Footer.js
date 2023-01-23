import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { css, StyleSheet } from 'aphrodite';
import AppContext from '../App/AppContext';

export default function Footer() {
  const { user } = React.useContext(AppContext);

  const style = StyleSheet.create({
    footer: {
      textAlign: 'center',
      borderTop: 'solid red',
    },
  });

  return (
    <div className={`App-footer ${css(style.footer)}`}>
      <p>Copyright {getFullYear()} - {getFooterCopy(0)}</p>
      {
        user.isLoggedIn ?
          <p>
            <a href='#'>Contact Us</a>
          </p>
        : null
      }
    </div>
  )
}
