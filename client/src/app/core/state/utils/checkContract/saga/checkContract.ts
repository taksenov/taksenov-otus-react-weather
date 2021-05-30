import * as E from 'fp-ts/lib/Either';
import get from 'lodash/get';

/**
 * Направление "потока данных":
 * 'B_F' от бекенда к фронтенду;
 * 'F_B' от фронтенда к бекенду;
 *
 * @enum DIRECTION
 */
export enum DIRECTION {
  B_F = 'B_F',
  F_B = 'F_B',
}

/**
 * Проверяет контракт между бекендом и фронтендом, в случае нарушения контракта
 * происходит отправка уведомления в сентри
 *
 * @export
 * @param {*} action
 * @returns
 */
export function* checkContract({
  contract,
  data,
  direction,
}: {
  contract: any;
  data: any;
  direction: DIRECTION.B_F | DIRECTION.F_B;
}) {
  const isContract = get(contract, 'decode', false) || false;
  if (!isContract) {
    return null;
  }

  const contractStatus = contract.decode(data);
  const contractName =
    get(contract, 'name', 'NOT_A_CONTRACT') || 'NOT_A_CONTRACT';

  if (E.isLeft(contractStatus)) {
    const dir =
      direction === DIRECTION.B_F
        ? 'VIOLATION FROM BACKEND'
        : 'VIOLATION FROM FRONTEND';

    // NB: Уведомление в консоль
    // eslint-disable-next-line no-console
    console.log('[Contract error]:', {
      level: 'Error',
      tag: `CONTRACT: ${dir}`,
      payload: { data },
      message: `Contract error: ${dir} -- Name: ${contractName}`,
    });
  }
}
