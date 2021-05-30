import * as E from 'fp-ts/lib/Either';

interface IAgrs {
  status: number;
  data: Record<any, any>;
  init?: string;
}

/**
 * MULTIPLY and SINGLE Response Version
 *
 * Создает результат полученных данных из АПИ
 * на основе монады Either:
 *
 * - успешный результат записывается в rigth
 *
 * - не успех записывается в left
 *
 * @param {*} {
 *   status,
 *   data,
 * }
 */
export const createResultV2: (args: IAgrs) => E.Either<any, any> = ({
  status,
  data,
  init = '',
  ...rest
}) =>
  status === 200
    ? E.right({ status, data, init, ...rest })
    : E.left({ status, data, init, ...rest });
