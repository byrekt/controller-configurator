import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllCharacterSets, getAllJobs, getAllActions } from '../actions';
import Header from '../components/Header';
import Main from '../components/Main';

// Gets data from "API"s and stores them in the redux store using the

class App extends Component {

  componentDidMount() {
    const dispatch = this.props.dispatch;

    dispatch(getAllCharacterSets());
    dispatch(getAllJobs());
    dispatch(getAllActions());
  };

  render() {
    //const { characterSets, actionsList, jobList} = this.props;

    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
};

App.propTypes = {
  characterSets: PropTypes.arrayOf(Object),
  actionsList: PropTypes.arrayOf(Object),
  jobList: PropTypes.arrayOf(Object),
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const {characterSets, actionsList, jobList } = state;

  return {
    characterSets,
    actionsList,
    jobList
  }
}

export default connect(mapStateToProps)(App);
