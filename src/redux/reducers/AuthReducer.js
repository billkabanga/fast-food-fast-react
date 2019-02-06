import { SIGNUP_USER, ERROR_OCCURED } from '../actions/types';

const initialState = {
  message: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        message: action.message,
        error: '',
      };
    case ERROR_OCCURED:
      return {
        ...state,
        error: action.error,
        message: null,
      };
    default:
      return state;
  }
};

export default authReducer;
