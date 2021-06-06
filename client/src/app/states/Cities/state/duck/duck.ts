import { combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initData = { data: [] };

// Actions ==========================

const CITIES = 'CITIES';

// Запрос информации из АПИ
export const citiesRequest = createAction(`${CITIES}/REQUEST`);
export const citiesSuccess = createAction(`${CITIES}/SUCCESS`);
export const citiesFailure = createAction(`${CITIES}/FAILURE`);

// Запрос информации из АПИ
export const citiesFilteredRequest = createAction(`${CITIES}/FILTERED_REQUEST`);
export const citiesFilteredSuccess = createAction(`${CITIES}/FILTERED_SUCCESS`);
export const citiesFilteredFailure = createAction(`${CITIES}/FILTERED_FAILURE`);

// Запрос информации из АПИ
export const citiesCityRequest = createAction(`${CITIES}/ARTICLE_REQUEST`);
export const citiesCitySuccess = createAction(`${CITIES}/ARTICLE_SUCCESS`);
export const citiesCityFailure = createAction(`${CITIES}/ARTICLE_FAILURE`);

// Запрос информации из АПИ
export const citiesCategoriesRequest = createAction(
  `${CITIES}/CATEGORIES_REQUEST`,
);
export const citiesCategoriesSuccess = createAction(
  `${CITIES}/CATEGORIES_SUCCESS`,
);
export const citiesCategoriesFailure = createAction(
  `${CITIES}/CATEGORIES_FAILURE`,
);

// Результат запроса
export const citiesResult = createAction(`${CITIES}/RESULT`);

// Результат запроса отфильтрованных статей
export const citiesFilteredResult = createAction(`${CITIES}/FILTERED_RESULT`);

// Результат запроса данных одной статьи
export const citiesCityResult = createAction(`${CITIES}/ARTICLE_RESULT`);

// Результат запроса данных категорий
export const citiesCategoriesResult = createAction(
  `${CITIES}/CATEGORIES_RESULT`,
);

// Запрос данных при скроллинге
export const citiesSecondRequest = createAction(`${CITIES}/SECOND_REQUEST`);

// Результат запроса при скроллинге
export const citiesSecondResult = createAction(`${CITIES}/SECOND_RESULT`);

// Запрос данных при скроллинге
export const citiesSecondFilteredRequest = createAction(
  `${CITIES}/SECOND_FILTERED_REQUEST`,
);

// Результат запроса при скроллинге
export const citiesSecondFilteredResult = createAction(
  `${CITIES}/SECOND_FILTERED_RESULT`,
);

// Reducers ==========================

// Статус запроса данных из АПИ
const isFetching = createReducer(false, {
  [citiesRequest.toString()]: () => true,
  [citiesResult.toString()]: () => false,
  [citiesSuccess.toString()]: () => false,
  [citiesFailure.toString()]: () => false,

  [citiesFilteredRequest.toString()]: () => true,
  [citiesFilteredResult.toString()]: () => false,
  [citiesFilteredSuccess.toString()]: () => false,
  [citiesFilteredFailure.toString()]: () => false,
});

// Статус кеша данных
const isAlreadyChashed = createReducer(false, {
  [citiesRequest.toString()]: () => false,
  [citiesResult.toString()]: () => true,
  [citiesSuccess.toString()]: () => true,
  [citiesFailure.toString()]: () => false,

  // Не кешировать при запросе отфильтрованных статей
  [citiesFilteredRequest.toString()]: () => false,
  [citiesFilteredResult.toString()]: () => false,
  [citiesFilteredSuccess.toString()]: () => false,
  [citiesFilteredFailure.toString()]: () => false,
});

// Статус запроса данных из АПИ
const isFetchingSecond = createReducer(false, {
  [citiesSecondRequest.toString()]: () => true,
  [citiesSecondResult.toString()]: () => false,
  [citiesSuccess.toString()]: () => false,
  [citiesFailure.toString()]: () => false,

  [citiesSecondFilteredRequest.toString()]: () => true,
  [citiesSecondFilteredResult.toString()]: () => false,
  [citiesFilteredSuccess.toString()]: () => false,
  [citiesFilteredFailure.toString()]: () => false,
});

// Статус запроса данных из АПИ
const isFetchingCity = createReducer(false, {
  [citiesCityRequest.toString()]: () => true,
  [citiesCityResult.toString()]: () => false,
  [citiesCitySuccess.toString()]: () => false,
  [citiesCityFailure.toString()]: () => false,
});

// Статус запроса данных из АПИ
const isFetchingCategories = createReducer(false, {
  [citiesCategoriesRequest.toString()]: () => true,
  [citiesCategoriesResult.toString()]: () => false,
  [citiesCategoriesSuccess.toString()]: () => false,
  [citiesCategoriesFailure.toString()]: () => false,
});

// Аккумулятор полезных данных АПИ
const data = createReducer(
  { ...initData },
  {
    [citiesRequest.toString()]: (state = initData) => ({
      ...state,
    }),
    [citiesFilteredRequest.toString()]: (state = initData) => ({
      ...state,
    }),
    [citiesSuccess.toString()]: (_state, action) => action.payload,
    [citiesFilteredSuccess.toString()]: (_state, action) => action.payload,
  },
);

// Данные со статьями
const dataCity = createReducer(
  {},
  {
    [citiesCityRequest.toString()]: (state = {}) => ({ ...state }),
    [citiesCitySuccess.toString()]: (_state, action) => action.payload,
  },
);

// Результат запроса данных из АПИ (содержит монаду либо с успешным результатом, либо с ошибкой)
const result = createReducer(
  {},
  {
    [citiesRequest.toString()]: () => ({}),
    [citiesResult.toString()]: (_state, action) => action.payload,

    [citiesSecondRequest.toString()]: () => ({}),
    [citiesSecondResult.toString()]: (_state, action) => action.payload,

    [citiesFilteredRequest.toString()]: () => ({}),
    [citiesFilteredResult.toString()]: (_state, action) => action.payload,

    [citiesSecondFilteredRequest.toString()]: () => ({}),
    [citiesSecondFilteredResult.toString()]: (_state, action) => action.payload,
  },
);

// Результат запроса данных статьи из АПИ
// (содержит монаду либо с успешным результатом, либо с ошибкой)
const resultCity = createReducer(
  {},
  {
    [citiesCityRequest.toString()]: () => ({}),
    [citiesCityResult.toString()]: (_state, action) => action.payload,
  },
);

// Результат запроса данных категорий из АПИ
// (содержит монаду либо с успешным результатом, либо с ошибкой)
const resultCategories = createReducer(
  {},
  {
    [citiesCategoriesRequest.toString()]: () => ({}),
    [citiesCategoriesResult.toString()]: (_state, action) => action.payload,
  },
);

// Root Reducer
const reducer = combineReducers({
  isFetching,
  data,
  result,
  isFetchingSecond,
  isFetchingCity,
  dataCity,
  isAlreadyChashed,
  resultCity,
  resultCategories,
  isFetchingCategories,
});

export default reducer;
