import { AUTHENTICATE_USER, UNAUTHENTICATE_USER } from '../constants/ActionTypes';
/**
 * This reducer handles updating the state with the user currently logged in.
 */
const authentication = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return action.authentication;
    case UNAUTHENTICATE_USER:
      return action.authentication;
    default:
      return state;
  }
}

export default authentication;