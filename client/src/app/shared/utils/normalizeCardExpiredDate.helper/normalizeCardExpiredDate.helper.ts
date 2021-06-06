import { flow } from 'lodash';

/**
 * Отформатировать дату
 *
 * `1234 --> 12 / 34`
 *
 * @param {string} number
 * @returns {string}
 */
export const formatCardExpiredDate = (number: string): string => {
  if (!number) {
    return '';
  }

  const MAX_LENGTH = 4;
  const ALLOWED_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let str = String(number);

  if (str.length >= MAX_LENGTH) {
    str = str.substr(0, MAX_LENGTH);
  }

  return Array.from(str)
    .map((char, pos) => {
      let digitChar = ALLOWED_CHARS.includes(char) ? char : '';

      return pos % 2 || pos === 0 ? digitChar : ` / ${digitChar}`;
    })
    .join('');
};

/**
 * Нормализовать дату
 *
 * `12 / 34 --> 1234`
 *
 * @param {string} number
 * @returns {string}
 */
export const normalizeCardExpiredDate = (number: string): string =>
  number.replace(/\s+/g, '').replace(/\/+/g, '');

/**
 * Pipe для установки отформатированного срока действия карты
 *
 * @param {string} number
 *
 * @returns {string} CardExpiredDateForHuman
 */
export const setCardExpiredDateForHuman = flow([
  normalizeCardExpiredDate,
  formatCardExpiredDate,
]);
