import React from 'react';
import { Container, Row } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';
import HomeScreen from './components/HomeScreen';

const App = () => (
  <div className="App">
    <Header />
    <Container fluid>
      <Row>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
      </Row>
    </Container>
  </div>
);


export default App;
