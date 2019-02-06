import { SIGNUP_USER } from './types';

const userSignUp = message => ({
  type: SIGNUP_USER,
  message,
});

export default userSignUp;
