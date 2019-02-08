import { PLACE_ORDER } from './types';

const placeOrder = message => ({
  type: PLACE_ORDER,
  message,
});

export default placeOrder;
