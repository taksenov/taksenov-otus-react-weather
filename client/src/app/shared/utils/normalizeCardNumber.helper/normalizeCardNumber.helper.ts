import { flow } from 'lodash';

/**
 * Отформатировать номер карты, добавить пробелы между группами по 4 цифры.
 *
 * `1234123412341234 --> 1234 1234 1234 1234`
 *
 * @param {string} number
 * @returns {string}
 */
export const formatCardNumber = (number: string): string => {
  if (!number) {
    return '';
  }

  const MAX_LENGTH = 16;
  const ALLOWED_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let str = String(number);

  if (str.length >= MAX_LENGTH) {
    str = str.substr(0, MAX_LENGTH);
  }

  return Array.from(str)
    .map((char, pos) => {
      let digitChar = ALLOWED_CHARS.includes(char) ? char : '';

      return pos % 4 || pos === 0 ? digitChar : ` ${digitChar}`;
    })
    .join('');
};

/**
 * Нормализовать номер карты, убрать пробелы оставить только цифры
 *
 * `1234 1234 1234 1234 --> 1234123412341234`
 *
 * @param {string} number
 * @returns {string}
 */
export const normalizeCardNumber = (number: string): string =>
  number.replace(/\s+/g, '');

/**
 * Pipe для установки отформатированного номера карты
 *
 * @param {string} number
 *
 * @returns {string} CardNumberForHuman
 */
export const setCardNumberForHuman = flow([
  normalizeCardNumber,
  formatCardNumber,
]);
