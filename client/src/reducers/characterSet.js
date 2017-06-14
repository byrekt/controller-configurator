import { RECEIVE_CHARACTER_SET, REMOVE_CHARACTER_SET, SAVE_CHARACTER_SET } from '../constants/ActionTypes';
import { DEFAULT_SET } from '../constants/DefaultValues';

/**
 * This reducer handles updating the state with the currently viewed character set.
 */
const characterSet = (state = DEFAULT_SET, action) => {
  switch (action.type) {
    case RECEIVE_CHARACTER_SET:
      return action.characterSet;
    case REMOVE_CHARACTER_SET:
      return DEFAULT_SET;
    case SAVE_CHARACTER_SET:
      return action.characterSet;
    default:
      return state;
  }
}

export default characterSet;