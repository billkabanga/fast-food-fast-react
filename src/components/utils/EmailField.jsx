import React from 'react';
import PropTypes from 'prop-types';

const EmailField = ({ onChange }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <i className="material-icons prefix">email</i>
        <input id="icon_email" type="text" className="validate" onChange={onChange} name="email"/>
        <label htmlFor="icon_email">Email</label>
      </div>
    </div>
  );
};

EmailField.propTypes = {
  onChange: PropTypes.func,
};

export default EmailField;
