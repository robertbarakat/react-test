import React, { Component } from 'react';
import {
  Col, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      invalidText: '',
      userLocalStorage: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkProfile = this.checkProfile.bind(this);
  }

  componentDidMount() {
    const myLocalStorage = JSON.parse(localStorage.getItem('state'));
    this.setState({ userLocalStorage: myLocalStorage.users });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  checkProfile() {
    const { email, password, userLocalStorage } = this.state;
    const { history } = this.props;
    const profile = userLocalStorage.filter(item => item.email === email
     && item.password === password);
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

export default withRouter(SignIn);
