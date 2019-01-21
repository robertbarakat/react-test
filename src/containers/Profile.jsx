import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StyledHeading3 from '../styledComponents/myStyledHeading';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: [],
    };
  }

  componentDidMount() {
    const { match, users } = this.props;
    const allUsers = users.filter(item => item.id === JSON.parse(match.params.id));
    this.setState({ storage: allUsers[0] });
  }

  render() {
    const { storage } = this.state;
    return (
      <Col xs={12} sm={{ size: 4, offset: 4 }}>
        <StyledHeading3>
          <FormattedMessage id="profile.Greeting" />
          {storage.name}
          &nbsp;
          {storage.lastname}
        </StyledHeading3>
      </Col>
    );
  }
}

function mstp(state) {
  return {
    users: state.users,
  };
}

Profile.propTypes = {
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number,
    PropTypes.string]))).isRequired,
};

export default connect(mstp)(Profile);
