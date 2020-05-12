import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import reducer from './reducer';
import * as AuthReducer from './reducer/auth';
import rootSaga from './sagas';

export interface State {
  auth: AuthReducer.State;
}

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore: MakeStore = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store: SagaStore = createStore(
    reducer,
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(sagaMiddleware)
      : composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  // 3: Run your sagas on server
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper<State>(makeStore, {
  debug: process.env.NODE_ENV === 'production' ? false : true,
});
