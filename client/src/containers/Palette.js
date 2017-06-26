import { connect } from 'react-redux';
import Palette from '../components/Palette';
import { getJobActions } from '../actions';

// Gets data from "API"s and stores them in the redux store using the

function mapStateToProps(state) {
  const { jobData, jobActions } = state;

  return {
    jobs: jobData,
    jobActions: jobActions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onJobChange: (job) => {
      if (job) dispatch(getJobActions(job));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
