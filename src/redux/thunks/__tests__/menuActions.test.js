import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import addMenuItem from '../../actions/MenuActions';
import { postDataThunkPrivate, axiosInstance } from '..';
import { ADD_MENU_ITEM, ERROR_OCCURED } from '../../actions/types';

describe('auth actions', () => {
  let httpMock;
  let store;
  const initialState = {
    message: null,
    error: null,
  };
  const menuData = {
    item: 'chips',
    price: '1000',
  };

  beforeEach(() => {
    httpMock = new MockAdapter(axiosInstance);
    const mockStore = configureStore([thunk]);
    store = mockStore(initialState);
  });

  it('should return success message', () => {
    const response = {
      message: 'Food option added successfuly',
    };
    httpMock.onPost('menu').reply(201, response);
    // eslint-disable-next-line jest/valid-expect-in-promise
    store
      .dispatch(postDataThunkPrivate('menu', menuData, addMenuItem, 'post'))
      .then(() => {
        expect(store.getActions()).toEqual([{ type: ADD_MENU_ITEM, message: response }]);
      });
  });

  it('should return error message', () => {
    const response = {
      error: {
        message: 'Please provide price, provide food item as well',
      },
    };
    httpMock.onPost('menu').reply(400, response);
    // eslint-disable-next-line jest/valid-expect-in-promise
    store
      .dispatch(postDataThunkPrivate('menu', {}, addMenuItem, 'post'))
      .catch(() => {
        expect(store.getActions()).toEqual([{ type: ERROR_OCCURED, message: response }]);
      });
  });
});
