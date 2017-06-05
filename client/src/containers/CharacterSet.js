import { connect } from 'react-redux';
import CharacterSet from '../components/CharacterSet';
import { getCharacterSet } from '../actions';

// Gets data from "API"s and stores them in the redux store using the

function mapStateToProps(state) {
  const { characterSet } = state;

  return {
    characterSet: characterSet,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSetChange: (set) => {
      dispatch(getCharacterSet(set));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSet);
