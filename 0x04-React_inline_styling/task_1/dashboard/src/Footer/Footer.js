import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <React.Fragment>
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </React.Fragment>
  );
}

export default Footer;
