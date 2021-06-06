/**
 * Отформатировать email
 *
 * `taksenov@gmail.com --> ta***v@gmail.com`
 *
 * @param {string} email
 * @returns {string}
 */
export const formatEmailSecure = (email: string): string => {
  if (!email) {
    return '';
  }

  const str = String(email);
  const [prefix, suffix] = str.split('@');
  switch (true) {
    case prefix.length <= 2:
      return `${prefix.substr(0, 1)}***@${suffix}`;

    default:
      return `${prefix.substr(0, 2)}***${prefix.substr(-1, 1)}@${suffix}`;
  }
};
