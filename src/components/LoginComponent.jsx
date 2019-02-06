import React from 'react';
import UsernameField from './utils/UsernameField';
import PasswordField from './utils/PasswordField';
import SignupButton from './utils/SignupButton';
import './sass/login.scss';
import RadioButtons from './utils/RadioButton';

const LoginPage = ({ onChange, onRadioChange, onSubmit }) => {
  return (
    <div className="home-page s12 m4 l3">
      <div className="container s12 m4 l3">
        <div className="signup-container s12 m6 l3">
          <div className="row z-depth-4 signup-card">
            <h5>Login to Fast-Food-Fast</h5>
            <form className="col s12">
              <UsernameField onChange={onChange}/>
              <PasswordField onChange={onChange}/>
              <RadioButtons onChange={onRadioChange}/>
              <SignupButton name="login" onClick={onSubmit}/>
              <p><a href="#" className="grey-text darken-2-text">I forgot my password</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
