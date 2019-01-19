import React, { Component } from 'react';
import {
  Col, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import bcrypt from 'bcryptjs';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StyledHeading2 from '../myStyledComponents';

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
    const { history, users } = this.props;
    const profile = users.filter(item => item.email === email
     && bcrypt.compareSync(password, item.password));
    if (profile.length !== 0) {
      history.push(`/profile/${profile[0].id}`);
    } else {
      this.setState({ invalidText: 'Email o password invalidi, riprova' });
    }
  }

  render() {
    const { invalidText } = this.state;
    return (
      <Col xs={12} sm={{ size: 4, offset: 4 }}>
        <StyledHeading2>
          Registrati
        </StyledHeading2>
        <Form>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="Email"
              onChange={this.handleChange}
              placeholder="Inserisci la tua e-mail"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              onChange={this.handleChange}
              placeholder="Inserisci la tua password"
            />
          </FormGroup>
          <p className="text-danger">{ invalidText }</p>
          <Button color="primary" onClick={this.checkProfile}>Invia</Button>
        </Form>
      </Col>
    );
  }
}

function mstp(state) {
  return { users: state.users };
}

export default withRouter(connect(mstp)(SignIn));
