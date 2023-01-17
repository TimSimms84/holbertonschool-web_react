import React, { Component } from 'react';
import PropTypes from 'prop-types';

const WithLogging = (WrappedComponent) => {
  const name = WrappedComponent.displayName || WrappedComponent.name;

  class Logs extends Component {
    constructor(props) {
      super(props);
      this.displayName = `WithLogging(${name})`;
    }

    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return Logs;
};

WithLogging.propTypes = {
  WrappedComponent: PropTypes.elementType,
};

WithLogging.defaultProps = {
  WrappedComponent: 'Component',
};


export default WithLogging;
