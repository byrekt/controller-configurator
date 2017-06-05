import * as types from '../constants/ActionTypes';

// const receiveJobList = jobList => ({
//   type: types.RECEIVE_JOB_LIST,
//   jobList: jobList
// });

// export const getAllJobs = () => dispatch => {
//   jobList.getJobList(jobList => {
//     dispatch(receiveJobList(jobList));
//   });
// };

// const receiveActionsList = actionsList => ({
//   type: types.RECEIVE_ACTION_LIST,
//   actionsList: actionsList
// });

// export const getAllActions = () => dispatch => {
//   actionsList.getActionsList(actionsList => {
//     dispatch(receiveActionsList(actionsList));
//   });
// };

// const receiveJobData = jobData => ({
//   type: types.RECEIVE_JOB_DATA,
//   jobData: jobData
// });

// export const buildJobData = () => dispatch => {
//   jobData.buildJobData(() => {
//     return fetch('/api/jobData/')
//       .then(response => response.json())
//       .then(json => {
//         dispatch(receiveJobData(json));
//       });
//   });
// };

// Action creator for job data
const receiveJobData = jobData => ({
  type: types.RECEIVE_JOB_DATA,
  jobData: jobData
});

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

export const getActions = () => dispatch => {
  return fetch('/api/allActions/')
    .then(response => response.json())
    .then(json => {
      dispatch(receiveActionData(json));
    });
};

// Action creator for action data
const receiveJobActions = jobActions => ({
  type: types.RECEIVE_JOB_ACTIONS,
  jobActions: jobActions
});

export const getJobActions = (job) => dispatch => {
  return fetch(`/api/actions/${job}`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveJobActions(json));
    });
};

// Action creator for action data
const receiveCharacterSet = characterSet => ({
  type: types.RECEIVE_CHARACTER_SET,
  characterSet: characterSet
});

export const getCharacterSet = (id) => dispatch => {
  return fetch(`/api/getSet/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveCharacterSet(json));
    });
};