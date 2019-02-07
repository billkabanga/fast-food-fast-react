import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import userSignUp from '../../actions/AuthActions';
import postDataThunkPublic, { axiosInstance } from '..';
import { SIGNUP_USER, ERROR_OCCURED } from '../../actions/types';

describe('auth actions', () => {
  let httpMock;
  let store;
  const initialState = {
    message: null,
    error: null,
  };
  const userData = {
    username: 'kabanga',
    email: 'tkbillkabanga@gmail.com',
    contact: '0784318356',
    password: '123456789',
    role: 'admin',
  };

  beforeEach(() => {
    httpMock = new MockAdapter(axiosInstance);
    const mockStore = configureStore([thunk]);
    store = mockStore(initialState);
  });

  it('should return success message', () => {
    const response = {
      message: 'new user registered',
    };
    httpMock.onPost('auth/signup').reply(201, response);
    // eslint-disable-next-line jest/valid-expect-in-promise
    store
      .dispatch(postDataThunkPublic('auth/signup', userData, userSignUp, 'post'))
      .then(() => {
        expect(store.getActions()).toEqual([{ type: SIGNUP_USER, message: response }]);
      });
  });

  it('should return error message', () => {
    const response = {
      error: {
        message: "username can't be empty",
      },
    };
    httpMock.onPost('auth/signup').reply(400, response);
    // eslint-disable-next-line jest/valid-expect-in-promise
    store
      .dispatch(postDataThunkPublic('auth/signup', {}, userSignUp, 'post'))
      .catch(() => {
        expect(store.getActions()).toEqual([{ type: ERROR_OCCURED, message: response }]);
      });
  });
});
