import * as types from '../constants/ActionTypes';

// Action creator for job data
const receiveJobData = jobData => ({
  type: types.RECEIVE_JOB_DATA,
  jobData: jobData
});

/**
 * Gets meta information about all the jobs..
 */
export const getJobData = () => dispatch => {
  return fetch('/api/jobData/')
    .then(response => response.json())
    .then(json => {
      dispatch(receiveJobData(json));
    });
};

// Action creator for action data
const receiveActionData = actionData => ({
  type: types.RECEIVE_ACTION_DATA,
  actionData: actionData
});
/**
 * Gets all skill actions.
 */
export const getActions = () => dispatch => {
  return fetch('/api/allActions/')
    .then(response => response.json())
    .then(json => {
      dispatch(receiveActionData(json));
    });
};

// Action creator for actions by job data
const receiveJobActions = jobActions => ({
  type: types.RECEIVE_JOB_ACTIONS,
  jobActions: jobActions
});

/**
 * Gets a list of actions bucketed by class/job/pet.
 * @param {string} job the name of the job to get actions for
 */
export const getJobActions = (job) => dispatch => {
  return fetch(`/api/actions/${job}`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveJobActions(json));
    });
};

// Action creator for character set data
const receiveCharacterSet = characterSet => ({
  type: types.RECEIVE_CHARACTER_SET,
  characterSet: characterSet
});
/**
 * Retrieves the object containing all of the cross bars, description, etc for 
 * any given character set.
 * @param {number|string} id the ID of the set to retrieve 
 */
export const getCharacterSet = (id) => dispatch => {
  return fetch(`/api/getSet/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveCharacterSet(json));
    });
};

// Action creator for character set data
const receiveSets = sets => ({
  type: types.RECEIVE_SETS,
  sets: sets
});
/**
 * Retrieves the array of character sets for use on the browse page.
 * @param {string} job the optional job filter
 */
export const getSets = (id) => dispatch => {
  return fetch(`/api/getSetsDetails/${(id) ? id : ''}`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveSets(json));
    });
};