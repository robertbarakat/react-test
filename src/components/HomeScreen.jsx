import React from 'react';
import { Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import StyledHeading2 from '../myStyledComponents';

const HomeScreen = () => (
  <Col className="text-center">
    <StyledHeading2>
      Buongiorno
    </StyledHeading2>
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
