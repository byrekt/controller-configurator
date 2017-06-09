import { RECEIVE_CHARACTER_SET, REMOVE_CHARACTER_SET } from '../constants/ActionTypes';
/**
 * This reducer handles updating the state with the currently viewed character set.
 */
const characterSet = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHARACTER_SET:
      return action.characterSet;
    case REMOVE_CHARACTER_SET:
      return {};
    default:
      return state;
  }
}

export default characterSet;