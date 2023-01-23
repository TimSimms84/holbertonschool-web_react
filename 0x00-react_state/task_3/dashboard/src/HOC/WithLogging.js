import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  const name =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  class Logs extends Component {

    constructor(props) {
      super(props);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.componentWillUnmount = this.componentWillUnmount.bind(this);
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
  Logs.displayName = `WithLogging(${name})`;
  return Logs;
};

export default WithLogging;
