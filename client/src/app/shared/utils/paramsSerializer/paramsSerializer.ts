import { stringify } from 'qs';

/**
 * Сериализует объект в параметрическую строку URL, но без использования
 * декодирования спец символов, например: ` ` !== %20 и тд
 *
 * @param {*} params -- { a: ['b', 'c'] }
 * @returns string -- a[]=b&a[]=c
 */
export const paramsSerializerWitoutEncode = (params: any) =>
  stringify(params, {
    skipNulls: true,
    arrayFormat: 'brackets',
    encode: false,
  });

/**
 * Сериализует объект в параметрическую строку URL
 *
 * @param {*} params -- { a: ['b', 'c'] }
 * @returns string -- a[]=b&a[]=c
 */
const paramsSerializer = (params: any) =>
  stringify(params, {
    skipNulls: true,
    arrayFormat: 'brackets',
  });

export default paramsSerializer;
