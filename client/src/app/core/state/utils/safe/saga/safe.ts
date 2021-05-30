import { call, put } from 'redux-saga/effects';
import get from 'lodash/get';

/**
 * Обертка реализующая try-catch над эффектами для саг
 *
 * IDEA: https://github.com/redux-saga/redux-saga/issues/1250
 * IDEA: https://enrose.github.io/React/redux-saga-error-handling.html
 *
 * @param {*} [handler=null]
 * @param {*} saga
 * @param {...any} args
 */
export const safe = (handler: any = null, saga: any, ...args: any) =>
  function* tryCatcher(action: any) {
    try {
      yield call(saga, action, ...args);
    } catch (error) {
      const err = yield call(handler, error, action, ...args);
      const [restArgsObj = {}] = args;
      const terminator = get(restArgsObj, 'terminator', null) || null;

      if (terminator) {
        yield put({
          type: terminator.toString(),
          payload: err,
        });
      }

      return err;
    }
  };
