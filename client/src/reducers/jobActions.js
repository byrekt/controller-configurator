import { RECEIVE_JOB_ACTIONS } from '../constants/ActionTypes';
/**
 * This reducer handles updating the state with the full list of jobs when
 * the RECEIVE_JOB_DATA action is dispatched.
 */
const jobActions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_JOB_ACTIONS:
      return action.jobActions
    default:
      return state;
  }
}

export default jobActions;