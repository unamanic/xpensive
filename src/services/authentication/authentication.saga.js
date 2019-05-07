import { all, call, put, race, take, takeEvery } from "@redux-saga/core/effects";
import {
  AUTHENTICATION_LOGIN,
  AUTHENTICATION_LOGIN_END,
  AUTHENTICATION_LOGIN_ERROR,
  AUTHENTICATION_LOGIN_START,
  AUTHENTICATION_LOGOUT,
  AUTHENTICATION_LOGOUT_END,
  AUTHENTICATION_LOGOUT_ERROR,
  AUTHENTICATION_LOGOUT_START,
} from './authentication.actions';
import { NAVIGATION_NAVIGATE } from "../navigation/navigation.action";
import authenticationService from "./authentication.service";

export default function* authenticationSagas() {
  yield all([
    yield takeEvery(AUTHENTICATION_LOGIN, loginSaga),
    yield takeEvery(AUTHENTICATION_LOGOUT, logoutSaga),
  ]);
}

function* loginSaga(action){
  yield put({type: AUTHENTICATION_LOGIN_START});
  try {
    const { username, password} = action.payload;
    const response = yield call(authenticationService.login, username,password);
    yield put({type: AUTHENTICATION_LOGIN_END, payload: {isLoggedIn: true}});
    yield put({type: NAVIGATION_NAVIGATE, payload: {routeName: 'Home'}})
  } catch (e) {
    console.log(e);
    yield put({type: AUTHENTICATION_LOGIN_ERROR});
  }
}

function* logoutSaga(){
  yield put({type: AUTHENTICATION_LOGOUT_START});
  try {
    const response = yield call(authenticationService.logout);
    yield put({type: AUTHENTICATION_LOGOUT_END, payload: {isLoggedIn: false}});
    yield put({type: NAVIGATION_NAVIGATE, payload: {routeName: 'Login'}})

  } catch (e) {
    console.log(e);
    yield put({type: AUTHENTICATION_LOGOUT_ERROR});
  }
}