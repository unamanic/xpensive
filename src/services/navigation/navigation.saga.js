import { all, call, put, race, take, takeEvery } from "@redux-saga/core/effects";
import navigationService from "./navigation.service";
import {
  NAVIGATION_BACK, NAVIGATION_BACK_END, NAVIGATION_BACK_START,
  NAVIGATION_NAVIGATE,
  NAVIGATION_NAVIGATE_END,
  NAVIGATION_NAVIGATE_START
} from "./navigation.action";

export default function* navigationSaga() {
  yield all([
    yield takeEvery(NAVIGATION_NAVIGATE, navigateSaga),
    yield takeEvery(NAVIGATION_BACK, backSaga)
  ]);
}

function* navigateSaga(action) {
  yield put({ type: NAVIGATION_NAVIGATE_START });
  const {routeName, params} = action.payload;
  yield call(navigationService.navigate, routeName, params);
  yield put({ type: NAVIGATION_NAVIGATE_END, payload: action.payload });
}

function* backSaga(action) {
  yield put({ type: NAVIGATION_BACK_START });
  yield call(navigationService.back);
  yield put({ type: NAVIGATION_BACK_END, payload: action.payload });
}


