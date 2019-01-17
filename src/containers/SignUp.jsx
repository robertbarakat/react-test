import React, { Component } from 'react';
import {
  Col, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      passwordbis: '',
    };
  }

  render() {
    const {
      name, lastname, email, password, passwordbis,
    } = this.state;
    return (
      <Col xs={12} sm={{ size: 4, offset: 4 }}>
        <h3 className="mt-3 mb-3 text-center">
          Inserisci le tue credenziali
        </h3>
        <Form>
          <FormGroup>
            <Label for="Name">Nome</Label>
            <Input
              type="text"
              name="name"
              id="Name"
              value={name}
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
              placeholder="Inserisci la tua e-mail"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              value={password}
              placeholder="Inserisci la tua password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Passwordbis">Inserisci nuovamente la password</Label>
            <Input
              type="passwordbis"
              name="passwordbis"
              id="Passwordbis"
              value={passwordbis}
              placeholder="Inserisci la password"
            />
          </FormGroup>
          <Button color="primary">Invia</Button>
        </Form>
      </Col>
    );
  }
}

export default SignUp;
