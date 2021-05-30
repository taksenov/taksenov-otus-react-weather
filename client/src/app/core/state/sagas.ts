import { fork, all } from 'redux-saga/effects';

import { articlesSaga } from '../../states/Articles/state/saga';

export default function* rootSaga() {
  yield all([fork(articlesSaga)]);
}
