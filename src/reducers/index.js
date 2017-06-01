import { combineReducers } from 'redux';
import characterSets from './characterSets';
import jobList from './jobList';
import actionsList from './actionsList';

const configuratorApp = combineReducers({
  characterSets,
  jobList,
  actionsList
});

export default configuratorApp;