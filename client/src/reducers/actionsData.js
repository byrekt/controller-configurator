import { RECEIVE_ACTION_DATA } from '../constants/ActionTypes';
/**
 * This reducer handles updating the state with the full list of jobs when
 * the RECEIVE_JOB_DATA action is dispatched.
 */
const actionData = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ACTION_DATA:
      return action.actionData
    default:
      return state;
  }
}

export default actionData;