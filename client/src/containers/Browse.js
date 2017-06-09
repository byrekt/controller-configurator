import { connect } from 'react-redux';
import Browse from '../components/Browse';
import { getSets } from '../actions';

// Gets data from "API"s and stores them in the redux store using the

function mapStateToProps(state) {
  const { sets, jobData, characterSet } = state;

  return {
    sets: sets,
    jobData: jobData,
    characterSet: characterSet
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFilterSets: (job) => {
      dispatch(getSets(job));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
