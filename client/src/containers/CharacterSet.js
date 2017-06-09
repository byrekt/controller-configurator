import { connect } from 'react-redux';
import CharacterSet from '../components/CharacterSet';
import { getCharacterSet, clearCurrentKit } from '../actions';

// Gets data from "API"s and stores them in the redux store using the

function mapStateToProps(state) {
  const { characterSet, actionData } = state;

  return {
    characterSet: characterSet,
    actionsData: actionData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSetChange: (set) => {
      dispatch(getCharacterSet(set));
    },
    clearCurrentKit: () => {
      dispatch(clearCurrentKit());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSet);
