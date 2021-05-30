import * as Sentry from '@sentry/browser';
import { select } from 'redux-saga/effects';

import { sentryEnchancedMessage } from '../../../../../shared/utils/runtimeReporters';

import { data as userProfileSelector } from '../../../../../states/UserProfile/state/selectors';

/**
 * Локальный onError "callback",
 * в случае ошибки выводит информацию об ошибке и экшене
 * в консоль и отправляет ошибку в sentry
 *
 * @param {*} error
 * @param {*} action
 */
export function* onError(error: any = null, action: any = null) {
  const userProfile = yield select(userProfileSelector);

  let err = {};
  if (error) {
    err = { ...err, error, action };
  } else {
    err = { ...err, error: new Error('Common Saga Error'), action };
  }

  sentryEnchancedMessage({
    level: Sentry.Severity.Error,
    tag: 'SAGA ERROR',
    user: userProfile,
    payload: err,
    message: 'Saga safe wrapper error',
  });

  // NB: Разрешенный игнор
  // eslint-disable-next-line
  console.log('[SAGA ERROR]:', err);

  return err;
}
