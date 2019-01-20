import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import toggleLog from '../actions/toggleLog';

class LogComponent extends Component {
  signInRedirect() {
    const { history } = this.props;
    history.push('/signin');
  }

  render() {
    const { logStatus, toggleLog } = this.props;
    const logButton = (logStatus) ? (
      <Button color="danger" onClick={() => toggleLog(false)}>Logout</Button>) : <Button color="success" onClick={() => this.signInRedirect()}>Login</Button>;
    return (
      <div>
        {logButton}
      </div>
    );
  }
}

function mstp(state) {
  return {
    logStatus: state.logStatus,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({ toggleLog }, dispatch);
}

LogComponent.propTypes = {
  logStatus: PropTypes.bool,
};

LogComponent.defaultProps = {
  logStatus: false,
};

export default withRouter(connect(mstp, mdtp)(LogComponent));
