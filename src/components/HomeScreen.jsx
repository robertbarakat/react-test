import React from 'react';
import { Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomeScreen = () => (
  <Col className="text-center">
    <h2 className="mt-3">
      Buongiorno
    </h2>
    <p className="mt-5">
      Se sei un utente registrato clicca sul pulsante accedi, altrimenti registrati
    </p>
    <Link to="/signin">
      <Button color="success" className="mt-5 mr-2">Accedi</Button>
    </Link>
    <Link to="/signup">
      <Button color="info" className="mt-5 ml-2">Registrati</Button>
    </Link>
  </Col>
);

export default HomeScreen;
