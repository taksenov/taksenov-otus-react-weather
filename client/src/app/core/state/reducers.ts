import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { articlesReducer } from '../../states/Articles/state/duck';

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    articlesReducer,
  });

export default rootReducer;
