import { React, Component } from 'react';
import PropTypes from 'prop-types';
import './BodySection.css';


class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
};

BodySectionWithMarginBottom.defaultProps = {
  title: '',
};

export default BodySectionWithMarginBottom;
