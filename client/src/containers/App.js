import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getJobData, getActions, getJobActions } from '../actions';
import Header from '../components/Header';
import Main from '../components/Main';

// Gets data from "API"s and stores them in the redux store using the

class App extends Component {

  componentDidMount() {
    const dispatch = this.props.dispatch;

    dispatch(getJobData());
    dispatch(getActions());
    dispatch(getJobActions('astrologian'));
  };

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
};

App.propTypes = {
  jobData: PropTypes.object,
  actionData: PropTypes.object,
  jobActions: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { jobData, actionData, jobActions } = state;

  return {
    jobData,
    actionData,
    jobActions
  }
}

export default connect(mapStateToProps)(App);
