import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { citiesReducer } from '../../states/Cities/state/duck';

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    citiesReducer,
  });

export default rootReducer;
