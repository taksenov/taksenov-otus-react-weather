/**
 * Локальный onError "callback",
 * в случае ошибки выводит информацию об ошибке и экшене
 * в консоль
 *
 * @param {*} error
 * @param {*} action
 */
export function* onError(error: any = null, action: any = null) {
  let err = {};
  if (error) {
    err = { ...err, error, action };
  } else {
    err = { ...err, error: new Error('Common Saga Error'), action };
  }

  // NB: Разрешенный игнор
  // eslint-disable-next-line
  yield console.log('[SAGA ERROR]:', err);

  return err;
}
