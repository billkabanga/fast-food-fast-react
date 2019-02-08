/**  module to combine all reducers */
import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import menuReducer from './MenuReducer';
import orderReducer from './orderReducer';

const rootReducer = () => combineReducers({
  authReducer,
  menuReducer,
  orderReducer,
});

export default rootReducer;
