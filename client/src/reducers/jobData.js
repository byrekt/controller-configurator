import { RECEIVE_JOB_DATA } from '../constants/ActionTypes';
/**
 * This reducer handles updating the state with the full list of jobs when
 * the RECEIVE_JOB_DATA action is dispatched.
 */
const jobData = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_JOB_DATA:
      return action.jobData
    default:
      return state;
  }
}

export default jobData;