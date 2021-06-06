import * as t from 'io-ts';

// Контракт: "Статус получения информации о кредитном рейтинге"
// Documentation: https://sandbox-api.finanso.com/#/Credit-rating/api%5Cmodules%5Cv1%5Cmodules%5Crating%5Ccontrollers%5CScoringController%3A%3AactionStatus
export enum STATUS {
  NOT_EXISTS = 'NOT_EXISTS',
  EXISTS = 'EXISTS',
  IN_PROCESS = 'IN_PROCESS',
}

export const StatusScoringsEnumValidator = t.keyof({
  [STATUS.NOT_EXISTS]: null,
  [STATUS.EXISTS]: null,
  [STATUS.IN_PROCESS]: null,
});

export const okStatusRatingScoringsStatusContract = t.interface({
  status: StatusScoringsEnumValidator,
});

export const errorStatusRatingScoringsStatusContract = t.interface({
  status: t.boolean,
  message: t.string,
});
