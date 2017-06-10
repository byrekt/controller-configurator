import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { connect } from 'react-redux';
import { getJobData, getActions, getJobActions } from '../actions';

import Header from '../components/Header';
import Main from '../components/Main';


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
const app = firebase.initializeApp(config);
// Initialize firebase UI
const authUi = new firebaseui.auth.AuthUI(firebase.auth());
//const ref = firebase.database().ref('/lastAccess');

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('user is logged in: ', user);
  } else {
    console.log('user is not logged in: ', user);
  }
});
class FirebaseUI extends Component {
  componentDidMount() {
    var self = this;
    var uiConfig = {
      'callbacks': {
        'signInSuccess': function (user) {
          if (self.props.onSignIn) {
            self.props.onSignIn(user);
          }
          return false;
        }
      },
      'signInOptions': [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
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


// Gets data from "API"s and stores them in the redux store using the

class App extends Component {

  componentDidMount() {
    const dispatch = this.props.dispatch;

    dispatch(getJobData());
    dispatch(getActions());
  };

  render() {
    return (
      <div>
        <Header />
        <Main />
        <FirebaseUI />
      </div>
    );
  }
};

App.propTypes = {
  jobData: PropTypes.object,
  actionData: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { jobData, actionData } = state;

  return {
    jobData,
    actionData
  }
}

export default connect(mapStateToProps)(App);
