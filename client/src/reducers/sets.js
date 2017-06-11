import { RECEIVE_SETS } from '../constants/ActionTypes';
/**
 * This reducer handles updating the state with the list of sets
 */
const characterSet = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SETS:
      return action.sets;
    default:
      return state;
  }
}

export default characterSet;