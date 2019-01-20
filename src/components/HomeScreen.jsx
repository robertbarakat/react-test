import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import StyledHeading2 from '../styledComponents/myStyledHeading';
import StyledButton from '../styledComponents/myStyledButton';

const HomeScreen = () => (
  <Col className="text-center">
    <StyledHeading2>
      Buongiorno
    </StyledHeading2>
    <p className="mt-5">
      Se sei un utente registrato clicca sul pulsante accedi, altrimenti registrati
    </p>
    <Link to="/signin">
      <StyledButton className="mt-5 mr-2">Accedi</StyledButton>
    </Link>
    <Link to="/signup">
      <StyledButton primary className="mt-5 ml-2">Iscriviti</StyledButton>
    </Link>
  </Col>
);

export default HomeScreen;
