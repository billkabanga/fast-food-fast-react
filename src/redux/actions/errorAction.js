import { ERROR_OCCURED } from './types';

const errorOccured = error => ({ type: ERROR_OCCURED, error });

export default errorOccured;
