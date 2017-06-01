import { RECEIVE_ACTION_LIST } from '../constants/ActionTypes';

/**
 * This reducer handles updating the state with the full list of actions when
 * the RECEIVE_ACTION_LIST action is dispatched.
 */
const actionsList = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ACTION_LIST:
      return action.actionsList
    default:
      return state;
  }
}

export default actionsList;