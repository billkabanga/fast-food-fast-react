import React from 'react';
import PropTypes from 'prop-types';

const PasswordField = ({ onChange }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <i className="material-icons prefix">https</i>
        <input id="icon_password" type="password" className="validate" name="password" onChange={onChange}/>
        <label htmlFor="icon_password">Password</label>
      </div>
    </div>
  );
};

PasswordField.propTypes = {
  onChange: PropTypes.func,
};

export default PasswordField;
