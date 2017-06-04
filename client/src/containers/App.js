import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getJobData} from '../actions';
import Header from '../components/Header';
import Main from '../components/Main';

// Gets data from "API"s and stores them in the redux store using the

class App extends Component {

  componentDidMount() {
    const dispatch = this.props.dispatch;

    dispatch(getJobData());
    //dispatch(getJobActions())
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
  jobData: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { jobData } = state;

  return {
    jobData
  }
}

export default connect(mapStateToProps)(App);
