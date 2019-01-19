import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: [],
    };
  }

  componentDidMount() {
    const { match, users } = this.props;
    /* const getStorage = JSON.parse(localStorage.getItem('state'));
    const allUsers = getStorage.users.filter(item => item.id === JSON.parse(match.params.id)); */
    const allUsers = users.filter(item => item.id === JSON.parse(match.params.id));
    this.setState({ storage: allUsers[0] });
  }

  render() {
    const { storage } = this.state;
    return (
      <Col xs={12} sm={{ size: 4, offset: 4 }}>
        <h3 className="mt-3 mb-3 text-center">
          Buongiorno&nbsp;
          {storage.name}
          &nbsp;
          {storage.lastname}
        </h3>
      </Col>
    );
  }
}

function mstp(state) {
  return { users: state.users };
}

export default connect(mstp)(Profile);
