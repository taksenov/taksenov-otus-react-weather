import { combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initData = { data: [] };

// Actions ==========================

const ARTICLES = 'ARTICLES';

// Запрос информации из АПИ
export const citiesRequest = createAction(`${ARTICLES}/REQUEST`);
export const citiesSuccess = createAction(`${ARTICLES}/SUCCESS`);
export const citiesFailure = createAction(`${ARTICLES}/FAILURE`);

// Запрос информации из АПИ
export const citiesFilteredRequest = createAction(
  `${ARTICLES}/FILTERED_REQUEST`,
);
export const citiesFilteredSuccess = createAction(
  `${ARTICLES}/FILTERED_SUCCESS`,
);
export const citiesFilteredFailure = createAction(
  `${ARTICLES}/FILTERED_FAILURE`,
);

// Запрос информации из АПИ
export const citiesCityRequest = createAction(`${ARTICLES}/ARTICLE_REQUEST`);
export const citiesCitySuccess = createAction(`${ARTICLES}/ARTICLE_SUCCESS`);
export const citiesCityFailure = createAction(`${ARTICLES}/ARTICLE_FAILURE`);

// Запрос информации из АПИ
export const citiesCategoriesRequest = createAction(
  `${ARTICLES}/CATEGORIES_REQUEST`,
);
export const citiesCategoriesSuccess = createAction(
  `${ARTICLES}/CATEGORIES_SUCCESS`,
);
export const citiesCategoriesFailure = createAction(
  `${ARTICLES}/CATEGORIES_FAILURE`,
);

// Результат запроса
export const citiesResult = createAction(`${ARTICLES}/RESULT`);

// Результат запроса отфильтрованных статей
export const citiesFilteredResult = createAction(`${ARTICLES}/FILTERED_RESULT`);

// Результат запроса данных одной статьи
export const citiesCityResult = createAction(`${ARTICLES}/ARTICLE_RESULT`);

// Результат запроса данных категорий
export const citiesCategoriesResult = createAction(
  `${ARTICLES}/CATEGORIES_RESULT`,
);

// Запрос данных при скроллинге
export const citiesSecondRequest = createAction(`${ARTICLES}/SECOND_REQUEST`);

// Результат запроса при скроллинге
export const citiesSecondResult = createAction(`${ARTICLES}/SECOND_RESULT`);

// Запрос данных при скроллинге
export const citiesSecondFilteredRequest = createAction(
  `${ARTICLES}/SECOND_FILTERED_REQUEST`,
);

// Результат запроса при скроллинге
export const citiesSecondFilteredResult = createAction(
  `${ARTICLES}/SECOND_FILTERED_RESULT`,
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
const isFetchingArticle = createReducer(false, {
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
const dataArticle = createReducer(
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
const resultArticle = createReducer(
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
  isFetchingArticle,
  dataArticle,
  isAlreadyChashed,
  resultArticle,
  resultCategories,
  isFetchingCategories,
});

export default reducer;
