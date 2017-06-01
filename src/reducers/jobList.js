import { RECEIVE_JOB_LIST } from '../constants/ActionTypes';

const jobList = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_JOB_LIST:
      return {
        ...state,
        ...action.jobList.reduce((obj, set) => {
          obj[set.id] = set
          return obj
        }, {})
      }
    default:
      return state;
  }
}

export default jobList;