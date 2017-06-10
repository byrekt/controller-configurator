import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar>
          <Nav>
            <LinkContainer exact={true} to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            {/*<NavDropdown eventKey={2} title="Job Guides" id="basic-nav-dropdown">
              <LinkContainer to="/astrologian">
                <MenuItem eventKey={2.1}>The Astrologian</MenuItem>
              </LinkContainer>
              <LinkContainer to="/summoner">
                <MenuItem eventKey={2.2}>The Summoner</MenuItem>
              </LinkContainer>
            </NavDropdown>*/}
            <LinkContainer to="/browse">
              <NavItem eventKey={2}>Browse Kits</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;
