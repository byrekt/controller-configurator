import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { connect } from 'react-redux';
import { getJobData, getActions, signIn, signOut, getUserInfo } from '../actions';

import styled from 'styled-components';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Main from '../components/Main';

const OFFLINE_MODE = false;

const StyledHeader = styled.header`

  .popover-content {
    color: yellow;
  }
  .navbar {
    border-radius: 10px;
    border: 7px ridge white;
    background: linear-gradient(#5050cd, #01002d);
  }

  .navbar-default {
    .navbar-nav {
      >li {
        background-color: none;
        >a {
          color: white;
        }
        &:hover::before {
          background-image: url(/icons/misc/cursor.png);
          background-size: 17px 20px;
          width: 17px;
          height: 20px;
          display: inline-block;
          position: absolute;
          top: 20px;
          content: "";
          left: -5px;
        }
      }
    }
  }


  .dropdown-menu {
    color: white;
    border-radius: 10px;
    border: 7px ridge white;
    background: linear-gradient(#5050cd, #01002d);
  }

  .firebaseui-card-content {
    padding: 0;

    .firebaseui-idp-list {
      margin: 0;

      .firebaseui-list-item {
        margin-bottom: 0;

        .firebaseui-idp-button {
          padding: 6px;

          .firebaseui-idp-text {
            padding-left: 6px;
          }
        }
      }
    }
  }
`
// Handle authentication
const config = {
  apiKey: "AIzaSyBNA4TDCGW9PqU5hKchhpki6w92-Up34gs",
  authDomain: "controller-configurator.firebaseapp.com",
  databaseURL: "https://controller-configurator.firebaseio.com",
  projectId: "controller-configurator",
  storageBucket: "controller-configurator.appspot.com",
  messagingSenderId: "138718965587"
};
let authUi;
// get instance of database
if (!OFFLINE_MODE) {
  firebase.initializeApp(config);
  // Initialize firebase UI
  authUi = new firebaseui.auth.AuthUI(firebase.auth());
}

class FirebaseUI extends Component {
  componentDidMount() {

    if (!OFFLINE_MODE) {
      const uiConfig = {
        'callbacks': {
          'signInSuccess': function (user) {
            return false;
          }
        },
        'signInOptions': [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        'signInFlow': 'popup'
      };
      authUi.start('#firebaseui-auth', uiConfig);
    }
  }
  /**
   * If the app is not in offline mode, we need to reset the authentication functionality
   * when the component is unmounted.
   */
  componentWillUnmount() {
    if (!OFFLINE_MODE) {

      authUi.reset();
    }
  }

  render() {
    return (
      <div id="firebaseui-auth"></div>
    );
  }
}

/**
 * Stateless component responsible for rendering the header with navigation.
 *
 * @param {Object} authenticated the object returned from firebase authentication corresponding
 * to the user
 * @param {function} doSignOut closure action to perform the sign-out steps
 */
const Header = ({ authenticated, doSignOut }) => (
  <StyledHeader>
    <Navbar>
      <Nav>
        <LinkContainer exact={true} to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/browse">
          <NavItem eventKey={2}>Browse Kits</NavItem>
        </LinkContainer>
        {!authenticated &&
          <NavDropdown eventKey={3} title="Sign In" id="basic-nav-dropdown">
            <FirebaseUI />
          </NavDropdown>}
        {authenticated &&
          <NavDropdown eventKey={3} title="User Menu" id="basic-nav-dropdown">
            <LinkContainer to={`/newKit`}>
              <MenuItem eventKey={3.1}>New Kit</MenuItem>
            </LinkContainer>
            <LinkContainer to={`/userKits/${authenticated}`}>
              <MenuItem eventKey={3.1}>My Kits</MenuItem>
            </LinkContainer>
            <MenuItem eventKey={3.2} onClick={doSignOut}>Log Out</MenuItem>
          </NavDropdown>}
      </Nav>
    </Navbar>
    {authenticated && !OFFLINE_MODE &&
      <div className={'hidden'}>
        <FirebaseUI />
      </div>
    }
  </StyledHeader>
);

/**
 * Handles application level state for the application.
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.props.getJobs();
    this.props.getAllActions();

    this.doSignOut = this.props.doSignOut.bind(this);

    //const ref = firebase.database().ref('/lastAccess');
    if (!OFFLINE_MODE) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.props.doSignIn(user);
        }
      });
    } else {
      let mockAuth = {
        uid: 'zKyoDM9gFhMff4eR0VYJRHSNzns1'
      }

      this.props.doSignIn(mockAuth);
    }
  };

  render() {
    return (
      <div>
        <Header authenticated={this.props.authentication.uid} doSignOut={this.doSignOut} />
        <Main />
      </div>
    );
  }
};

App.propTypes = {
  jobData: PropTypes.object,
  actionData: PropTypes.object,
  authentication: PropTypes.object,
  userInfo: PropTypes.object
};

App.defaultProps = {
  authentication: {}
}

function mapStateToProps(state) {
  const { jobData, actionData, authentication, userInfo } = state;

  return {
    jobData,
    actionData,
    authentication,
    userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doSignOut: () => {
      if (!OFFLINE_MODE) {
        dispatch(signOut(firebase));
        dispatch(getUserInfo(null));
        window.location.href = '/';
      }
    },
    doSignIn: (user) => {
      dispatch(signIn(user));
      dispatch(getUserInfo(user.uid));
    },
    getJobs: () => {
      dispatch(getJobData());
    },
    getAllActions: () => {
      dispatch(getActions());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
