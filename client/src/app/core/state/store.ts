/* eslint-disable no-underscore-dangle */

import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

export const history = createBrowserHistory();

const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware({
    onError: error => {
      // NB: Уведомление в консоль
      // eslint-disable-next-line no-console
      console.log('[SAGA GlobalError]:', error);
    },
  });

  const store = createStore(
    rootReducer(history),
    compose(
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any) => f,
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createAppStore;

export const store = createAppStore();
