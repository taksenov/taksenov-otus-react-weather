/**
 * Запись Данных
 *
 * @param {*} localStorageKey - имя ключа в локал сторадж
 * @param {*} data - данные присвоенные данному ключу
 */
export const setData = (localStorageKey: string, data: any) => {
  window.localStorage.setItem(localStorageKey, JSON.stringify(data));
};

/**
 * Получение Данных
 *
 * @param {*} localStorageKey
 * @returns data - данные токена
 */
export const getData = (localStorageKey: string) => {
  const stringData: any = window.localStorage.getItem(localStorageKey);
  let data = null;

  try {
    data = JSON.parse(stringData);
  } catch (error) {
    // NB: Разрешенный игнор
    // eslint-disable-next-line
    console.log('[LocalStorage getData]:', error);
  }

  if (data) {
    return data;
  }

  return false;
};

/**
 * Удаление Данных
 *
 * @param {*} localStorageKey - имя ключа в локал сторадж
 */
export const removeData = (localStorageKey: string) => {
  const stringData = window.localStorage.getItem(localStorageKey);

  if (stringData) {
    window.localStorage.removeItem(localStorageKey);
  }
};
