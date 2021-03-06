import React, { Component } from 'react';
import {
  Col, Form, FormGroup, Label, Input,
} from 'reactstrap';
import bcrypt from 'bcryptjs';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toggleLog from '../actions/toggleLog';
import StyledHeading3 from '../styledComponents/myStyledHeading';
import StyledButton from '../styledComponents/myStyledButton';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      invalidText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkProfile = this.checkProfile.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  checkProfile() {
    const { email, password } = this.state;
    const { history, users, toggleLog } = this.props;
    const profile = users.filter(item => item.email === email
     && bcrypt.compareSync(password, item.password));
    if (profile.length !== 0) {
      toggleLog(true);
      history.push(`/profile/${profile[0].id}`);
    } else {
      this.setState({ invalidText: 'Email o password invalidi, riprova' });
    }
  }

  render() {
    const { invalidText } = this.state;
    return (
      <Col xs={12} sm={{ size: 4, offset: 4 }}>
        <StyledHeading3>
          <FormattedMessage id="signin.header" />
        </StyledHeading3>
        <Form>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="Email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <p className="text-danger">{ invalidText }</p>
          <StyledButton primary type="button" onClick={this.checkProfile}>
            <FormattedMessage id="signin.SubmitBtn" />
          </StyledButton>
        </Form>
      </Col>
    );
  }
}

function mstp(state) {
  return { users: state.users };
}

function mdtp(dispatch) {
  return bindActionCreators({ toggleLog }, dispatch);
}

SignIn.propTypes = {
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number,
    PropTypes.string]))).isRequired,
};

export default withRouter(connect(mstp, mdtp)(SignIn));
