/* eslint-disable dot-notation */

import axios from 'axios';

import { environment } from '../../../environment';

import { MAIN_HEADER_REQUEST } from './constants';

const apiURL = environment.API_PREFIX;
const JSON_TYPE = 'JSON';
const FORM_DATA_TYPE = 'FORM_DATA';

/**
 * Настройки для axios
 *
 * Если токен установлен, то условие : token !== '' вернет true
 *
 * @param {string} token
 * @param {string} type 'JSON' | 'FORM_DATA'
 * @returns
 */
const AxiosInstance = (token = '', type = JSON_TYPE) => {
  let contentType = 'application/json';
  if (type === FORM_DATA_TYPE) {
    contentType = 'multipart/form-data';
  }

  // Set config defaults when creating the instance
  const instance = axios.create({
    baseURL: apiURL,
    headers: {
      ...MAIN_HEADER_REQUEST,
      'Content-Type': contentType,
    },
    withCredentials: token !== '' ? false : true,
    validateStatus: status => {
      return status < 500; // Reject only if the status code is greater than or equal to 500
    },
  });

  if (token !== '') {
    // Alter defaults after instance has been created
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return instance;
};

export default AxiosInstance;
