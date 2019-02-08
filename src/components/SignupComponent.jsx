import React from 'react';
import PropTypes from 'prop-types';
import EmailField from './utils/EmailField';
import ContactField from './utils/ContactField';
import UsernameField from './utils/UsernameField';
import PasswordField from './utils/PasswordField';
import SignupButton from './utils/SignupButton';
import RadioButtons from './utils/RadioButton';

const SignupPage = ({ onSubmit, onRadioChange, onChange }) => {
  return (
    <div className="home-page s12 m4 l3">
      <div className="container s12 m4 l3">
        <div className="signup-container s12 m6 l3">
          <div className="row z-depth-4 signup-card">
            <h5>SignUp into Fast-Food-Fast</h5>
            <form className="col s12">
              <UsernameField onChange={onChange}/>
              <EmailField onChange={onChange}/>
              <ContactField onChange={onChange}/>
              <PasswordField onChange={onChange}/>
              <RadioButtons onChange={onRadioChange}/>
              <SignupButton name="signup" onClick={onSubmit}/>
              <p><a href="/" className="grey-text darken-2-text">Already have an account</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

SignupPage.propTypes = {
  onSubmit: PropTypes.func,
  onRadioChange: PropTypes.func,
  onChange: PropTypes.func,
};

export default SignupPage;
