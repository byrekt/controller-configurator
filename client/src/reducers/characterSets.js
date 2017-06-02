import { RECEIVE_CHARACTER_SETS } from '../constants/ActionTypes';
/**
 * This reducer handles updating the state with the full list of saved character sets when
 * the RECEIVE_CHARACTER_SETS action is dispatched.
 */
const characterSets = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CHARACTER_SETS:
      return action.characterSets
    default:
      return state;
  }
}

export default characterSets;