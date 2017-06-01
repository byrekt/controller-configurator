import { RECEIVE_CHARACTER_SETS } from '../constants/ActionTypes';

const characterSets = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CHARACTER_SETS:
      return {
        ...state,
        ...action.characterSets.reduce((obj, set) => {
          obj[set.id] = set
          return obj
        }, {})
      }
    default:
      return state;
  }
}

export default characterSets;