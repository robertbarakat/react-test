import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StyledHeading2 from '../styledComponents/myStyledHeading';

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
    const { logStatus, history } = this.props;
    if (!logStatus) {
      history.push('/');
    } return (
      <Col xs={12} sm={{ size: 4, offset: 4 }}>
        <StyledHeading2>
          Buongiorno&nbsp;
          {storage.name}
          &nbsp;
          {storage.lastname}
        </StyledHeading2>
      </Col>
    );
  }
}

function mstp(state) {
  return {
    users: state.users,
    logStatus: state.logStatus,
  };
}

Profile.propTypes = {
  logStatus: PropTypes.bool,
  users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number,
    PropTypes.string]))),
};

Profile.defaultProps = {
  logStatus: false,
  users: [{
    id: 1, name: 'Robert', lastname: 'Barakat', email: 'rob@robert.it', password: 'pswd',
  }],
};

export default connect(mstp)(Profile);
