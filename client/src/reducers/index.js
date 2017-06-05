import { combineReducers } from 'redux';
import jobData from './jobData';
import actionData from './actionsData';
import jobActions from './jobActions';
import characterSet from './characterSet';

const configuratorApp = combineReducers({
  jobData,
  actionData,
  jobActions,
  characterSet
});

export default configuratorApp;