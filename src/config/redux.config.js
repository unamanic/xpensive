
import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import rootSaga from './sagas.config';
import createSagaMiddleware from 'redux-saga'
import { authenticationReducer } from '../services/authentication/authentication.reducer';

const reducer = combineReducers( {
  auth: authenticationReducer,
});


const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_DATA') {
    state = undefined
  }

  return reducer(state, action)
};

const sagaMiddleware = createSagaMiddleware();


export function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(
    sagaMiddleware
  ));

  sagaMiddleware.run(rootSaga);

  return store;
}

const store = configureStore();

export default store;