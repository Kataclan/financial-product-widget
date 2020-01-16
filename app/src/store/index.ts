import { applyMiddleware, createStore } from 'redux';
import { composeEnhancers } from './utils';
import appReducer from './reducer';

import { createLogger } from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';

import rootSaga from './sagas';

// This is a function to create the initial store. It creates the main state store
// with a redux-thunk and logger middlewares
export default function configureStore() {
  //Init middlewares
  const loggerMiddleWare = createLogger({ collapsed: true });
  const sagaMiddleWare = createSagaMiddleWare();
  const middlewares = [loggerMiddleWare, sagaMiddleWare];

  //Init enhancer
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  //Store creation
  const store = createStore(appReducer, enhancer);

  //Saga initialization
  sagaMiddleWare.run(rootSaga);

  return store;
}
