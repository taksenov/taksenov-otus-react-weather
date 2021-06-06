import AxiosInstance from '../../../core/api/axiosinstance';

import { environment } from '../../../../environment';

const apiPrefix = environment.API_PREFIX;
const versionOnePrefix = environment.API_VERSION_ONE_PREFIX;
const apiKey = environment.API_KEY;

/**
 * Articles API
 */
export default {
  /**
   * Получить данные всех статей
   *
   * @returns
   */
  getData() {
    return AxiosInstance('').get(
      `${apiPrefix}data/${versionOnePrefix}/find?lat=55.5&lon=37.5&cnt=10&appid=${apiKey}`,
    );
  },

  /**
   * Получить данные конкретной статьи
   *
   * @returns
   */
  getDataArticle(data: any) {
    const { token, id } = data;

    return AxiosInstance(token).get(
      `${apiPrefix}${versionOnePrefix}/blog/articles/${id}`,
    );
  },

  /**
   * Получить данные всех категорий
   *
   * @returns
   */
  getDataСategories(data: any) {
    const { token } = data;

    return AxiosInstance(token).get(
      `${apiPrefix}${versionOnePrefix}/blog/articles/categories`,
    );
  },
};
