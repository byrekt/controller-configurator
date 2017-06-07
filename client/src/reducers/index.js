import { combineReducers } from 'redux';
import jobData from './jobData';
import actionData from './actionsData';
import jobActions from './jobActions';
import characterSet from './characterSet';
import sets from './sets';

const configuratorApp = combineReducers({
  jobData,
  actionData,
  jobActions,
  characterSet,
  sets
});

export default configuratorApp;