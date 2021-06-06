import { fork, all } from 'redux-saga/effects';

import { citiesSaga } from '../../states/Cities/state/saga';

export default function* rootSaga() {
  yield all([fork(citiesSaga)]);
}
