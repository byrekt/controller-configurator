import { connect } from 'react-redux';
import CharacterSet from '../components/CharacterSet';
import { getCharacterSet, clearCurrentKit, updateKit, getUserInfo, updateUserDisplayName } from '../actions';

// Gets data from "API"s and stores them in the redux store using the

function mapStateToProps(state) {
  const { characterSet, actionData, authentication, userInfo, jobData } = state;

  return {
    characterSet: characterSet,
    actionsData: actionData,
    authentication: authentication,
    userInfo: userInfo,
    jobData: jobData
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
    saveKit: (kit, uid, displayName) => {
      dispatch((updateKit(kit, uid)));
      if (displayName) {
        dispatch(updateUserDisplayName(uid, displayName));
      }
    },
    getUserInfo: (uid) => {
      dispatch(getUserInfo(uid));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSet);
