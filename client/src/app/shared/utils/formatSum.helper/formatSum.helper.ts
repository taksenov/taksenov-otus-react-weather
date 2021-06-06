/* eslint-disable prefer-template */

import { THINSP } from '../../constants/Defaults/constants';

/**
 * Форматирует число. (56234.95 -> 56 234.95)
 *
 * @param {Number} value число для форматирования
 * @returns {String} форматированная сумма
 */
export const formatSum = (value: number): string => {
  if (typeof value !== 'string' && typeof value !== 'number') {
    return '';
  }

  const sum = value.toString();
  const dotIndex = sum.lastIndexOf('.');
  const beforeDot = dotIndex > -1 ? sum.substr(0, dotIndex) : sum;
  const afterDot = dotIndex > -1 ? sum.substr(dotIndex + 1) : null;

  return dotIndex > -1
    ? `${beforeDot.replace(/(\d)(?=(\d{3})+$)/g, '$1' + THINSP)}.${afterDot}`
    : sum.replace(/(\d)(?=(\d{3})+$)/g, '$1' + THINSP);
};
