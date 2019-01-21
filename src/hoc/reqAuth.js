import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      const { logStatus, history } = this.props;
      if (!logStatus) {
        history.push('/signin');
      }
    }

    componentWillUpdate() {
      const { logStatus, history } = this.props;
      if (!logStatus) {
        history.push('/signin');
      }
    }

    componentDidUpdate() {
      const { logStatus, history } = this.props;
      if (!logStatus) {
        history.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mstp(state) {
    return { logStatus: state.logStatus };
  }

  return connect(mstp)(Authentication);
}
