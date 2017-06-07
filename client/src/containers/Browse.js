import { connect } from 'react-redux';
import Browse from '../components/Browse';
import { getSets } from '../actions';

// Gets data from "API"s and stores them in the redux store using the

function mapStateToProps(state) {
  const { sets } = state;

  return {
    sets: sets,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFilterSets: (job) => {
      console.log('calling filterSets');
      dispatch(getSets(job));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
