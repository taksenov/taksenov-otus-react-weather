import * as t from 'io-ts';

// Контракт: "Статус получения информации о задолженностях"
// Documentation: https://sandbox-api.finanso.com/#/Credit-rating/api%5Cmodules%5Cv1%5Cmodules%5Crating%5Ccontrollers%5CDebtController%3A%3AactionStatus
export enum STATUS {
  NOT_EXISTS = 'NOT_EXISTS',
  EXISTS = 'EXISTS',
  IN_PROCESS = 'IN_PROCESS',
}

export const StatusEnumValidator = t.keyof({
  [STATUS.NOT_EXISTS]: null,
  [STATUS.EXISTS]: null,
  [STATUS.IN_PROCESS]: null,
});

export const okStatusRatingDebtsStatusContract = t.interface({
  status: StatusEnumValidator,
});

export const errorStatusRatingDebtsStatusContract = t.interface({
  status: t.boolean,
  message: t.string,
});
