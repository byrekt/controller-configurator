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

const StyledHeader = styled.header`
  .dropdown-menu {
    padding: 0;
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
// get instance of database
firebase.initializeApp(config);
// Initialize firebase UI
const authUi = new firebaseui.auth.AuthUI(firebase.auth());

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

  componentWillUnmount() {
    authUi.reset();
  }

  render() {
    return (
      <div id="firebaseui-auth"></div>
    );
  }
}


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
    {authenticated &&
      <div className={'hidden'}>
        <FirebaseUI />
      </div>
    }
  </StyledHeader>
);

// Gets data from "API"s and stores them in the redux store using the

class App extends Component {

  constructor(props) {
    super(props);
    this.props.getJobs();
    this.props.getAllActions();

    this.doSignOut = this.props.doSignOut.bind(this);

    //const ref = firebase.database().ref('/lastAccess');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.doSignIn(user);
      }
    });
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
      dispatch(signOut(firebase));
      dispatch(getUserInfo(null));
      window.location.href =  '/';
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
