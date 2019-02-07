import authReducer from '../AuthReducer';
import userSignUp from '../../actions/AuthActions';
import errorOccured from '../../actions/errorAction';

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

describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('should return success message', () => {
    const expected = {
      message: 'new user registered',
      error: '',
    };
    expect(authReducer(initialState, userSignUp('new user registered'))).toEqual(expected);
  });

  it('should return error message', () => {
    const expected = {
      message: null,
      error: "username can't be empty",
    };
    expect(authReducer(initialState, errorOccured("username can't be empty"))).toEqual(expected);
  });
});
