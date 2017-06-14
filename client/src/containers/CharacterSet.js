import { connect } from 'react-redux';
import CharacterSet from '../components/CharacterSet';
import { getCharacterSet, clearCurrentKit, updateKit } from '../actions';

// Gets data from "API"s and stores them in the redux store using the

function mapStateToProps(state) {
  const { characterSet, actionData, authentication } = state;

  return {
    characterSet: characterSet,
    actionsData: actionData,
    authentication: authentication
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSetChange: (set) => {
      dispatch(getCharacterSet(set));
    },
    clearCurrentKit: () => {
      dispatch(clearCurrentKit());
    },
    saveKit: (kit, uid) => {
      dispatch((updateKit(kit, uid)))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSet);
