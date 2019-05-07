import { all } from 'redux-saga/effects';
import authenticationSagas from '../services/authentication/authentication.saga';
import navigationSaga from "../services/navigation/navigation.saga";

export default function* rootSaga() {
  yield all([
    authenticationSagas(),
    navigationSaga(),
  ])
}