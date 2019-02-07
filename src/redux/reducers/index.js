/**  module to combine all reducers */
import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import menuReducer from './MenuReducer';

const rootReducer = () => combineReducers({
  authReducer,
  menuReducer,
});

export default rootReducer;
