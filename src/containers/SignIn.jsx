import React, { Component } from 'react';
import {
  Col, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <Col xs={12} sm={{ size: 4, offset: 4 }}>
        <h3 className="mt-3 mb-3 text-center">
          Registrati
        </h3>
        <Form>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="Email"
              placeholder="Inserisci la tua e-mail"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              placeholder="Inserisci la tua password"
            />
          </FormGroup>
          <Button color="primary">Invia</Button>
        </Form>
      </Col>
    );
  }
}

export default SignIn;
