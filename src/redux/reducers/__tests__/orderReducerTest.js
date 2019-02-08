import errorOccured from '../../actions/errorAction';
import orderReducer from '../orderReducer';
import placeOrder from '../../actions/OrderActions';

const initialState = {
  message: '',
  error: '',
};

describe('orders reducer', () => {
  it('should return initial state', () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });

  it('should return success message', () => {
    const expected = {
      message: 'Order placed successfully',
      error: '',
    };
    expect(
      orderReducer(initialState, placeOrder('Order placed successfully')),
    ).toEqual(expected);
  });

  it('should return error message', () => {
    const expected = {
      message: null,
      error: 'Transaction available to only client user',
    };
    expect(
      orderReducer(initialState, errorOccured('Transaction available to only client user')),
    ).toEqual(expected);
  });
});
