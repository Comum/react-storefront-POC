import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import account from './account-reducer';

export default combineReducers({
  account: account,
  routing: routerReducer
});
