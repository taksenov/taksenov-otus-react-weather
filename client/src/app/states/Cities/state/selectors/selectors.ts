import { createSelector } from 'reselect';
import * as E from 'fp-ts/lib/Either';
import get from 'lodash/get';

export const isFetching = (store: any) => store.citiesReducer.isFetching;

export const isFetchingSecond = (store: any) =>
  store.citiesReducer.isFetchingSecond;

export const resultCity = createSelector(
  (store: any) => store.citiesReducer.resultCity,
  resultCity => resultCity,
);

export const result = createSelector(
  (store: any) => store.citiesReducer.result,
  result => result,
);

export const headers = createSelector(
  (store: any) => store.citiesReducer.result,
  result => {
    let tempResult = {};

    if (E.isRight(result)) {
      const { right: successData } = result;
      const dataRes = get(successData, 'headers', {}) || {};

      tempResult = { ...dataRes };
    }

    return tempResult;
  },
);

export const totalPages = createSelector(headers, headers => {
  const res = Number(get(headers, 'x-pagination-page-count', 1)) || 1;

  return res;
});

export const currentPage = createSelector(headers, headers => {
  const res = Number(get(headers, 'x-pagination-current-page', 1)) || 1;

  return res;
});

export const data = createSelector(
  (store: any) => store.citiesReducer.data,
  data => data,
);

export const citiesList = createSelector(data, (data = {}) => {
  const result = get(data, 'data', []) || [];

  return result;
});

export const isFetchingCity = (store: any) =>
  store.citiesReducer.isFetchingCity;

export const dataCity = createSelector(
  (store: any) => store.citiesReducer.dataCity,
  dataCity => dataCity,
);

export const isAlreadyChashed = (store: any) =>
  store.citiesReducer.isAlreadyChashed;

export const isFetchingCategories = (store: any) =>
  store.citiesReducer.isFetchingCategories;

export const resultCategories = createSelector(
  (store: any) => store.citiesReducer.resultCategories,
  resultCategories => resultCategories,
);
