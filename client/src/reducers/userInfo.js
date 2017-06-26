import { RETRIEVE_USER_INFO, UPDATE_USER_NAME } from '../constants/ActionTypes';
/**
 * This reducer handles updating the state with the user currently logged in.
 */
const authentication = (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_USER_INFO:
      return action.userInfo;
    case UPDATE_USER_NAME:
      return action.displayName;
    default:
      return state;
  }
}

export default authentication;