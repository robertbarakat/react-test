import React, { Component } from 'react';
import {
  Col, Button, Form, FormGroup, Label, Input, FormFeedback,
} from 'reactstrap';
import bcrypt from 'bcryptjs';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import createProfile from '../actions/createProfile';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      passwordbis: '',
      invalidpswd: '',
      invalidTextPswd: '',
      invalidEmail: '',
      invalidTextEmail: '',
      userLocalStorage: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { users } = this.props;
    /* const myLocalStorage = JSON.parse(localStorage.getItem('state'));
    this.setState({ userLocalStorage: myLocalStorage.users }); */
    this.setState({ userLocalStorage: users });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    const {
      name, lastname, email, password, passwordbis, userLocalStorage,
    } = this.state;
    const { createProfile, id, history } = this.props;
    const emailCheck = userLocalStorage.filter(item => item.email === email);
    if (password !== passwordbis) {
      this.setState({
        invalidpswd: 'invalid',
        invalidTextPswd: 'Attenzione, i due campi password non sono identici',
      });
    } else if (emailCheck.length !== 0) {
      this.setState({
        invalidEmail: 'invalid',
        invalidTextEmail: 'Attenzione, questo indirizzo email risulta già registrato',
      });
    } else {
      const saltRounds = 10;
      bcrypt.hash(password, saltRounds, (err, hash) => {
        const data = {
          id,
          name,
          lastname,
          email,
          password: hash,
        };
        createProfile(data);
        history.push(`/profile/${id}`);
      });
    }
  }

  render() {
    const {
      name, lastname, email, password, passwordbis, invalidpswd, invalidTextPswd,
      invalidEmail, invalidTextEmail,
    } = this.state;
    return (
      <Col xs={12} sm={{ size: 4, offset: 4 }}>
        <h3 className="mt-3 mb-3 text-center">
          Compila i campi e premi Invia
        </h3>
        <Form>
          <FormGroup>
            <Label for="Name">Nome</Label>
            <Input
              type="text"
              name="name"
              id="Name"
              value={name}
              onChange={this.handleChange}
              placeholder="Inserisci il tuo nome"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Lastname">Cognome</Label>
            <Input
              type="text"
              name="lastname"
              id="Lastname"
              value={lastname}
              onChange={this.handleChange}
              placeholder="Inserisci il tuo cognome"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="Email"
              value={email}
              onChange={this.handleChange}
              placeholder="Inserisci la tua e-mail"
              invalid={invalidEmail}
            />
            <FormFeedback>
              {invalidTextEmail}
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              value={password}
              onChange={this.handleChange}
              placeholder="Inserisci la tua password"
              invalid={invalidpswd}
            />
            <FormFeedback>
              {invalidTextPswd}
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="Passwordbis">Inserisci nuovamente la password</Label>
            <Input
              type="password"
              name="passwordbis"
              id="Passwordbis"
              value={passwordbis}
              onChange={this.handleChange}
              placeholder="Inserisci la password"
              invalid={invalidpswd}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit} color="primary">Invia</Button>
        </Form>
      </Col>
    );
  }
}

function mstp(state) {
  return {
    id: state.id,
    users: state.users,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({ createProfile }, dispatch);
}

export default withRouter(connect(mstp, mdtp)(SignUp));
