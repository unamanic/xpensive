import {
  AUTHENTICATION_LOGIN_END, AUTHENTICATION_LOGIN_ERROR,
  AUTHENTICATION_LOGIN_START,
  AUTHENTICATION_LOGOUT_END, AUTHENTICATION_LOGOUT_ERROR,
} from './authentication.actions';

const INITIAL_STATE = {
  isLoggedIn: false,
  isError: false,
  isLoading: false,
  username: undefined,
  role: undefined,
};

export const authenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATION_LOGIN_START:
      return { ...state, isLoading: true, isLoggedIn: false, isError: false };
    case AUTHENTICATION_LOGIN_END:
    case AUTHENTICATION_LOGOUT_END:
      return { ...state, ...action.payload, isLoading: false, isError: false };
    case AUTHENTICATION_LOGIN_ERROR:
    case AUTHENTICATION_LOGOUT_ERROR:
      return { ...state, ...action.payload, isLoading: false, isError: true };
    default:
      return state;
  }
};