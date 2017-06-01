import { RECEIVE_JOB_LIST } from '../constants/ActionTypes';
/**
 * This reducer handles updating the state with the full list of jobs when
 * the RECEIVE_JOB_LIST action is dispatched.
 */
const jobList = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_JOB_LIST:
      return action.jobList
    default:
      return state;
  }
}

export default jobList;