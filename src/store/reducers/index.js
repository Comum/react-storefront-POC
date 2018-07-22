import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import account from './account-reducer';

export default combineReducers({
  sample: (state = { a: true }) => state,
  account: account,
  routing: routerReducer
});
