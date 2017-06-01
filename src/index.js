import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { BrowserRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllCharacterSets, getAllJobs, getAllActions } from './actions';

import registerServiceWorker from './registerServiceWorker';
import Main from './Main';
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
          <LinkContainer to="/summoner">
            <MenuItem eventKey={2.2}>The Summoner</MenuItem>
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

const middleware = [ thunk ]

  middleware.push(createLogger())


const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

store.dispatch(getAllCharacterSets());
store.dispatch(getAllJobs());
store.dispatch(getAllActions());
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </Provider>), document.getElementById('root'));
registerServiceWorker();
