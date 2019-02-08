import { ERROR_OCCURED, PLACE_ORDER } from '../actions/types';

const initialState = {
  message: '',
  error: '',
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
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

export default orderReducer;
