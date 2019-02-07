import { ADD_MENU_ITEM, ERROR_OCCURED } from '../actions/types';

const initialState = {
  message: null,
  error: null,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU_ITEM:
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

export default menuReducer;
