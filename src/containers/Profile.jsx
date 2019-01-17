import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
    };
  }

  render() {
    const { name, lastname } = this.state;
    return (
      <Col xs={12} sm={{ size: 4, offset: 4 }}>
        <h3>
          Buongiorno&nbsp;
          {name}
          &nbsp;
          {lastname}
        </h3>
      </Col>
    );
  }
}

export default Profile;
