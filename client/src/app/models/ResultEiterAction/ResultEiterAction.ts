import * as E from 'fp-ts/lib/Either';

/**
 * Интерфейс экшена в котором находится
 * результат запроса из АПИ, содержащий монаду Either
 *
 * @export
 * @interface IResultEiterAction
 */
export interface IResultEiterAction {
  type: string;
  payload: E.Either<any, any>;
}
