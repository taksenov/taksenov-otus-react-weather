/**
 * Отформатировать CVV код
 *
 * `123`
 *
 * @param {string} number
 * @returns {string}
 */
export const setCardCVVForHuman = (number: string): string => {
  if (!number) {
    return '';
  }

  const MAX_LENGTH = 3;
  const ALLOWED_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let str = String(number);

  if (str.length >= MAX_LENGTH) {
    str = str.substr(0, MAX_LENGTH);
  }

  return Array.from(str)
    .map(char => {
      let digitChar = ALLOWED_CHARS.includes(char) ? char : '';

      return digitChar;
    })
    .join('');
};
