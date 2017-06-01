import { RECEIVE_ACTION_LIST } from '../constants/ActionTypes';

const actionsList = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ACTION_LIST:
      return {
        ...state,
        ...action.actionsList.reduce((obj, set) => {
          obj[set.id] = set
          return obj
        }, {})
      }
    default:
      return state;
  }
}

export default actionsList;