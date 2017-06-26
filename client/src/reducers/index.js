import { combineReducers } from 'redux';
import jobData from './jobData';
import actionData from './actionsData';
import authentication from './authentication';
import jobActions from './jobActions';
import characterSet from './characterSet';
import userInfo from './userInfo';
import sets from './sets';

const configuratorApp = combineReducers({
  jobData,
  actionData,
  jobActions,
  authentication,
  userInfo,
  characterSet,
  sets
});

export default configuratorApp;