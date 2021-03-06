import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { connect } from 'react-redux';
import { getJobData, getActions, signIn, signOut, getUserInfo } from '../actions';

import styled from 'styled-components';

import { Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Main from '../components/Main';

const Logo = styled.div`
  text-align: right;
  padding-right: 3rem;
  line-height: 5rem;
  font-size: 2rem;
  text-shadow: -4px 4px 0px rgb(14, 14, 14), 7px 7px 0px rgba(0, 0, 0, 0.2);
`

const StyledHeader = styled.header`
  margin-top: 1rem;
  background-color: black;
  border-radius: 10px;
  border: 7px ridge white;
  background: linear-gradient(#5050cd, #01002d);

  .navbar-default {
    background-color: transparent;
    border: 0;
    margin-bottom: 0;
    .navbar-nav {
      >li {
        background-color: transparent;
        >a {
          color: white;
        }
        &.active, &.open {
          background-color: rgba(0, 0, 0, 0.2);
          a {
            background-color: transparent;
            color: white;
          }
        }
        &:hover{
          &::before {
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
  }


  .dropdown-menu {
    color: white;
    border-radius: 10px !important;    
    box-shadow: 1px 0px 2px 2px rgba(0, 0, 0, .8);
    border: 7px ridge white;
    background: linear-gradient(#5050cd, #01002d);
    
    >ul {
      >li {
        &:hover, &.active {
          background-color: rgba(0, 0, 0, 0.8);
        }
      }
    }

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
firebase.initializeApp(config);
// Initialize firebase UI
authUi = new firebaseui.auth.AuthUI(firebase.auth());
class FirebaseUI extends Component {
  componentDidMount() {

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
  /**
   * If the app is not in offline mode, we need to reset the authentication functionality
   * when the component is unmounted.
   */
  componentWillUnmount() {

    authUi.reset();

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
    <Row>
      <Col xs={6}>
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
      </Col>
      <Col xs={6}>
        <Logo>
          Supernova Squirrel's Controller Configurator
        </Logo>
      </Col>
    </Row>
    {authenticated &&
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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.doSignIn(user);
      }
    });

  };

  render() {
    return (
      <div className="container">
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
      dispatch(signOut(firebase));
      dispatch(getUserInfo(null));
      window.location.href = '/';
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
