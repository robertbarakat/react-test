import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import StyledHeading2 from '../myStyledComponents';

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
  return { users: state.users };
}

export default connect(mstp)(Profile);
