import characterSets from '../api/characterSets';
import jobList from '../api/jobList';
import actionsList from '../api/actionsList';
import * as types from '../constants/ActionTypes';

const receiveCharacterSets = characterSets => ({
  type: types.RECEIVE_CHARACTER_SETS,
  characterSets: characterSets
});

export const getAllCharacterSets = () => dispatch => {
  characterSets.getCharacterSets(characterSets => {
    dispatch(receiveCharacterSets(characterSets));
  });
};

const receiveJobList = jobList => ({
  type: types.RECEIVE_JOB_LIST,
  jobList: jobList
});

export const getAllJobs = () => dispatch => {
  jobList.getJobList(jobList => {
    dispatch(receiveJobList(jobList));
  });
};

const receiveActionsList = actionsList => ({
  type: types.RECEIVE_ACTION_LIST,
  actionsList: actionsList
});

export const getAllActions = () => dispatch => {
  actionsList.getActionsList(actionsList => {
    dispatch(receiveActionsList(actionsList));
  });
};