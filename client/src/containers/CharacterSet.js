import { connect } from 'react-redux';
import CharacterSet from '../components/CharacterSet';
import { getCharacterSet, clearCurrentKit, updateKit, getUserInfo  } from '../actions';

// Gets data from "API"s and stores them in the redux store using the

function mapStateToProps(state) {
  const { characterSet, actionData, authentication, userInfo } = state;

  return {
    characterSet: characterSet,
    actionsData: actionData,
    authentication: authentication,
    userInfo: userInfo
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
    },
    getUserInfo: (uid) => {
      dispatch(getUserInfo(uid));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSet);
