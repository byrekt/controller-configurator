import { AUTHENTICATE_USER, UNAUTHENTICATE_USER } from '../constants/ActionTypes';
/**
 * This reducer handles updating the state with the currently viewed character set.
 */
const authentication = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return action.auth;
    case UNAUTHENTICATE_USER:
      return {};
    default:
      return state;
  }
}

export default characterSet;