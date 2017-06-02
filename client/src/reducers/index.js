import { combineReducers } from 'redux';
import characterSets from './characterSets';
import jobData from './jobData';

const configuratorApp = combineReducers({
  characterSets,
  jobData
});

export default configuratorApp;