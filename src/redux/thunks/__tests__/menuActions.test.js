import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { addMenuItem, getMenu } from '../../actions/MenuActions';
import { postDataThunkPrivate, axiosInstance, getDataThunkPublic } from '..';
import { ADD_MENU_ITEM, ERROR_OCCURED, GET_MENU } from '../../actions/types';

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

  it('should return menu', () => {
    const response = [
      {
        item: 'chips',
        price: '2000',
      },
      {
        item: 'chbnn',
        price: '2000',
      },
    ];

    httpMock.onGet('menu').reply(200, response);
    // eslint-disable-next-line jest/valid-expect-in-promise
    store
      .dispatch(getDataThunkPublic('menu', getMenu))
      .then(() => {
        expect(store.getActions()).toEqual([{ type: GET_MENU, menu: response }]);
      });
  });

  it('should return error on fetch menu', () => {
    const response = {
      error: {
        message: 'No available food items',
      },
    };

    httpMock.onGet('menu').reply(404, response);
    // eslint-disable-next-line jest/valid-expect-in-promise
    store
      .dispatch(getDataThunkPublic('menu', getMenu))
      .then(() => {
        expect(store.getActions()).toEqual([{ type: ERROR_OCCURED, error: response }]);
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
