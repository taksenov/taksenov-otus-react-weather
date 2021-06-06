import { put, takeLatest, call, select, takeEvery } from 'redux-saga/effects';
import get from 'lodash/get';
import * as E from 'fp-ts/lib/Either';

import { citiesAPI } from '../../../../services/Cities/api';

import {
  citiesRequest,
  citiesResult,
  citiesSuccess,
  citiesFailure,
  citiesSecondRequest,
  citiesSecondResult,
  citiesCityRequest,
  citiesCitySuccess,
  citiesCityFailure,
  citiesCityResult,
  // citiesCategoriesRequest,
  // citiesCategoriesFailure,
  // citiesCategoriesResult,
  citiesFilteredRequest,
  citiesFilteredSuccess,
  citiesFilteredFailure,
  citiesFilteredResult,
  citiesSecondFilteredRequest,
  citiesSecondFilteredResult,
} from '../duck';

import { citiesList, dataCity } from '../selectors';

import { safe } from '../../../../core/state/utils/safe/saga';
import { onError } from '../../../../core/state/utils/onError/saga';
import { createResultV2 } from '../../../../core/state/utils/createResult/saga';

import { IResultEiterAction } from '../../../../models/ResultEiterAction';

export function* getData(): any {
  const citiesRes = yield call(citiesAPI.getData);

  yield put({
    type: citiesResult.toString(),
    payload: createResultV2(citiesRes),
  });
} // getData =========

export function* checkResult(
  action: IResultEiterAction,
): IterableIterator<any> {
  const { payload } = action;

  if (E.isRight(payload)) {
    const { right: successData } = payload;
    const dataRes = get(successData, 'data.list', []) || [];
    const data = Array.isArray(dataRes) ? dataRes : [];

    yield put({
      type: citiesSuccess.toString(),
      payload: { data },
    });
  }

  if (E.isLeft(payload)) {
    yield put({
      type: citiesFailure.toString(),
    });
  }
} // checkResult =========

export function* getFilteredData(): any {
  const citiesRes = yield call(citiesAPI.getData);

  yield put({
    type: citiesFilteredResult.toString(),
    payload: createResultV2(citiesRes),
  });
} // getFilteredData =========

export function* checkFilteredResult(
  action: IResultEiterAction,
): IterableIterator<any> {
  const { payload } = action;

  if (E.isRight(payload)) {
    const { right: successData } = payload;
    const dataRes = get(successData, 'data', []) || [];
    const data = Array.isArray(dataRes) ? dataRes : [];

    yield put({
      type: citiesFilteredSuccess.toString(),
      payload: { data },
    });
  }

  if (E.isLeft(payload)) {
    yield put({
      type: citiesFilteredFailure.toString(),
    });
  }
} // checkFilteredResult =========

export function* getSecondData(): any {
  const citiesRes = yield call(citiesAPI.getData);

  yield put({
    type: citiesSecondResult.toString(),
    payload: createResultV2(citiesRes),
  });
} // getSecondData =========

export function* checkSecondResult(
  action: IResultEiterAction,
): IterableIterator<any> {
  const { payload } = action;

  if (E.isRight(payload)) {
    const resivedCitys: any = yield select(citiesList);
    const { right: successData } = payload;
    const dataRes = get(successData, 'data', []) || [];
    const data = Array.isArray(dataRes) ? dataRes : [];
    const payloadTmp = {
      data: [...resivedCitys, ...data],
    };

    yield put({
      type: citiesSuccess.toString(),
      payload: payloadTmp,
    });
  }

  if (E.isLeft(payload)) {
    yield put({
      type: citiesFailure.toString(),
    });
  }
} // checkSecondResult =========

export function* getSecondFilteredData(): any {
  const citiesRes = yield call(citiesAPI.getData);

  yield put({
    type: citiesSecondFilteredResult.toString(),
    payload: createResultV2(citiesRes),
  });
} // getSecondFilteredData =========

export function* checkSecondFilteredResult(
  action: IResultEiterAction,
): IterableIterator<any> {
  const { payload } = action;

  if (E.isRight(payload)) {
    const resivedCitys: any = yield select(citiesList);
    const { right: successData } = payload;
    const dataRes = get(successData, 'data', []) || [];
    const data = Array.isArray(dataRes) ? dataRes : [];
    const payloadTmp = {
      data: [...resivedCitys, ...data],
    };

    yield put({
      type: citiesFilteredSuccess.toString(),
      payload: payloadTmp,
    });
  }

  if (E.isLeft(payload)) {
    yield put({
      type: citiesFilteredFailure.toString(),
    });
  }
} // checkSecondFilteredResult =========

export function* getCityData(action: any): any {
  const { payload } = action;
  const articleRes = yield call(citiesAPI.getDataCity, payload);

  yield put({
    type: citiesCityResult.toString(),
    payload: createResultV2(articleRes),
  });
} // getCityData =========

export function* checkCityResult(
  action: IResultEiterAction,
): IterableIterator<any> {
  const { payload } = action;

  if (E.isRight(payload)) {
    const cachedCitys: any = yield select(dataCity);
    const { right: successData } = payload;
    const dataRes = get(successData, 'data', { id: -1 }) || { id: -1 };
    const { id } = dataRes;

    let payloadTmp = {
      ...cachedCitys,
    };

    if (!cachedCitys[id]) {
      payloadTmp = {
        ...payloadTmp,
        [id]: dataRes,
      };
    }

    yield put({
      type: citiesCitySuccess.toString(),
      payload: payloadTmp,
    });
  }

  if (E.isLeft(payload)) {
    yield put({
      type: citiesCityFailure.toString(),
    });
  }
} // checkCityResult =========

// Root Saga
export default function* rootSaga() {
  yield takeLatest(
    citiesRequest,
    safe(onError, getData, {
      terminator: citiesFailure,
    }),
  );

  yield takeLatest(
    citiesFilteredRequest,
    safe(onError, getFilteredData, {
      terminator: citiesFilteredFailure,
    }),
  );

  yield takeLatest(
    citiesSecondRequest,
    safe(onError, getSecondData, {
      terminator: citiesFailure,
    }),
  );

  yield takeLatest(
    citiesSecondFilteredRequest,
    safe(onError, getSecondFilteredData, {
      terminator: citiesFilteredFailure,
    }),
  );

  yield takeLatest(
    citiesCityRequest,
    safe(onError, getCityData, {
      terminator: citiesCityFailure,
    }),
  );

  // Either checkers
  yield takeEvery(citiesResult, safe(onError, checkResult));
  yield takeEvery(citiesSecondResult, safe(onError, checkSecondResult));
  yield takeEvery(citiesCityResult, safe(onError, checkCityResult));
  yield takeEvery(citiesFilteredResult, safe(onError, checkFilteredResult));
  yield takeEvery(
    citiesSecondFilteredResult,
    safe(onError, checkSecondFilteredResult),
  );
}
