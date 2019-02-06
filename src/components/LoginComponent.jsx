import React from 'react';
import UsernameField from './utils/UsernameField';
import PasswordField from './utils/PasswordField';
import SignupButton from './utils/SignupButton';
import './sass/login.scss';

const Login = () => {
  return (
    <div className="container">
      <div className="card medium signup-card">
        <div className="row">
          <span className="card-title signup-title">Login in to Fast-Food-Fast</span>
          <form className="col s12">
            <UsernameField />
            <PasswordField />
            <SignupButton name="login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
