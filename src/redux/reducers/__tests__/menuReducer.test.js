import menuReducer from '../MenuReducer';
import addMenuItem from '../../actions/MenuActions';
import errorOccured from '../../actions/errorAction';

const initialState = {
  message: null,
  error: null,
};

describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(menuReducer(undefined, {})).toEqual(initialState);
  });

  it('should return success message', () => {
    const expected = {
      message: 'Food option added successfuly',
      error: '',
    };
    expect(
      menuReducer(initialState, addMenuItem('Food option added successfuly')),
    ).toEqual(expected);
  });

  it('should return error message', () => {
    const expected = {
      message: null,
      error: 'Please provide price, provide food item as well',
    };
    expect(
      menuReducer(initialState, errorOccured('Please provide price, provide food item as well')),
    ).toEqual(expected);
  });
});