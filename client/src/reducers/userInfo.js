import { RETRIEVE_USER_INFO, UPDATE_USER_INFO } from '../constants/ActionTypes';
/**
 * This reducer handles updating the state with the user currently logged in.
 */
const authentication = (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_USER_INFO:
      return action.userInfo;
    case UPDATE_USER_INFO:
      return action.userInfo;
    default:
      return state;
  }
}

export default authentication;