import { flow } from 'lodash';

/**
 * NB: Форматирование номеров построено по принципам принятым согласно данной статье
 * "National conventions for writing telephone numbers"
 * https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers
 *
 * RU: Microsoft format
 * https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers#Russia
 *
 * Необходимо добавлять адаптеры под каждую страну отдельно
 */

/**
 * Отформатировать номер телефона
 *
 * `+79222049227 --> +7 (922) 204-92-27`
 *
 * @param {Object} { number: string; country: string }
 * @returns {string}
 */
export const formatPhoneSecure = ({
  number,
  country,
}: {
  number: string;
  country: string;
}): string => {
  if (!number) {
    return '';
  }

  switch (country.toLowerCase()) {
    case 'ru': {
      const MAX_LENGTH = 18;
      const ALLOWED_CHARS = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '+',
      ];

      let str = `+${String(number)}`;

      if (str.length >= MAX_LENGTH) {
        str = str.substr(0, MAX_LENGTH);
      }

      return Array.from(str)
        .map((char, pos) => {
          let digitChar = ALLOWED_CHARS.includes(char) ? char : '';
          //  * `+79222049227 --> +7 (922) ***-*2-27`
          //     012345678911
          //               01
          switch (true) {
            case pos === 1:
              return `${digitChar} `;
            case pos === 2:
              return `(${digitChar}`;
            case pos === 4:
              return `${digitChar}) `;
            case pos === 5 || pos === 6 || pos === 8:
              return '*';
            case pos === 7:
              return '*-';
            case pos === 10:
              return `-${digitChar}`;

            default:
              return digitChar;
          }
        })
        .join('');
    }

    default:
      return '';
  }
};

/**
 * Нормализовать номер телефона
 *
 * RU: `+7 (922) 204-92-27 --> +79222049227`
 *
 * @param {string} number
 * @returns {string}
 */
export const normalizePhone = (
  number: string,
  country: string,
): { number: string; country: string } => {
  switch (country.toLowerCase()) {
    case 'ru': {
      return {
        number: number
          .replace(/\s+/g, '')
          .replace(/-+/g, '')
          .replace(/\(+/g, '')
          .replace(/\)+/g, ''),
        country,
      };
    }

    default: {
      return {
        number: number
          .replace(/\s+/g, '')
          .replace(/-+/g, '')
          .replace(/\(+/g, '')
          .replace(/\)+/g, ''),
        country,
      };
    }
  }
};

/**
 * Pipe для установки отформатированной строки
 *
 * @param {string} number
 * @param {string} country
 *
 * @returns {string} PhoneSecureForHuman
 */
export const setPhoneSecureForHuman = flow([normalizePhone, formatPhoneSecure]);
