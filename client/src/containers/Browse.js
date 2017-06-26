import { connect } from 'react-redux';
import Browse from '../components/Browse';
import { getSets } from '../actions';


function mapStateToProps(state) {
  const { sets } = state;

  return {
    sets: sets
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
