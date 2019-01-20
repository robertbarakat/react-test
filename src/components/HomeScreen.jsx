import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import StyledHeading3 from '../styledComponents/myStyledHeading';
import StyledButton from '../styledComponents/myStyledButton';

const HomeScreen = () => (
  <Col className="text-center">
    <StyledHeading3>
      <FormattedMessage id="homepage.welcome" />
    </StyledHeading3>
    <p className="mt-5">
      <FormattedMessage id="homepage.infoHeader" />
    </p>
    <Link to="/signin">
      <StyledButton className="mt-5 mr-2">
        <FormattedMessage id="homepage.login" />
      </StyledButton>
    </Link>
    <Link to="/signup">
      <StyledButton primary className="mt-5 ml-2">
        <FormattedMessage id="homepage.register" />
      </StyledButton>
    </Link>
  </Col>
);

export default HomeScreen;
