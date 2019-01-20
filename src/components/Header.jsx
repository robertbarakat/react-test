import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import LogComponent from '../containers/LogComponent';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { setEng, setIta } = this.props;
    return (
      <div>
        <Navbar color="info" light expand="md">
          <Link to="/" className="font-weight-bold text-white">
            REACT TEST
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <LogComponent />
              </NavItem>
              <NavItem>
                <Button className="mr-1" color="danger" onClick={setIta}>ITA</Button>
              </NavItem>
              <NavItem>
                <Button className="ml-1" color="danger" onClick={setEng}>ENG</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
