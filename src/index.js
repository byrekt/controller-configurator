import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Header = () => (
  <header>
    <Navbar>
      <Nav>
        <LinkContainer exact={true} to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <NavDropdown eventKey={2} title="Job Guides" id="basic-nav-dropdown">
          <LinkContainer to="/astrologian">
            <MenuItem eventKey={2.1}>The Astrologian</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar>
  </header>
);

const Application = () => (
  <div>
    <Header />
    <Main />
  </div>
)

ReactDOM.render((
  <BrowserRouter>
    <Application />
  </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
