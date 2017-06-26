import { connect } from 'react-redux';
import UserKits from '../components/UserKits';
import { getUserKits } from '../actions';

// Gets data from "API"s and stores them in the redux store using the

function mapStateToProps(state) {
  const { sets } = state;

  return {
    sets: sets
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUserKits: (uid) => {
      dispatch(getUserKits(uid));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserKits);
