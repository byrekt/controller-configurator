import * as types from '../constants/ActionTypes';
import { DEFAULT_SET } from '../constants/DefaultValues';

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
  if (!id) {
    dispatch(receiveCharacterSet(DEFAULT_SET));
    return;
  }
  return fetch(`/api/getSet/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveCharacterSet(json));
    });
};
// Action creator for character set data
const saveKit = characterSet => ({
  type: types.SAVE_CHARACTER_SET,
  characterSet: characterSet
});
export const updateKit = (kit, uid, displayName) => dispatch => {
  const data = { kit: kit, uid: uid };
  return fetch('/api/saveKit', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => {
      dispatch(saveKit(json));
    });
};

// Action creator for removing kit data
const removeCharacterSet = () => ({
  type: types.RECEIVE_CHARACTER_SET,
  characterSet: {}
});
/**
 * Retrieves the object containing all of the cross bars, description, etc for
 * any given character set.
 * @param {number|string} id the ID of the set to retrieve
 */
export const clearCurrentKit = () => dispatch => {
  dispatch(removeCharacterSet());
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

/**
 * Retrieves the user's kits
 * @param {string} uid user's ID
 */
export const getUserKits = uid => dispatch => {
  return fetch(`/api/userKits/${uid}`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveSets(json));
    });
};

const authenticateUser = user => ({
  type: types.AUTHENTICATE_USER,
  authentication: user
});

export const signIn = user => dispatch => {
  dispatch(authenticateUser(user));
}

// Action creator for unauthenticating users
const unauthenticateUser = () => ({
  type: types.UNAUTHENTICATE_USER,
  authentication: {}
});
/**
 * Retrieves the array of character sets for use on the browse page.
 * @param {object} firebase reference to the firebase instance
 */
export const signOut = firebase => dispatch => {
  return firebase.auth().signOut().then(() => {
    dispatch(unauthenticateUser());
  });
};

// Action creator for getting user info
const retrieveUserInfo = (info) => ({
  type: types.RETRIEVE_USER_INFO,
  userInfo: info
});
/**
 * Retrieves the user's info
 * @param {string} uid user's ID
 */
export const getUserInfo = uid => dispatch => {
  if (!uid) dispatch(retrieveUserInfo({}));
  return fetch(`/api/getUserInfo/${uid}`)
    .then(response => response.json())
    .then(json => {
      dispatch(retrieveUserInfo(json));
    });
};

const userNameUpdate = (name) => ({
  type: types.UPDATE_USER_NAME,
  name: {displayName: name}
});
export const updateUserDisplayName = (uid, displayName) => dispatch => {
  const data = { name: displayName, uid: uid };
  return fetch(`/api/updateUserName`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => {
      dispatch(userNameUpdate(json));
    });
};